import sample from 'json/admindata.json';

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