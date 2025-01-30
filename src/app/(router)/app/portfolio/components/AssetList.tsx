'use client'
import Button from '@/components/ui/Button'
import { ExpandMore } from '@mui/icons-material'
import React, { useState } from 'react'

interface Asset {
	name: string
	price: string
	change: string
	trend: 'positive' | 'negative'
}

interface AssetListProps {
	assets: Asset[]
}

export default function AssetList({ assets }: AssetListProps) {
	const [isExpanded, setIsExpanded] = useState(false)
	const [visibleAssets, setVisibleAssets] = useState(4)

	const handleExpandToggle = () => {
		setIsExpanded(!isExpanded)
		setVisibleAssets(4) // Al expandir, se asegura de que solo muestre los primeros 4 activos
	}

	const handleLoadMoreToggle = () => {
		setVisibleAssets(visibleAssets === 4 ? assets.length : 4) // Alterna entre mostrar todos y volver a los 4 primeros
	}

	return (
		<div className='bg-white rounded-lg shadow-sm p-6'>
			<h5 className='text-h5-semibold mb-4'>Activos</h5>
			<p className='text-gray-600 mb-6'>
				En esta sección, encontrarás detalles sobre los activos en los que hemos invertido, incluyendo tendencias y análisis de mercado.
			</p>
			<div className='flex justify-between items-center'>
				<h6 className='text-h6-semibold text-white800'>Acciones</h6>
				{/* Flecha para expandir o contraer */}
				<div className='flex justify-center mb-4'>
					<button onClick={handleExpandToggle} className='text-white900 transition-colors'>
						<ExpandMore className={`transform transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
					</button>
				</div>
			</div>

			{/* Lista de activos (solo visible al expandir) */}
			{isExpanded && (
				<div className='flex flex-wrap justify-between items-center gap-2'>
					{assets.slice(0, visibleAssets).map((asset, index) => (
						<div
							key={index}
							className='flex flex-col justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow bg-primary50 w-[200px] h-[160px]'
						>
							<div className='flex flex-col items-center space-y-2'>
								<h6 className='text-h6-bold'>{asset.name}</h6>
								<p className='text-p1-regular text-white700'>{asset.price}</p>
							</div>
							<p className={`font-semibold ${asset.trend === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{asset.change}</p>
						</div>
					))}
				</div>
			)}

			{isExpanded && assets.length > 4 && (
				<Button
					variant='text'
					onClick={handleLoadMoreToggle}
					className='mt-6 py-2 text-p1-semibold text-primary900 focus:transparent border-none focus:outline-none focus:ring-0 active:bg-transparent active:border-none'
				>
					{visibleAssets === 4 ? 'Ver más' : 'Ver menos'}
				</Button>
			)}
		</div>
	)
}



