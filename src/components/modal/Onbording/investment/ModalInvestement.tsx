import React from 'react';
import Swal from 'sweetalert2';

interface ModalInvestmentProps {
  inversionData: {
    cantidad: number;
    precio: number;
    moneda: string;
    subtotal: number;
    assetSymbol: string;
  };
  onClose: () => void;
}

export const ModalInvestement = ({ inversionData, onClose }: ModalInvestmentProps) => {
  const handleConfirm = () => {
    // console.log('Inversión confirmada:', inversionData);
    onClose();
    
    Swal.fire({
      title: '¡Inversión realizada!',
      text: 'Tu inversión se ha confirmado con éxito.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg items-center">
        <h2 className="text-lg font-semibold mb-4 text-center">Confirmar Inversión</h2>
        <p className="text-p2-regular text-white500 text-center pb-2">
          Por favor verifica que todos los datos sean correctos antes de confirmar
        </p>
        <p className="mb-2">
          <strong>Activo:</strong> {inversionData.assetSymbol}
        </p>
        <p className="p-2">
          <strong>Cantidad:</strong> {inversionData.cantidad}
        </p>
        <p className="p-2">
          <strong>Precio unitario:</strong> ${inversionData.precio.toFixed(2)} {inversionData.moneda}
        </p>
        <p className="p-4 text-center">
          <strong>Total: ${inversionData.subtotal.toFixed(2)} {inversionData.moneda}</strong>
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-300 text-black py-2 px-4 rounded-full"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-accent400 text-white py-2 px-4 rounded-full"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
