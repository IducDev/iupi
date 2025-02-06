import { useEffect, useRef } from 'react';

interface DonutChartProps {
  data: number[];
  percentage: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, percentage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) / 2;

    ctx.clearRect(0, 0, width, height);

    ctx.translate(width / 2, height / 2);

    const total = data.reduce((acc: number, value: number) => acc + value, 0);
    let startAngle = 0;

    const tailwindColors = {
    accent200: "#006DFF",
    accent25: "#69A9FF",

    };

    data.forEach((value: number, index: number) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const color = Object.values(tailwindColors)[index % Object.keys(tailwindColors).length];

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      startAngle += sliceAngle;
    });

    ctx.beginPath();
    ctx.arc(0, 0, radius / 1.4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.font = '30px sans-serif';
    ctx.fillStyle = "#002658";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, 0, 0);

    ctx.setTransform(1, 0, 0, 1, 0, 0); 
  }, [data, percentage]);

  return <canvas ref={canvasRef} width={150} height={150} className="w-14 h-14 rounded-full"></canvas>;
};

export default DonutChart;
