const fs = require("fs");
var path = require('path');
var htmlContent = `<!doctype html>
                        <html lang="en">
                        <head>
                            <meta charset="utf-8">

                            <title>Reporte Resemble y Backstop</title>
                            <meta name="description" content="Reporte Resemble y Backstop">
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
                        </head>
                    <body>`

var screenshots_cypress = path.relative(process.cwd(), "cypress/cypress/screenshots");
let filenames = fs.readdirSync(screenshots_cypress);
htmlContent += `<div class='container'>`
htmlContent += `<h1> Reporte Resemble y Backstop </h1>`
htmlContent += "\n"
htmlContent += `<h2> Resemble Index Escenarios </h2>`
filenames.forEach((file, index) => {
    htmlContent += '<div class="mt-2 card w-75 text-center">' + '<h2>' +'Escenario' + (index+1) + '</h2>';
    let resultado_ep = screenshots_cypress + '\\' +file + '\\' + 'resultado';
    let dir_resultados = fs.readdirSync(resultado_ep);
    dir_resultados.forEach((file_resultado) => {
        if(file_resultado.endsWith('html')) {
            htmlContent += '<div >'
            htmlContent +=  '<a href="'  + resultado_ep + '\\' + file_resultado + "\"" + '>' + file_resultado + '</a>' + "\n" ;
            htmlContent += '</div>'
        }
    });
    htmlContent += '</div>'
});

htmlContent += `<h2> Backstop Index Escenarios </h2>`
htmlContent += '<div class="mt-2 card w-75 text-center">' + '<h3>' + 'Link al reporte consolidado de Backstop' + '</h3>';
htmlContent +=  '<a href="backstop_data\\html_report\\index.html">' + "Reporte Backstop Consolidado" + '</a>' + "\n" ;
htmlContent += '</div>'

htmlContent += `</div>`
htmlContent += `</body>
                </html>`

fs.writeFile('reporteConsolidado.html', htmlContent, (error) => { /* handle error */ });
