require('../src/data.js');
require('../src/data/worldbank/worldbank.js');



describe('Entrega listado de paises', () => {
  it('is a function', () => {
    expect(typeof country).toBe('function');
  });
  it('returns `countriesNames`', () => {
    expect(country()).toContainEqual(["Perú", "México", "Brasil", "Chile"] );
});
});



describe('indicatorsNames', () => {
  it('is a function', () => {
    expect(typeof indicatorsNames).toBe('function');
  });
  it('returns `indicatorsNames`', () => {
    expect(indicatorsNames(window.WORLDBANK.MEX)).toContain('Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)');
});
});

describe('dataForYear', () => {
  it('is a function', () => {
    expect(typeof dataForYear).toBe('function');
  });

  it('returns `dataForYear`', () => {
    expect(dataForYear(almacenarObjetoData)).toContain('Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)');
  });


});


describe('orderDataForYear', () => {
  it('is a function', () => {
    expect(typeof orderDataForYear).toBe('function');
  });
});


describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });


  // it('returns `indicatorsNames`', () => {
  //   expect(indicatorsNames()).toBe("Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");
  // });
});
