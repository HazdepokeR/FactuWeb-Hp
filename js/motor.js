

/*fetch('json/admindata.json')
    .then((response) => {//llama al ultimobackup dentro de los archivos del sistema ok!
     response.json()
    })
    .then(
      (json) => {
        let lecturajson = json;
        console.log(json);//objeto json ok!
        console.log("print de identificador de json");
        console.log("el id del usuario es: " + json.id_usuario[0]);
        
        var jsonse = JSON.stringify(json);
        var blob = new Blob([jsonse], {type: "application/json"});
        var url  = URL.createObjectURL(blob);

        var a = document.createElement('a');
        a.href        = url;
        a.download    = "backup.json";
        a.textContent = "Download backup.json";

        document.getElementById('json').appendChild(a);
      }
    );

//console.log(sample);
*/

const botoncargar = document.getElementById('cargarprogreso');
botoncargar.addEventListener("click", GenerarMenuPrincipal);

function SalvarProgreso(){

}


function GenerarMenuPrincipal(){
  console.log('--GenerarMenuPrincipal()');

  var upload = document.getElementById('fileInput');
  // Make sure the DOM element exists
  if (upload) 
  {
    if (upload.files.length > 0) 
    {
      var reader = new FileReader(); // File reader to read the file 
      // This event listener will happen when the reader has read the file
      reader.addEventListener('load', function() {
      var result = JSON.parse(reader.result); // Parse the result into an object 
        
      console.log(result);
      console.log(result.name);
      console.log(result.age);
      console.log(result.occupation);
      });
      
      reader.readAsText(upload.files[0]); // Read the uploaded file
    }
  }
}



  