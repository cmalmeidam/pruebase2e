const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const { resolve } = require("path");

const FOLDER_PRINCIPAL = "./screenshots/";
const FOLDER_RESULT = "/resultado/";
const FOLDER_VERSION_3_3_0 = "/version_3_3_0/";
const FOLDER_VERSION_3_42_5 = "/version_3_42_5/";
const PREFIJO_RESUL = "dif_";

let informesDet = [];

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest() { 
  try {
    console.log("Caller");
    await generaReporte();
    console.log("this.informesDet:", JSON.stringify(informesDet));


    console.log("After waiting");
  } catch (error) {
    console.log("error_executeTest:", error);
    } finally {
    
    console.log(
      "Execution finished. Check the report under the results folder"
    );
  }
  return true;
}

/*function generaIndex() {
  return new Promise((resolve, reject) => {    
    console.log("Dentro promesa");
    fs.readdir(FOLDER_PRINCIPAL, async (err, files) => {


      
    }
    );

    resolve("OK");
    reject(`Error generaReporte`);
  });
}*/


function generaReporte() {
  return new Promise((resolve, reject) => {   
    let resp = []; 
    console.log("Dentro promesa");
    
    fs.readdir(FOLDER_PRINCIPAL, async (err, files) => {
      files.forEach(async (file) => {
        fs.readdir(
          FOLDER_PRINCIPAL + file + FOLDER_VERSION_3_3_0,
          async (err, files) => {
            let resulFolder = FOLDER_PRINCIPAL + file + FOLDER_RESULT;
            adminmFolder(resulFolder);
            if (!fs.existsSync(resulFolder)) {
              adminmFolder(resulFolder);
            }
            
            files.forEach(async (imagen) => {     
               compararImg(file, imagen, resulFolder)
              .then(()=> resp.push(resulFolder + PREFIJO_RESUL + file + "-" + imagen+ ".html"))
              .catch((err) =>
                console.log("compararImg:" + err)              
              );           
            });
            fs.copyFileSync('index.css', resulFolder + '/index.css');
          }
        );        
      });
    });
  })
}

function adminmFolder(resulFolder) {
  if (!fs.existsSync(resulFolder)) {
    fs.mkdirSync(resulFolder);
    return true;
  } else {
    fs.rmdirSync(
      resulFolder,
      {
        recursive: true,
      },
      (error) => {
        if (error) {
          console.log(error);
          return error;
        } else {
          fs.mkdirSync(resulFolder);
          return true;
        }
      }
    );
  }
}

async function compararImg(file, imagen, resulFolder) {
  let datetime = new Date().toISOString().replace(/:/g, ".");
  let img3_3_0 = FOLDER_PRINCIPAL + file + FOLDER_VERSION_3_3_0 + imagen;
  let img4_42_5 = FOLDER_PRINCIPAL + file + FOLDER_VERSION_3_42_5 + imagen;
  let img_dif = resulFolder + PREFIJO_RESUL + file + "-" + imagen;
  let img3_3_0_rep = "../" + FOLDER_VERSION_3_3_0 + imagen;
  let img4_42_5_rep = "../" + FOLDER_VERSION_3_42_5 + imagen;
  let img_dif_rep = PREFIJO_RESUL + file + "-" + imagen;
  let escenario = file + "-" + imagen;

  const data = await compareImages(
    fs.readFileSync(img3_3_0),
    fs.readFileSync(img4_42_5),
    options
  );
  resultInfo = {
    isSameDimensions: data.isSameDimensions,
    dimensionDifference: data.dimensionDifference,
    rawMisMatchPercentage: data.rawMisMatchPercentage,
    misMatchPercentage: data.misMatchPercentage,
    diffBounds: data.diffBounds,
    analysisTime: data.analysisTime,
  };
  fs.writeFileSync(img_dif, data.getBuffer());
  fs.writeFileSync(
    img_dif + ".html",
    createReport(
      datetime,
      resultInfo,
      img3_3_0_rep,
      img4_42_5_rep,
      img_dif_rep,
      escenario
    )
  );
  return img_dif + ".html";
}

function crearIndex() {
  return `
          <html>
              <head>
                  <title> VRT Report </title>                  
              </head>
              <body>
                  <h1>Report for Ghost 
                  </h1>                
                  <div id="visualizer">   
                        <ul>
                            <li>  <a href="./screenshots/ep01_crear_post.spec.js/resultado/dif_Paso1.png.html"> dif_Paso1.png.html</a></li>
                            <li>Elemento 2</li>          
                            <li>Elemento N</li>
                        </ul>           
                  </div>
              </body>
          </html>`;
}

function createReport(
  datetime,
  resInfo,
  img3_3_0,
  img4_42_5,
  img_dif,
  escenario
) {
  return `
        <html>
            <head>
                <title> VRT Report </title>
                <link href="index.css" type="text/css" rel="stylesheet">
            </head>
            <body>
                <h1>Report for 
                     <a href="${config.url}"> ${config.url}</a>
                </h1>
                <p>Executed: ${datetime}</p>
                <div id="visualizer">
                ${browser(resInfo, img3_3_0, img4_42_5, img_dif, escenario)}
                </div>
            </body>
        </html>`;
}

function browser(info, img3_3_0, img4_42_5, img_dif, escenario) {
  return `<div class=" browser" id="test0">
      <div class=" btitle"> 
      <h2>Escenario: ${escenario}</h2>         
          <p>Data: ${JSON.stringify(info)}</p>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Reference</span>
          <img class="img2" src="${img3_3_0}" id="refImage" label="Reference">
        </div>
        <div class="imgcontainer">
          <span class="imgname">Test</span>
          <img class="img2" src="${img4_42_5}" id="testImage" label="Test">
        </div>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Diff</span>
          <img class="imgfull" src="${img_dif}" id="diffImage" label="Diff">
        </div>
      </div>
    </div>`;
}

(async () => console.log(await executeTest()))();
