import { FinancialData } from '@/store/market/dataMarket';

const API_KEY_YF = process.env.NEXT_PUBLIC_API_KEY_YF;
const API_HOST_YF = process.env.NEXT_PUBLIC_API_HOST_YF;
const URL_YF = process.env.NEXT_PUBLIC_URL_YF;

export const fetchCedearsData = async (): Promise<FinancialData[]> => {
    const cedears = [
      'AAPL.BA', 'TSLA.BA', 'MSFT.BA', 'AMZN.BA', 'NVDA.BA',
      'GOOGL.BA', 'META.BA', 'BRKB.BA', 'JNJ.BA', 'KO.BA'
    ];
  
    const fetchPromises = cedears.map(async (symbol) => {
      const response = await fetch(`${URL_YF}/history?symbol=${symbol}&interval=1wk&diffandsplits=false`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${API_KEY_YF}`,
          'X-RapidAPI-Host': `${API_HOST_YF}`
        }
      });
  

      const data = await response.json();
  
      return {
        meta: {
          symbol: data.meta.symbol,
          currency: data.meta.currency,
          exchangeName: data.meta.exchangeName,
          fullExchangeName: data.meta.fullExchangeName,
          longName: data.meta.longName
        },
        body: data.body.slice(-7)
      };
    });
  
    return Promise.all(fetchPromises);
  };
  