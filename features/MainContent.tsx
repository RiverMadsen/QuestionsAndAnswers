import styles from '../styles/MainContent.module.css'
import Layout from '../components/layout'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import WebMap from '../pages/webmap' //pages\webmap.tsx
import { useState, useEffect } from 'react'
import { initDatabase, putToCollection, getFromCollection, clearCollection } from '../data/indexedDB'
import JSZip from 'jszip';


const MainContent = () => {

  // useEffect( ()=> {
  //   const router = useRouter();
  //   router.push(`webmap?type=coal`)
  // }, [useRouter])
  //const handleClick = () => {

  const router = useRouter();
  useEffect(() => {
    router.push('/webmap?page=home');
  }, []);

  const initDB = () => {
    initDatabase()
  }
  const viewImage = () => {
    getFromCollection('common_lowResMaps', 'T_10_391_253', (data) => {
      const image = new Image();
      //ebugger
      image.src = data.Value

      image.onload = function () {
        // draw the image on the canvas
        const canvas = document.getElementById("myCanvas");
        canvas.width = 256
        canvas.height = 256
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, 256, 256);
      };
    })
  }

  const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target && event.target.files){
      const file = event.target.files[0];
      if (file && file.type.toString().includes('application') && file.type.toString().includes('zip')) {
        clearCollection('highResMaps', async () => {
          console.log("collection cleared!!!")
          console.log("we have a zip")
          //debugger
          const zip = await JSZip.loadAsync(file);
          const text = await zip.file('tiles.json')?.async('text');
          putToCollection("highResMaps", JSON.parse(text), (args) => {
            console.log(args)
          })
        })

      }
    }
  }


  const downloadTiles = () => {
    //console.log("download")
    const downloadJsonFile = async () => {
      const response = await fetch('/tiles.json');
      const data = await response.json();

      putToCollection('common_lowResMaps', data, (args: any) => {
        console.log(args)
      })

    }
    downloadJsonFile()
  }
  return (
    <>
      {/* <WebMap></WebMap> */}
      <div className={styles.mainContent}>
        <div>(1) Initialize the database to hold topographic maps: <br></br>
          <button onClick={initDB}>
            Initialize Database
          </button>
        </div>
        <div>(2) Download satellite imagery tiles and load into database <br></br>
          <button onClick={downloadTiles}>
            Download Tiles
          </button>
        </div>
        <div>(3) View Image stored in database in a canvas <br></br>
          <button onClick={viewImage}>
            View Image
          </button><br>
          </br>
          <canvas id="myCanvas" className={styles.testCanvas}></canvas>
        </div>
        <div>(4) Unzip contents of high-res file and push to indexedDB <br></br>
          <div>
            <input type="file" accept=".zip" onChange={handleFileInputChange} />
          </div>
          <br>
          </br>
        </div>
        END OF FILE
      </div>
    </>
  )
}

MainContent.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}
  </Layout>
}

export default MainContent
