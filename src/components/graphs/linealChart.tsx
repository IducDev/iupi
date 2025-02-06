import React, { useRef, useEffect } from 'react';

interface HistoricalData {
  date: string;
  close: number;
}

interface LineChartProps {
  historicalData: HistoricalData[];
}

const LineChart: React.FC<LineChartProps> = ({ historicalData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

//   console.log(historicalData)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawChart(ctx, historicalData);
      }
    }
  }, [historicalData]);

  const drawChart = (ctx: CanvasRenderingContext2D, data: HistoricalData[]) => {
    // Establecer el tamaño del gráfico
    const width = 200;
    const height = 100;
    canvasRef.current!.width = width;
    canvasRef.current!.height = height;

    // Espaciado y márgenes
    const padding = 20;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    // Configuración del gráfico
    ctx.clearRect(0, 0, width, height); // Limpiar el canvas
    ctx.strokeStyle = '#004AAD'; // Color de la línea
    ctx.lineWidth = 2;

    // Encontrar el valor máximo y mínimo para ajustar la escala
    const prices = data.map(item => item.close);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    // Función para mapear valores de datos a las dimensiones del canvas
    const mapX = (index: number) => padding + (index * chartWidth) / (data.length - 1);
    const mapY = (price: number) => padding + chartHeight - (chartHeight * (price - minPrice)) / (maxPrice - minPrice);

    // Dibujar el gráfico
    ctx.beginPath();
    ctx.moveTo(mapX(0), mapY(data[0].close)); // Empezar desde el primer punto
    data.forEach((item, index) => {
      ctx.lineTo(mapX(index), mapY(item.close)); // Conectar los puntos con líneas
    });
    ctx.stroke();

    // // Opcional: Añadir etiquetas en el eje X y Y
    // ctx.fillStyle = '#000';
    // ctx.font = '12px Arial';
    // ctx.fillText('Fecha', width / 2, height - 10);
    // ctx.save();
    // ctx.rotate(-Math.PI / 2);
    // ctx.fillText('Precio de Cierre (USD)', -height / 2, 20);
    // ctx.restore();

    // // Marcar puntos
    // data.forEach((item, index) => {
    //   ctx.beginPath();
    //   ctx.arc(mapX(index), mapY(item.close), 4, 0, 2 * Math.PI);
    //   ctx.fillStyle = '#4caf50';
    //   ctx.fill();
    // });
  };

  return <canvas ref={canvasRef}></canvas>;
};

export default LineChart;
