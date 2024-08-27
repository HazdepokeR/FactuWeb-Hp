

fetch('json/admindata.json')
    .then((response) => {//llama al ultimobackup
      response.json()
    })
    .then(
      (json) => {
        console.log(json);//objeto json
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

console.log(sample);

function SalvarProgreso(){

}


function GenerarMenuPrincipal(){
  console.log('--GenerarMenuPrincipal()');
  let mainboard = document.getElementById('mainboard');
  let freg = document.createElement('p');
  freg.textContent="firtregister";
  mainboard.appendChild(freg);
}

GenerarMenuPrincipal();