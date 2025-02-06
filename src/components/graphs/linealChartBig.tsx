import React, { useRef, useEffect, useState } from 'react';

interface HistoricalData {
  date: string;
  close: number;
  high: number;
  low: number;
  open: number;
  x?: number;
  y?: number;
}

interface LineChartProps {
  historicalData: HistoricalData[];
}

export const LineChartBig: React.FC<LineChartProps> = ({ historicalData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  const lineColors = {
    close: '#004AAD',
    open: '#92BFFF',
    high: '#C3DCFF',
    low: '#DBEAFF'
  };

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
    const width = 250;
    const height = 200;
    canvasRef.current!.width = width;
    canvasRef.current!.height = height;

    const padding = 20;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 2;

    const prices = {
      close: data.map(item => item.close),
      open: data.map(item => item.open),
      high: data.map(item => item.high),
      low: data.map(item => item.low)
    };

    const minPrice = Math.min(...Object.values(prices).flat());
    const maxPrice = Math.max(...Object.values(prices).flat());

    const mapX = (index: number) => padding + (index * chartWidth) / (data.length - 1);
    const mapY = (price: number) => padding + chartHeight - (chartHeight * (price - minPrice)) / (maxPrice - minPrice);

    const drawLine = (priceData: number[], color: string) => {
      ctx.beginPath();
      ctx.moveTo(mapX(0), mapY(priceData[0]));
      priceData.forEach((price, index) => {
        ctx.lineTo(mapX(index), mapY(price));
      });
      ctx.strokeStyle = color;
      ctx.stroke();
    };

    drawLine(prices.close, lineColors.close);
    drawLine(prices.open, lineColors.open);
    drawLine(prices.high, lineColors.high);
    drawLine(prices.low, lineColors.low);

    data.forEach((item, index) => {
      const points = [
        { x: mapX(index), y: mapY(item.close), color: lineColors.close },
        { x: mapX(index), y: mapY(item.open), color: lineColors.open },
        { x: mapX(index), y: mapY(item.high), color: lineColors.high },
        { x: mapX(index), y: mapY(item.low), color: lineColors.low }
      ];

      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = point.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = point.color;
        ctx.stroke();
      });

      item.x = mapX(index);
      item.y = mapY(item.close);
    });

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const canvasRect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - canvasRect.left;
      const mouseY = e.clientY - canvasRect.top;

      let found = false;
      data.forEach(item => {
        if (item.x && item.y) {
          const distance = Math.sqrt(Math.pow(mouseX - item.x, 2) + Math.pow(mouseY - item.y, 2));
          if (distance < 10) {
            setTooltip({
              x: mouseX + 10,
              y: mouseY,
              text: `Fecha: ${item.date}, Apertura: $${item.open.toFixed(2)}, Máximo: $${item.high.toFixed(2)}, Mínimo: $${item.low.toFixed(2)}, Cierre: $${item.close.toFixed(2)}`
            });
            found = true;
          }
        }
      });
      if (!found) {
        setTooltip(null);
      }
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef}></canvas>
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x,
            top: tooltip.y,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: '5px',
            fontSize: '12px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          {tooltip.text}
        </div>
      )}
      <div className="flex flex-col mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: lineColors.close,
                marginRight: '5px',
              }}
            ></div>
            <span className="text-p1-regular text-white700">Cierre</span>
          </div>
          <div className="flex items-center">
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: lineColors.open,
                marginRight: '5px',
              }}
            ></div>
            <span className="text-p1-regular text-white700">Apertura</span>
          </div>
          <div className="flex items-center">
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: lineColors.high,
                marginRight: '5px',
              }}
            ></div>
            <span className="text-p1-regular text-white700">Máximo</span>
          </div>
          <div className="flex items-center">
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: lineColors.low,
                marginRight: '5px',
              }}
            ></div>
            <span className="text-p1-regular text-white700">Mínimo</span>
          </div>
        </div>
      </div>
    </div>
  );
};
