'use client'
import Button from '@/components/ui/Button';
import { useState } from 'react';

const mockOperations = [
	{
		id: 1,
		type: 'Compra',
		instrument: 'CEDEAR AAPL.BA Apple Inc.',
		amount: -100.00,
		profit: 100.00,
		date: '01 Enero 2025',
		time: '16:31'
	},
	{
		id: 2,
		type: 'Venta',
		instrument: 'Bono TX24.BA CER',
		amount: 200.00,
		profit: null,
		date: '15 Enero 2025',
		time: '14:45'
	},
	{
		id: 3,
		type: 'Compra',
		instrument: 'Crypto BTC-USD Bitcoin',
		amount: -100.00,
		profit: 50.00,
		date: '18 Enero 2025',
		time: '15:21'
	},
	{
		id: 4,
		type: 'Venta',
		instrument: 'Bono TX25.BA CER',
		amount: -100.00,
		profit: 90.00,
		date: '25 Enero 2025',
		time: '14:45'
	},
	{
		id: 5,
		type: 'Compra',
		instrument: 'CEDEAR AAPL.BA Apple Inc.',
		amount: -100.00,
		profit: 65.00,
		date: '01 Enero 2025',
		time: '16:31'
	},
	{
		id: 6,
		type: 'Venta',
		instrument: 'Bono TX24.BA CER',
		amount: -100.00,
		profit: 75.00,
		date: '15 Enero 2025',
		time: '14:43'
	},
	{
		id: 7,
		type: 'Compra',
		instrument: 'CEDEAR AAPL.BA Apple Inc.',
		amount: -100.00,
		profit: 65.00,
		date: '01 Enero 2025',
		time: '16:31'
	},
	{
		id: 8,
		type: 'Venta',
		instrument: 'Bono TX24.BA CER',
		amount: -100.00,
		profit: 75.00,
		date: '15 Enero 2025',
		time: '14:43'
	},
	{
		id: 9,
		type: 'Compra',
		instrument: 'CEDEAR AAPL.BA Apple Inc.',
		amount: -100.00,
		profit: 65.00,
		date: '01 Enero 2025',
		time: '16:31'
	},
	{
		id: 10,
		type: 'Venta',
		instrument: 'Bono TX24.BA CER',
		amount: -100.00,
		profit: 75.00,
		date: '15 Enero 2025',
		time: '14:43'
	}
];

const ITEMS_PER_PAGE = 7;

export default function OperationsHistory() {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(mockOperations.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentOperations = mockOperations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	const renderOperation = (operation) => (
		<div key={operation.id} className="flex items-center justify-between py-4 border-b">
			<div className="flex flex-col">
				<div className="flex items-center gap-1">
					<span className="font-medium">{operation.type}</span>
					<span className="text-gray-600">{operation.instrument}</span>
				</div>
				<span className="text-sm text-gray-500">
					{operation.date} a las {operation.time}
				</span>
			</div>

			<div className="flex items-center gap-4">
				<div className="text-right">
					<p className={`font-medium ${operation.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
						{operation.amount < 0 ? '' : '+'}{operation.amount.toFixed(2)}
					</p>
					{operation.profit && (
						<p className="text-sm text-green-500">+{operation.profit.toFixed(2)}</p>
					)}
					<Button variant="text" className="text-blue-600 font-semibold mt-4">
						Ver
					</Button>
				</div>
			</div>
		</div>
	);

	return (
		<div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
			<div className="mb-6">
				<h5 className="text-h5-semibold">Historial de operaciones</h5>
			</div>

			<div className="divide-y">
				{currentOperations.map(renderOperation)}
			</div>

			<div className="flex items-center justify-center gap-2 mt-6">
				<Button
					variant="outline"
					size="small"
					onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
				>
					{'<'}
				</Button>

				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<Button
						key={page}
						variant={currentPage === page ? "basic" : "outline"}
						size="small"
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</Button>
				))}

				<Button
					variant="outline"
					size="small"
					onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
					disabled={currentPage === totalPages}
				>
					{'>'}
				</Button>
			</div>
		</div>
	);
}
