'use client'
import { ArrowBackIos, SettingsSuggest } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'
import InvestmentCard from './components/InvestmentCard'
import Button from '@/components/ui/Button'
import CollapsibleSection from './components/CollapsibleSection'
import AssetList from './components/AssetList'
import MarketSection from './components/MarketSection'
import OperationsHistory from './components/OperationsHistory'

export default function Portfolio() {

	const [activeTab, setActiveTab] = useState<'portfolio' | 'movements'>('portfolio')

	const investments = [
		{
			title: 'Bonos',
			description: 'Los bonos son deuda. Al comprarlos, el inversionista presta dinero.',
			imageSrc: '/img/ProgressCircleBig.png', // Ruta de la imagen
			funds: [
				{ name: 'PR13.BA Tasa Badlar', distribution: 38.6 },
				{ name: 'DICP.BA CER', distribution: 19.3 }
			]
		},
		{
			title: 'Acciones',
			description: 'Las acciones son propiedad de una empresa. Al comprarlas, el inversionista es accionista.',
			imageSrc: '/img/ProgressCircleSmall.png', // Ruta de la imagen
			funds: [
				{ name: 'DSK.BA DeepSeek Inc.', distribution: 28.03 },
				{ name: 'AAPL.BA Apple Inc.', distribution: 14.03 }
			]
		}
	]

	const assets = [
		{ name: 'Apple Inc.', price: '$15.09', change: '+1.2%', trend: 'positive' },
		{ name: 'Tesla Inc.', price: '$688.99', change: '-0.8%', trend: 'negative' },
		{ name: 'Amazon Inc.', price: '$3,334.69', change: '+2.8%', trend: 'positive' },
		{ name: 'Alphabet Inc.', price: '$2,450.00', change: '+0.7%', trend: 'positive' },
		{ name: 'Microsoft Corp.', price: '$299.35', change: '+1.5%', trend: 'positive' },
		{ name: 'Netflix Inc.', price: '$549.57', change: '-0.3%', trend: 'negative' },
		{ name: 'Meta Platforms Inc.', price: '$320.45', change: '+0.9%', trend: 'positive' },
		{ name: 'Nvidia Corp.', price: '$1,200.00', change: '-1.2%', trend: 'negative' },
		{ name: 'Oracle Corp.', price: '$88.75', change: '+1.0%', trend: 'positive' },
		{ name: 'Intel Corp.', price: '$88.75', change: '+1.0%', trend: 'positive' },
		{ name: 'IBM Corp.', price: '$88.75', change: '+1.0%', trend: 'positive' },
		{ name: 'Alibaba Holding.', price: '$88.75', change: '+1.0%', trend: 'positive' },
	];


	return (
		<main className="px-4 pt-6 pb-24 w-full h-min-screen text-white900">
			<div className='flex flex-col space-y-12'>

				{/* Header */}
				<div className='flex justify-between'>
					<div className='flex items-center'>
						<Link href={'/app/home'}>
							<ArrowBackIos />
						</Link>
						<h6 className='text-h6-bold ml-2'>Portafolio</h6>
					</div>
					<Link href={'/app/settings'}>
						<SettingsSuggest />
					</Link>
				</div>
				<div className='mx-auto'>
					<p className='text-p2-regular'>Ideal para desiciones estrategicas</p>
				</div>

				{/* Switch Layout Content */}
				<div className='p-4'>
					<div className='flex items-center mb-5 space-x-2'>
						<Button
							variant='text'
							size='medium'
							className={`border-b-2 w-full ${activeTab === 'portfolio' ? 'border-accent400 text-accent400' : 'border-white700 text-white700'} `}
							onClick={() => setActiveTab('portfolio')}>
							Portafolio
						</Button>
						<Button
							variant='text'
							size='medium'
							className={`border-b-2 w-full ${activeTab === 'movements' ? 'border-accent400 text-accent400 ' : 'border-white700 text-white700'} `}
							onClick={() => setActiveTab('movements')}>
							Movimientos
						</Button>
					</div>

					{/* Portfolio Content */}
					{activeTab === 'portfolio' && (
						<div>
							<InvestmentCard title='Retorno de inversión' amount={10250.45} earning={871.29} />
							<div className='p-8 space-y-4'>
								<h5 className='text-h5-semibold'>Composición de portafolio</h5>
								<p className='text-p1-regular text-white700'>Descubre el origen del aumento de tu retorno de inversión.</p>
							</div>

							<div className='p-4 space-y-8'>
								{investments.map((investment, index) => (
									<CollapsibleSection key={index} {...investment} />
								))}
							</div>

							<AssetList assets={assets} />

							<MarketSection />

						</div>

					)}

					{/* Movements Content */}
					{activeTab === 'movements' && (
						<div>
							<OperationsHistory />
						</div>

					)}

				</div>


				{/* <TimeChart /> */}




			</div>
		</main>
	)
}
