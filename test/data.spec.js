require('../src/data.js');
require('../src/data/worldbank/worldbank.js');



describe('Entrega listado de paises', () => {
  it('is a function', () => {
    expect(typeof country).toBe('function');
  });
  it('returns `countriesNames`', () => {
    expect(window.country()).toContainEqual(["Perú", "México", "Brasil", "Chile"]);
  });
});



describe('Entrega listado de indicadores', () => {
  it('is a function', () => {
    expect(typeof indicatorsNames).toBe('function');
  });
  it('returns `indicatorsNames`', () => {
    expect(window.indicatorsNames(window.WORLDBANK.MEX)).toContain('Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)');
  });
});

describe('Entrega datos asociados a un indicador', () => {
  it('is a function', () => {
    expect(typeof dataForYear).toBe('function');
  });

  it('returns `dataForYear`', () => {

    let nameIndicator = window.WORLDBANK.MEX.indicators[0];
    let almacenarObjetoData = nameIndicator.data;

    expect(window.dataForYear(almacenarObjetoData)).toContainEqual({ "valor": 33.1, "year": 1990 });
  });


});


describe('Ordena la informacion por año', () => {
  it('is a function', () => {
    expect(typeof orderDataForYear).toBe('function');
  });

  it('returns `orderDataForYear`', () => {
    let nameIndicator = window.WORLDBANK.MEX.indicators[0];
    let almacenarObjetoData = nameIndicator.data;
    let retornoDatosYear = window.dataForYear(almacenarObjetoData);
    expect(window.orderDataForYear(retornoDatosYear)).not.toBe(window.dataForYear(almacenarObjetoData));
  });
});


describe('Realiza calculo', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('returns `computeStats`', () => {
    let nameIndicator = window.WORLDBANK.MEX.indicators[0];
    let almacenarObjetoData = nameIndicator.data;
    let retornoDatosYear = window.dataForYear(almacenarObjetoData);
    expect(typeof (window.computeStats(retornoDatosYear))).toBe('number');
  });



});
