
const botoncargar = document.getElementById('cargarprogreso');
botoncargar.addEventListener("click", GenerarMenuPrincipal);
const botonguardar = document.getElementById('guardarprogreso');
botonguardar.addEventListener("click", SalvarProgreso);


var result;
var url;
var result2;

function SalvarProgreso(){
  console.log('SalvarProgreso--xd');
  console.log(result2);
  var datatosave = JSON.parse(result2);
  datatosave.name = 'magiax2xd';
  console.log(datatosave);

 var jsonse = JSON.stringify(datatosave);
 var blob = new Blob([jsonse], { type: "application/json" });
 var url = URL.createObjectURL(blob);
 let filesave = document.getElementById('fileoutput');
 filesave.href = url;
 filesave.download = 'archivo.json';

  //let savetodrive = '<div class="g-savetodrive" data-src="url" data-filename="datasave-facuweb.Json"data-sitename="My Company Name"></div>'
  
  let mainboard = document.getElementById('mainboard');
  let divsaingtodrive = document.createElement('div');
  //divsaingtodrive.textContent = savetodrive;
  mainboard.appendChild(divsaingtodrive);
  filesave.click();
  console.log('fin--');
}


function GenerarMenuPrincipal(){
  console.log('--GenerarMenuPrincipal()');
    if (upload.files.length > 0) 
    {
      var reader = new FileReader(); // File reader to read the file 
      // This event listener will happen when the reader has read the file
      reader.addEventListener('load', function() {
      result = JSON.parse(reader.result); // Parse the result into an object 
      result2 = JSON.stringify(result);
      console.log(result);
      console.log(result.userdata.name);
      let Ningresos = document.getElementById('Ningresos');
      let Ngastos = document.getElementById('Ngastos');
      let Nextra  = document.getElementById('Nextra');

      Ningresos.textContent = result.data.ingresos;
      Ngastos.textContent = result.data.gastos;
      Nextra.textContent = result.data.total;
      });
      reader.readAsText(upload.files[0]); // Read the uploaded file
      let uploadarea = document.getElementById('LoadArea-upload');
      uploadarea.style.display = "none";
      let savearea = document.getElementById('LoadArea-save');
      uploadarea.style.display = "block";
    }
}



  