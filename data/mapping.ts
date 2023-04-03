import config from '@arcgis/core/config'
import ArcGISMap from '@arcgis/core/Map'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import MapView from '@arcgis/core/views/MapView'
import Extent from '@arcgis/core/geometry/Extent'
import { watch } from '@arcgis/core/core/reactiveUtils'
import Expand from '@arcgis/core/widgets/Expand'
import Graphic from '@arcgis/core/Graphic'
import Polyline from '@arcgis/core/geometry/Polyline'
import Point from '@arcgis/core/geometry/Point'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import LabelClass from '@arcgis/core/Layers/support/LabelClass'
import TextSymbol from '@arcgis/core/symbols/TextSymbol'
import Font from "@arcgis/core/symbols/Font.js"
import { useGlobalContext } from '../components/Context/store'
import { getFromCollection } from './indexedDB'
import BaseTileLayer from '@arcgis/core/layers/BaseTileLayer'
import LayerList from '@arcgis/core/widgets/LayerList'
import esriRequest from '@arcgis/core/request'
import Color from '@arcgis/core/Color'

// config.apiKey = process.env.NEXT_PUBLIC_API_KEY as string

interface MapApp {
    view?: MapView;
    map?: ArcGISMap;
    layer?: FeatureLayer;
    graphicsLayer?: GraphicsLayer
    savedExtent?: any;
}

const app: MapApp = {}

let handler: IHandle


export async function initialize(container: HTMLDivElement, filter: string, onViewChange: any) {

    const TintLayer = (BaseTileLayer as any).createSubclass({
        properties: {
            urlTemplate: null,
            tint: {
                value: null,
                type: Color
            }
        },

        // generate the tile url for a given level, row and column
        getTileUrl: function (level: number, row: number, col: number) {
            return this.urlTemplate
                .replace("{z}", level)
                .replace("{x}", col)
                .replace("{y}", row);
        },
        // This method fetches tiles for the specified level and size.
        // Override this method to process the data returned from the server.
        fetchTile: function (level: number, row: number, col: number, options: any) {
            // call getTileUrl() method to construct the URL to tiles
            // for a given level, row and col provided by the LayerView
            const url = this.getTileUrl(level, row, col);
            console.log(`T_${level}_${row}_${col}`)
            // request for tiles based on the generated url
            // the signal option ensures that obsolete requests are aborted

            return getTile(`T_${level}_${row}_${col}`, level);
            /*
            return esriRequest(url, {
                responseType: "image",
                signal: options && options.signal
            }).then(
                function (response: any) {
                    // when esri request resolves successfully
                    // get the image from the response
                    const image = response.data;
                    const width = this.tileInfo.size[0];
                    const height = this.tileInfo.size[0];

                    // create a canvas with 2D rendering context
                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");
                    if (context == null) {
                        return
                    }
                    canvas.width = width;
                    canvas.height = height;

                    // Apply the tint color provided by
                    // by the application to the canvas
                    if (this.tint) {
                        // Get a CSS color string in rgba form
                        // representing the tint Color instance.
                        context.fillStyle = this.tint.toCss();
                        context.fillRect(0, 0, width, height);

                        // Applies "difference" blending operation between canvas
                        // and steman tiles. Difference blending operation subtracts
                        // the bottom layer (canvas) from the top layer (tiles) or the
                        // other way round to always get a positive value.
                        context.globalCompositeOperation = "difference";
                    }
                    // Draw the blended image onto the canvas.
                    context.drawImage(image, 0, 0, width, height);

                    return canvas;
                }.bind(this)
            );*/
        }
    });

    function getTile(tileToGet: string, level: number): Promise<HTMLCanvasElement> {
        const tilePromise = new Promise<HTMLCanvasElement>((resolve, reject) => {
            const canvas = document.createElement("canvas");
            canvas.width = 256
            canvas.height = 256
            let storeName = level < 11 ? 'common_lowResMaps' : 'highResMaps' 
            getFromCollection(storeName, tileToGet, (data) => {
                const image = new Image();
                if(data){
                    image.src = data.Value
                    image.onload = function () {
                        const context = canvas.getContext("2d");
                        if(!context){
                            return
                        }
                        context.drawImage(image, 0, 0, 256, 256);
                        resolve(canvas)
                    }
                }
                else{
                    console.log("Missing: " + tileToGet)
                }
            })
            //reject(canvas)   4.36 + 2.49
        })
        return tilePromise;
    }
        //     getFromCollection('common_lowResMaps', tileToGet, (data) => {
        //         const image = new Image();
        //         //ebugger
        //         image.src = data.Value
        //         image.onload = function () {
        //             // draw the image on the canvas
        //             const canvas = document.getElementById("myCanvas");
        //             canvas.width = 256
        //             canvas.height = 256
        //             const context = canvas.getContext("2d");
        //             context.drawImage(image, 0, 0, 256, 256);
        //             resolve(canvas)
        //         }
        //     }
        // })
        // return tilePromise;
    //}


    const stamenTileLayer = new TintLayer({
        urlTemplate: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
        tint: new Color("#004FBB"),
        title: "Stamen Toner"
    });

















    let i = 0;
    let coords: number[][] = []
    // coords.push([-125, 39])
    // coords.push([-75, 39])
    for (i = -125; i < -73; i++) {
        coords.push([i, 39])
    }
    const thirtyNinePath: number[][][] = [
        coords
    ]
    const points: number[][] = coords

    const polyline = new Polyline({
        paths: thirtyNinePath
    });
    const sls = new SimpleLineSymbol({
        color: [226, 0, 40],
        width: 2
    })
    const sms = new SimpleMarkerSymbol({
        color: [255, 255, 0],
        size: 6
    })
    const fnt = new Font({
        family: "Arial",
        size: 24,
        style: "italic",
        weight: "bold"
    })

    const pointGraphics: Graphic[] = []
    const labelGraphics: Graphic[] = []
    for (i = 0; i < coords.length; i++) {
        const pnt = new Point({ x: coords[i][0], y: coords[i][1] })
        const pointGraphic = new Graphic({
            geometry: pnt,
            symbol: sms,
        })
        const ts = new TextSymbol({
            color: "white",
            haloColor: "black",
            haloSize: "1px",
            text: (i - 125).toString(),
            font: fnt
        })
        const labelGraphic = new Graphic({
            geometry: pnt,
            symbol: ts,
        })
        labelGraphics.push(labelGraphic)
        pointGraphics.push(pointGraphic)
    }


    const lineSymbol = {
        type: "simple-line", // autocasts as new SimpleLineSymbol()
        color: [226, 119, 40], // RGB color values as an array
        width: 4
    };
    const lineAtt = {
        Name: "The 39th Parallel", // The name of the pipeline
        Owner: "River", // The owner of the pipeline
        Length: "3,456 km" // The length of the pipeline
    };
    const polylineGraphic = new Graphic({
        geometry: polyline, // Add the geometry created in step 3
        symbol: sls, // Add the symbol created in step 4
        attributes: lineAtt // Add the attributes created in step 5
    });
    const glLine = new GraphicsLayer()
    const glPoints = new GraphicsLayer()
    const glLabels = new GraphicsLayer()

    glLine.graphics.add(polylineGraphic)
    glPoints.addMany(pointGraphics)
    glLabels.addMany(labelGraphics)
    glLabels.minScale = 6000000
    glPoints.minScale = 24000000

    if (app.view) {
        app.view.destroy()
    }


    // const map = new ArcGISMap({
    //     basemap: 'satellite',
    //     layers: [glLine, glPoints, glLabels],

    // })
    const map = new ArcGISMap({
        layers: [stamenTileLayer, glLine, glPoints, glLabels]
    });

    const view = new MapView({
        map,
        container,
        zoom: 1,
        center: [-100, 39]
    })

    if (app.savedExtent) {
        view.extent = Extent.fromJSON(app.savedExtent)
    } else {
        glLine.when(() => {
            // debugger
            // view.extent = gl.fullExtent
        })
    }

    handler = watch(
        () => view.stationary && view.extent,
        () => {
            app.savedExtent = view.extent.toJSON()
            onViewChange(view.extent);
        }
    )

    app.map = map
    // app.layer = null
    app.view = view

    return cleanup
}

function cleanup() {
    //ebugger
    handler?.remove()
    app.view?.destroy()
}