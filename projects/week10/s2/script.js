const gramminput = document.getElementById('gramm')
const kginput = document.getElementById('kg')
const poundinput = document.getElementById('pound')

poundinput.addEventListener('input',function () {
  const epound = parseFloat(poundinput.value);
  const egramm = epound/2.2046;
  const ekg = epound/2.2046;

  kginput.value = ekg;
  gramminput.value =egramm;
})

gramminput.addEventListener('input',function () {
  const egramm = parseFloat(gramminput.value);
  const epound = egramm*0.0022046;
  const ekg = egramm/1000;

  kginput.value = ekg;
  poundinput.value =epound;
})

kginput.addEventListener('input',function () {
  const ekg = parseFloat(kginput.value);
  const epound = ekg*2.2046;
  const egramm = ekg*1000;

  gramminput.value = egramm;
  poundinput.value =epound;
})
