
export const fetchVariableData = async (variable: string) => {
  const variablesMap: { [key: string]: number } = {
    reservasInternacionalesBCRA: 5,
    tipoCambioMinorista: 6,
    tipoCambioMayorista: 7,
    tasaPoliticaMonetaria: 8,
    badlarPesosBancosPrivados: 9,
    tasaPaseActivaBCRA: 10,
    tasaPrestamosPersonales: 11,
    baseMonetariaTotal: 12,
    inflacionMensual: 13,
    uva: 14,
  };

  const idVariable = variablesMap[variable];

  if (!idVariable) {
    console.error("Variable no válida");
    return [];
  }


  try {
    const response = await fetch(`https://api.bcra.gob.ar/estadisticas/v3.0/monetarias/${idVariable}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    // console.log(response)
    const data = await response.json();

    const results = data.results.slice(0, 10); 
    return results;
  } catch (error) {
    console.error("Error fetching variable data", error);
    return [];  
  }
};
