import Button from '@/components/ui/Button'
import Link from 'next/link'
import React, { useState } from 'react'

const mockData = {
	'En alsa': [
		{ id: 'TSLA', name: 'Tesla Inc.', company: 'Tesla', price: 785.22, change: 3.1, trend: 'up' },
		{ id: 'MSFT', name: 'Microsoft Corp.', company: 'Microsoft', price: 315.42, change: 2.5, trend: 'up' },
		{ id: 'AAPL', name: 'Apple Inc.', company: 'Apple', price: 15385.33, change: 2.4, trend: 'up' },
		{ id: 'NVDA', name: 'Nvidia Corp.', company: 'Nvidia', price: 256.31, change: -5.4, trend: 'down' },
		{ id: 'GOOGL', name: 'Alphabet Inc.', company: 'Alphabet', price: 2785.32, change: -1.5, trend: 'down' }
	],
	'En baja': [
		{ id: 'AMZN', name: 'Amazon Inc.', company: 'Amazon', price: 140.58, change: -2.8, trend: 'down' },
		{ id: 'GOOGL', name: 'Alphabet Inc.', company: 'Alphabet', price: 2785.32, change: -1.5, trend: 'down' },
		{ id: 'MSFT', name: 'Microsoft Corp.', company: 'Microsoft', price: 315.42, change: 2.5, trend: 'up' },
		{ id: 'AAPL', name: 'Apple Inc.', company: 'Apple', price: 15385.33, change: 2.4, trend: 'up' },
		{ id: 'NVDA', name: 'Nvidia Corp.', company: 'Nvidia', price: 256.31, change: -5.4, trend: 'down' }
	],
	Cedears: [
		{ id: 'AAPL', name: 'Apple Inc.', company: 'Apple', price: 15385.33, change: 2.4, trend: 'up' },
		{ id: 'DSK', name: 'DeepSeek Inc.', company: 'DeepSeek', price: 16153.33, change: 1.8, trend: 'up' },
		{ id: 'NVDA', name: 'Nvidia Corp.', company: 'Nvidia', price: 256.31, change: -5.4, trend: 'down' },
		{ id: 'MSFT', name: 'Microsoft Corp.', company: 'Microsoft', price: 315.42, change: 2.5, trend: 'up' },
		{ id: 'TSLA', name: 'Tesla Inc.', company: 'Tesla', price: 785.22, change: 3.1, trend: 'up' },
		{ id: 'GOOGL', name: 'Alphabet Inc.', company: 'Alphabet', price: 2785.32, change: -1.5, trend: 'down' }
	],
	Indices: [
		{ id: 'SPX', name: 'SPX 500', company:'Standard Comp.', price: 1445.45, change: 0.8, trend: 'up' },
		{ id: 'NDQ', name: 'NASDAQ', company:'Standard Comp.', price: 1447.45, change: -0.5, trend: 'down' },
		{ id: 'DJI', name: 'Dow Jones', company:'Standard Comp.', price: 1775.78, change: 1.2, trend: 'up' },
		{ id: 'FTSE', name: 'FTSE 100', company:'Standard Comp.', price: 1445.45, change: 0.8, trend: 'up' },
		{ id: 'N225', name: 'Nikkei 225', company:'Standard Comp.', price: 1445.45, change: 0.8, trend: 'up' }
	],
	ETF: [
		{ id: 'VOO', name: 'Vanguard S&P 500 ETF', company:'Standard Comp.', price: 405.22, change: 1.6, trend: 'up' },
		{ id: 'ARKK', name: 'ARK Innovation ETF', company:'Standard Comp.', price: 122.3, change: -0.9, trend: 'down' },
		{ id: 'VOO', name: 'Vanguard S&P 500 ETF', company:'Standard Comp.', price: 405.22, change: 1.6, trend: 'up' },
		{ id: 'ARKK', name: 'ARK Innovation ETF', company:'Standard Comp.', price: 122.3, change: -0.9, trend: 'down' },
		{ id: 'VOO', name: 'Vanguard S&P 500 ETF', company:'Standard Comp.', price: 405.22, change: 1.6, trend: 'up' },
	],
	Acciones: [
		{ id: 'NFLX', name: 'Netflix Inc.', company: 'Netflix', price: 550.78, change: 2.3, trend: 'up' },
		{ id: 'DIS', name: 'Walt Disney Co.', company: 'Disney', price: 98.44, change: -1.2, trend: 'down' },
		{ id: 'TSLA', name: 'Tesla Inc.', company: 'Tesla', price: 785.22, change: 3.1, trend: 'up' },
		{ id: 'GOOGL', name: 'Alphabet Inc.', company: 'Alphabet', price: 2785.32, change: -1.5, trend: 'down' },
		{ id: 'AAPL', name: 'Apple Inc.', company: 'Apple', price: 15385.33, change: 2.4, trend: 'up' }
	],
	Bonos: [
		{ id: 'TX26', name: 'TX26.BA CER', price: 1542.54, change: 2.2, trend: 'up' },
		{ id: 'PR13', name: 'PR13.BA', price: 1450.54, change: -1.5, trend: 'down' },
		{ id: 'TX26', name: 'TX26.BA CER', price: 1542.54, change: 2.2, trend: 'up' },
		{ id: 'PR13', name: 'PR13.BA', price: 1450.54, change: -1.5, trend: 'down' },
		{ id: 'TX26', name: 'TX26.BA CER', price: 1542.54, change: 2.2, trend: 'up' }
	],
	CRIPTO: [
		{ id: 'BTC', name: 'Bitcoin', price: 43000, change: 5.7, trend: 'up' },
		{ id: 'ETH', name: 'Ethereum', price: 3200, change: -3.2, trend: 'down' },
		{ id: 'BTC', name: 'Bitcoin', price: 43000, change: 5.7, trend: 'up' },
		{ id: 'ETH', name: 'Ethereum', price: 3200, change: -3.2, trend: 'down' },
		{ id: 'BTC', name: 'Bitcoin', price: 43000, change: 5.7, trend: 'up' }
	]
}

export default function MarketSection() {
	const categories = Object.keys(mockData) as Array<keyof typeof mockData>
	const [tabSelected, setTabSelected] = useState<keyof typeof mockData>('En alsa')

	return (
		<div className='flex flex-col gap-6'>
			<header className='flex flex-col gap-4'>
				<h5 className='text-h5-semibold'>Mercado</h5>
				<p className='text-p1-regular text-white700'>
					Últimas tendencias y análisis del mercado para que tomes decisiones informadas.
				</p>
			</header>

			<nav className='flex flex-wrap gap-2'>
				{categories.map((category) => (
					<Button
						key={category}
						size='small'
						variant={tabSelected === category ? 'text' : 'basic'}
						className='rounded-lg bg-white100'
						onClick={() => setTabSelected(category)}
					>
						{category}
					</Button>
				))}
			</nav>

			<section className='p-4 bg-white rounded-lg shadow-md'>
				<h6 className='text-h6-semibold mb-3'>{tabSelected}</h6>
				<div className='flex flex-col gap-3'>
					{mockData[tabSelected].map(({ id, name, company, price, change, trend }) => (
						<div key={id} className='flex justify-between items-center border-b pb-2'>
							<div>
								<p className='text-p1-semibold'>{name}</p>
								{company && <p className='text-p2-regular text-white700'>{company}</p>}
							</div>
							<div className='text-right'>
								<p className='text-p1-regular'>{price.toFixed(2)}</p>
								<p className={`font-semibold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
									{change > 0 ? `+${change}%` : `${change}%`}
								</p>
							<Link href={'/app/home/investment'}>
								<Button size='small' variant='solid' className='rounded-full px-4 '>Invertir</Button>
							</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}




