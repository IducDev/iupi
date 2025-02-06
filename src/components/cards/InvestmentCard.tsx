import { MarketAsset } from "@/app/(router)/app/portfolio/components/MarketSection";
import { Close } from "@mui/icons-material";
import { LineChartBig } from "../graphs/linealChartBig";
import { useState } from "react";
import { ModalInvestement } from "../modal/Onbording/investment/ModalInvestement";

interface CardInvestmentProps {
  onClose: () => void;
  asset: MarketAsset;
}

export const CardInvestment = ({ onClose, asset }: CardInvestmentProps) => {
  const [cantidad, setCantidad] = useState<number>(1);  
  const [subtotal, setSubtotal] = useState<number>(0);  
  const [investment , setInvestment] = useState({
    cantidad:0,
    precio: 0,
    moneda:"",
    subtotal: 0,
    assetSymbol: ""
  })
  const [openModal, setOpenModal] = useState(false)
  const historialData = asset.body;


  const precio = asset.body[asset.body.length - 1].close;

  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCantidad = Number(e.target.value);
    setCantidad(newCantidad);
    setSubtotal(newCantidad * precio);  
  };


  const handleInvertir = () => {
    if(cantidad > 1){
    const investmentData = {
      cantidad,
      precio,
      moneda:asset.meta.currency,
      subtotal,
      assetSymbol: asset.meta.symbol,}

      setOpenModal(true)
      setInvestment(investmentData)
    }else{
        return
    } 

  };

  const handleCloseModal = () =>{
    setOpenModal(false)
  }

  return (
    <div className="">
        {openModal && <ModalInvestement inversionData={investment} onClose={handleCloseModal}/>}
      <button
        onClick={onClose}
        className="float-right bg-transparent text-black p-2 rounded-full"
      >
        <Close />
      </button>
      <div className="bg-white p-4">
        <h2 className="text-h5-semibold py-4">{asset.meta.longName}</h2>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-2 py-2">
            <span className="flex flex-col gap-2 text-p2-regular text-white900">
              Exchange:
              <p className="text-p2-regular text-white400 w-[70%]">
                {asset.meta.fullExchangeName}
              </p>
            </span>
            <span className="flex gap-1 text-p2-regular text-white900">
              Simbolo:
              <p className="text-p2-regular text-white400">
                {" "}
                {asset.meta.symbol}
              </p>
            </span>
            <span className="flex gap-1 text-p2-regular text-white900">
              Moneda:
              <p className="text-p2-regular text-white400">
                {" "}
                {asset.meta.currency}
              </p>
            </span>
            <span className="flex gap-1 text-p2-regular text-white900">
              Volumen:
              <p className="text-p2-regular text-white400">
                {" "}
                {asset.body[asset.body.length - 1].volume}
              </p>
            </span>
            <span className="flex gap-1 text-p2-regular text-white900">
              Apertura:
              <p className="text-p2-regular text-white400">
                {" "}
                ${asset.body[asset.body.length - 1].open.toFixed(2)}
              </p>
            </span>
            <span className="flex gap-1 text-p2-regular text-white900">
              Cotización:
              <p className="text-p2-regular text-white400">
                ${precio.toFixed(2)}
              </p>
            </span>
          </div>
          <LineChartBig historicalData={historialData} />
        </div>

        <form className="flex flex-row justify-around gap-3 p-4">
          <div className="flex flex-col gap-4 w-[50vh]">
                <label className="flex flex-row gap-2 items-center ">
                Precio:
                <div className="border rounded flex flex-row w-[7.5em] items-center">
                <input
                    type="text"
                    value={"$"+precio.toFixed(2)}
                    readOnly
                    className="p-2 w-[5em]"
                />{asset.meta.currency}
                </div>
                </label>
                <label>
                Cantidad: 
                <input
                    type="number"
                    value={cantidad}
                    onChange={handleCantidadChange}
                    className="border p-2 rounded w-[6em]"
                    min={1}
                />
                </label>
          </div>
          <div className="flex flex-col gap-3 w-[50vh]">
            <span className="text-p1-semibold pt-3">
              Subtotal: ${subtotal.toFixed(2)} {asset.meta.currency}
            </span>
          <button
            type="button"
            onClick={handleInvertir}
            className="mt-4 bg-accent400 text-white25 p-2 rounded-full w-[10em]"
            >
            Invertir
          </button>
              </div>
        </form>
      </div>
    </div>
  );
};
