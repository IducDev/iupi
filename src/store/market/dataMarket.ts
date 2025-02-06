import { create } from "zustand";
import { fetchVariableData } from "@/utils/marketData/fetchDataBCRA";
// import { fetchBondsData } from "@/utils/marketData/fetchDataYFBonds";
// import { fetchCedearsData } from "@/utils/marketData/fetchDataYFCedears";

interface BCRAResponse {
  idVariable: number;
  fecha: string;
  valor: number;
}
interface BCRAData {
  idVariable: number;
  fecha: string;
  valor: number;
}

interface MarketData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjclose: number;
}

interface MetaData {
  symbol: string;
  currency: string;
  exchangeName: string;
  fullExchangeName: string;
  longName: string;
}

export interface FinancialData {
  meta: MetaData;
  body: MarketData[];
}

interface MarketState {
  reservasInternacionalesBCRA: BCRAData[];
  tipoCambioMinorista: BCRAData[];
  tipoCambioMayorista: BCRAData[];
  tasaPoliticaMonetaria: BCRAData[];
  badlarPesosBancosPrivados: BCRAData[];
  tasaPaseActivaBCRA: BCRAData[];
  tasaPrestamosPersonales: BCRAData[];
  baseMonetariaTotal: BCRAData[];
  inflacionMensual: BCRAData[];
  uva: BCRAData[];

  bonos: FinancialData[];
  cedears: FinancialData[];

  loadAllVariablesData: () => void;
  loadBondsData: (data: FinancialData[]) => void;
  loadCedearsData: (data: FinancialData[]) => void;
}

const marketStore = create<MarketState>((set) => ({
  reservasInternacionalesBCRA: [],
  tipoCambioMinorista: [],
  tipoCambioMayorista: [],
  tasaPoliticaMonetaria: [],
  badlarPesosBancosPrivados: [],
  tasaPaseActivaBCRA: [],
  tasaPrestamosPersonales: [],
  baseMonetariaTotal: [],
  inflacionMensual: [],
  uva: [],
  bonos: [],
  cedears: [],

  loadAllVariablesData: async () => {
    try {
      const [
        reservasInternacionalesBCRA,
        tipoCambioMinorista,
        tipoCambioMayorista,
        tasaPoliticaMonetaria,
        badlarPesosBancosPrivados,
        tasaPaseActivaBCRA,
        tasaPrestamosPersonales,
        baseMonetariaTotal,
        inflacionMensual,
        uva
      ] = await Promise.all([
        fetchVariableData("reservasInternacionalesBCRA"),
        fetchVariableData("tipoCambioMinorista"),
        fetchVariableData("tipoCambioMayorista"),
        fetchVariableData("tasaPoliticaMonetaria"),
        fetchVariableData("badlarPesosBancosPrivados"),
        fetchVariableData("tasaPaseActivaBCRA"),
        fetchVariableData("tasaPrestamosPersonales"),
        fetchVariableData("baseMonetariaTotal"),
        fetchVariableData("inflacionMensual"),
        fetchVariableData("uva")
      ]);


      const transformBCRAData = (bcraData: BCRAResponse[]): BCRAData[] => {
        return bcraData.map(item => ({
          idVariable: item.idVariable,  
          fecha: item.fecha,
          valor: item.valor
        }));
      };

      set({
        reservasInternacionalesBCRA: transformBCRAData(reservasInternacionalesBCRA),
        tipoCambioMinorista: transformBCRAData(tipoCambioMinorista),
        tipoCambioMayorista: transformBCRAData(tipoCambioMayorista),
        tasaPoliticaMonetaria: transformBCRAData(tasaPoliticaMonetaria),
        badlarPesosBancosPrivados: transformBCRAData(badlarPesosBancosPrivados),
        tasaPaseActivaBCRA: transformBCRAData(tasaPaseActivaBCRA),
        tasaPrestamosPersonales: transformBCRAData(tasaPrestamosPersonales),
        baseMonetariaTotal: transformBCRAData(baseMonetariaTotal),
        inflacionMensual: transformBCRAData(inflacionMensual),
        uva: transformBCRAData(uva),
      });

      // APPI Yahoo Finance
      // const bonos = await fetchBondsData();
      // const cedears = await fetchCedearsData();

      // set({
      //   bonos,
      //   cedears
      // });

      //Respaldo de DATA !!!
      try {
        const response = await fetch("/data/bonds.json");
        if (response.ok) {
          const backupData = await response.json();
          set({ bonos: backupData });
        } else {
          console.error("Failed to load backup bonos data.");
        }
      } catch (error) {
        console.error("Error loading backup bonos data from local file", error);
      }
      try {
        const response = await fetch("/data/cedears.json");
        if (response.ok) {
          const backupData = await response.json();
          set({ cedears: backupData });
        } else {
          console.error("Failed to load backup cedears data.");
        }
      } catch (error) {
        console.error("Error loading backup cedears data from local file", error);
      }
    

    } catch (error) {
      console.error("Error loading market variable data", error);
    }
  },

  loadBondsData: (data: FinancialData[]) => {
    set({ bonos: data });
  },

  loadCedearsData: (data: FinancialData[]) => {
    set({ cedears: data });
  },
}));

export default marketStore;
