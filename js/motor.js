

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
const botonguardar = document.getElementById('guardarprogreso');
botonguardar.addEventListener("click", SalvarProgreso);

var avance;
var result;
var url;


function SalvarProgreso(){
  console.log('SalvarProgreso--xd');
  console.log(result);

 // Suponiendo que "result" es el objeto que quieres convertir a JSON
 var result = { key: "value", anotherKey: "anotherValue" };

 // Convertir el objeto JSON a una cadena
 var jsonse = JSON.stringify(result);

 // Crear un Blob con el contenido JSON
 var blob = new Blob([jsonse], { type: "application/json" });

 // Crear una URL para el Blob
 var url = URL.createObjectURL(blob);

 // Obtener el elemento <a>
 let filesave = document.getElementById('fileoutput');

 // Asignar la URL al href del enlace
 filesave.href = url;

 // Establecer el atributo download para sugerir el nombre del archivo
 filesave.download = 'archivo.json';

  let savetodrive = '<div class="g-savetodrive" data-src="url" data-filename="datasave-facuweb.Json"data-sitename="My Company Name"></div>'
  
  let mainboard = document.getElementById('mainboard');
  let divsaingtodrive = document.createElement('div');
  divsaingtodrive.textContent = savetodrive;
  mainboard.appendChild(divsaingtodrive);
  console.log('fin--');
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
      result = JSON.parse(reader.result); // Parse the result into an object 
      console.log(result);
      console.log(result.name);
      console.log(result.age);
      console.log(result.occupation);
      });
      avance = result;
      reader.readAsText(upload.files[0]); // Read the uploaded file
    }
  }
}



  