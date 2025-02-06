import { ArrowLargeLeft, SkipUser } from "@/assets"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Image from "next/image"
import Swal from "sweetalert2";

export const CardDataInvestment = ({ data, onClose }: { data: string, onClose: () => void }) => {

    const alias = "Alias.Falso.123456789";
    const cvu = "CVUFalso123456789";

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Información copiada!',
                text: 'La información se han copiado al portapapeles.',
                showConfirmButton: false, 
                timer: 1500,  
                timerProgressBar: true, 
                customClass: {
                    popup: 'bg-white text-white900 text-p3-regular rounded-lg shadow-lg sm:w-[70%] lg:w-[50%] m-auto p-0 m-0 ',
                    title: 'font-semibold text-p1-semibold', 
                    timerProgressBar:'bg-accent300'
                }
            });
            
        }).catch(err => {
            console.error("Error al copiar: ", err);
    
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo copiar la información. Intenta de nuevo.',
                showConfirmButton: false,  
                timer: 1500, 
                timerProgressBar: true, 
                customClass: {
                    popup: 'bg-white text-white900 text-p3-regular rounded-lg shadow-lg sm:w-[70%] lg:w-[50%] m-auto p-0 m-0 ',
                    title: 'font-semibold text-p1-semibold', 
                  
                }
            });
        });
    }

    if (data === "Transferencia") {
        return (
            <>
                <button className="flex flex-row gap-3 p-2" onClick={onClose}>
                    <Image src={ArrowLargeLeft} alt="" />
                    <h1 className="text-h6-bold text-white900"> Transferencias bancarias</h1>
                </button>
                <p className="text-p2-regular p-2 w-[90%] mx-auto">Ingresa dinero por transferencia bancaria usando tu CVU o alias</p>
                <div className="flex flex-col gap-4 p-4 ml-4">
                    <label className="text-p1-semibold flex flex-col p-1"> Alias
                        <div className=" flex flex-row justify-between border border-white300 p-1 rounded-lg w-[90%]">
                            <input value={alias} readOnly className="text-p1-regular p-1 text-white600" />
                            <button onClick={() => handleCopy("Alias :" + alias )} >
                                <ContentCopyIcon className="text-white600"/> 
                            </button>
                        </div>
                    </label>
                    <label className="text-p1-semibold flex flex-col p-1">CVU
                    <div className=" flex flex-row justify-between border border-white300 p-1 rounded-lg w-[90%]">
                            <input value={cvu} readOnly className="text-p1-regular p-1 text-white600" />
                            <button onClick={() => handleCopy("CVU :" +cvu)} >
                                <ContentCopyIcon className="text-white600"/> 
                            </button>
                        </div>
                    </label>
                </div>

            </>
        );
    }

    if (data === "Wallet") {
        return (
            <>
                <button className="flex flex-row gap-3 p-4" onClick={onClose}>
                    <Image src={ArrowLargeLeft} alt="" />
                    <h1 className="text-h6-bold text-white900"> Wallet Digital</h1>
                </button>
                <div className="flex flex-col justify-center items-center gap-2 p-4">
                <Image src={SkipUser} alt=""/>
                <h1 className="text-p2-regular p-2 w-[90%] mx-auto text-center text-white600">Próximamente incorporaremos más métodos para el ingreso de dinero</h1>

                </div>
            </>
        );
    }

    return <></>;
};
