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

config.apiKey = process.env.NEXT_PUBLIC_API_KEY as string

interface MapApp {
    view?: MapView;
    map?: ArcGISMap;
    layer?: FeatureLayer;
    graphicsLayer?: GraphicsLayer
    savedExtent?: any;
}

const app: MapApp = {}

let handler: IHandle


export async function initialize(container: HTMLDivElement, filter: string) {
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
        const ts = new TextSymbol ({
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


    const map = new ArcGISMap({
        basemap: 'satellite',
        layers: [glLine, glPoints, glLabels],

    })

    const view = new MapView({
        map,
        container,
        zoom: 3,
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
        }
    )

    view.when(async () => {

        view.watch("extent", (x:any) => {
            debugger;
        })
    })

    app.map = map
    // app.layer = null
    app.view = view

    return cleanup
}

function cleanup() {
    handler?.remove()
    app.view?.destroy()
}