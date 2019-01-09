require('../src/data.js');
// require('../src/data/worldbank/worlbank.js');

describe('indicatorsNames', () => {
  

  it('is a function', () => {
    expect(typeof indicatorsNames).toBe('function');
  });


  it('returns `indicatorsNames`', () => {

    expect(indicatorsNames(window.WORLDBANK.PER)).toContain("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");
  });
});


describe('dataForYear', () => {
  it('is a function', () => {
    expect(typeof dataForYear).toBe('function');
  });


  // it('returns `indicatorsNames`', () => {
  //   expect(indicatorsNames("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)")).toBe("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");
  // });
});


describe('orderDataForYear', () => {
  it('is a function', () => {
    expect(typeof orderDataForYear).toBe('function');
  });


  // it('returns `indicatorsNames`', () => {
  //   expect(indicatorsNames("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)")).toBe("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");
  // });
});


describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });


  // it('returns `indicatorsNames`', () => {
  //   expect(indicatorsNames("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)")).toBe("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");
  // });
});
