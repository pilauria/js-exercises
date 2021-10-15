const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  };
  setInterval(passTime, 1000);
  return {
    // launch: launch, // we hide this information so it can't be manipulated from outside
    totalPeaceTime: totalPeaceTime,
  };
};

const ohno = makeNuclearButton();
ohno.totalPeaceTime();
