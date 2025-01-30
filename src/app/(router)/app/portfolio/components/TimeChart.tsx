'use client'
import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

export default function TimeChart() {
	// Estado para manejar la categoría seleccionada
	const [selectedCategory, setSelectedCategory] = useState('Acciones');

	// Datos basados en la imagen
	const categories = ['Acciones', 'Inmobiliario', 'Bonos', 'Energía', 'Tec'];
	const timeRanges = ['1:00 - 6:00', '6:00 - 12:00', '12:00 - 18:00', '18:00 - 1:00'];

	// Datos de ejemplo para el gráfico (puedes reemplazarlos con datos reales)
	const data = [
		{ time: '1:00 - 6:00', Acciones: 40, Inmobiliario: 30, Bonos: 20, Energía: 50, Tec: 10 },
		{ time: '6:00 - 12:00', Acciones: 50, Inmobiliario: 40, Bonos: 30, Energía: 60, Tec: 20 },
		{ time: '12:00 - 18:00', Acciones: 60, Inmobiliario: 50, Bonos: 40, Energía: 70, Tec: 30 },
		{ time: '18:00 - 1:00', Acciones: 70, Inmobiliario: 60, Bonos: 50, Energía: 80, Tec: 40 },
	];

	// Filtrar datos para la categoría seleccionada
	const filteredData = data.map((item) => ({
		time: item.time,
		[selectedCategory]: item[selectedCategory],
	}));

	return (
		<div className="p-4 bg-white rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4">Distribución de Inversiones por Horario</h2>

			{/* Botones para seleccionar la categoría */}
			<div className="flex space-x-2 mb-4">
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={`px-4 py-2 rounded ${selectedCategory === category
							? 'bg-blue-200 text-blue-800' // Estilo para el botón seleccionado
							: 'bg-gray-200 text-gray-800' // Estilo para los botones no seleccionados
							}`}
					>
						{category}
					</button>
				))}
			</div>

			{/* Gráfico */}
			<BarChart
				dataset={filteredData}
				xAxis={[{ scaleType: 'band', dataKey: 'time' }]}
				yAxis={[{ scaleType: 'linear' }]}
				series={[
					{
						dataKey: selectedCategory,
						label: selectedCategory,
					},
				]}
				width={600}
				height={400}
				sx={{
					[`.${axisClasses.left} .${axisClasses.label}`]: {
						transform: 'translate(-20px, 0)',
					},
				}}
			/>
		</div>
	);
}
