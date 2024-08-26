fetch('json/admindata.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

(() => {
    console.log('Ok');
  })();


console.log(sample);

function GenerarMenuPrincipal(){
  console.log('--GenerarMenuPrincipal()');
  let mainboard = document.getElementById('mainboard');
  let freg = document.createElement('p');
  freg.textContent="firtregister";
  mainboard.appendChild(freg);
}

GenerarMenuPrincipal();