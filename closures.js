function heavyduty(index) {
  const bigArray = new Array(7000).fill('💚');
  console.log('created!');
  return bigArray[index];
}

heavyduty(688);
heavyduty(688);
heavyduty(688);
const getHeavyDuty = heavyduty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

function heavyduty2() {
  const bigArray = new Array(7000).fill('💚');
  console.log('created Again!');
  return function (index) {
    return bigArray[index];
  };
}
/* The first heavyDuty was created three times(and destroyed as soon as each function ended, versus heavyDuty2 where we used closure's we were
able to create the bigArray once, and because we knew we were going to access it a lot, we just maintained that closure scope over it,
and we were able to call it over and over without doing all that creation/destruction work.*/
