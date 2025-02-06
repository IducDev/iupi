import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'

interface RecommendationProps {
	title: string
	items: {
		label: string
		description: string
		percentage: number
	}[]


}

export default function RecommendationCard({ title, items }: RecommendationProps) {
	return (
		<div className='flex flex-col space-y-4 bg-white50 text-white900 shadow-lg rounded-2xl p-6 lg:w-[90%] lg:mx-auto'>
			<div >
				<h6 className='text-h6-bold'>{title}</h6>
			</div>
			<p className='text-p2-regular text-white700'>Descubre las mejores oportunidades de inversión que se alinean con tus metas financieras. </p>

			{items.map((item, index) => (
				<div key={index} className='flex items-center justify-between mt-4 bg-transparent'>
					<div>
						<p className='text-p1-semibold'>{item.label}</p>
						<p className='text-p3-regular text-white700'>{item.description}</p>
					</div>
					<div className='text-center'>
						<p className='text-p2-semibold text-white400'>
							Crecimiento de
							<br />
							<span className='text-success700'> + {item.percentage} %</span>
						</p>
					</div>
				</div>
			))}

			<div className='flex items-center justify-center w-full space-x-4'>
				<Link href={'#'} passHref className='w-full'>
					<Button size='medium' className='rounded-3xl w-full bg-accent25'>Ver más</Button>
				</Link>
				<Link href={'#'} passHref className='w-full'>
					<Button size='medium' variant='outline' className='rounded-3xl w-full bg-white100 border-none shadow-sm text-white900'>Editar</Button>
				</Link>
			</div>
		</div>
	)
}
