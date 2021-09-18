const gramminput = document.getElementById('gramm')
const kginput = document.getElementById('kg')
const poundinput = document.getElementById('pound')
const ounceinput = document.getElementById('ounce')

poundinput.addEventListener('input',function () {
  const epound = parseFloat(poundinput.value);
  const egramm = epound/2.2046;
  const ekg = epound/2.2046;
  const eounce = epound*16
  kginput.value = 'kg:'+ekg;
  gramminput.value ='gramm:'+egramm;
  ounceinput.value = 'ounce:'+eounce;
})
