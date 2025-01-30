import React from 'react'
import Button from '../ui/Button'
import Link from 'next/link'

interface BalanceCardProps {
	title: string
	amount: number
	earning: number
}

export default function BalanceCard({ title, amount, earning }: BalanceCardProps) {
	return (
		<div className='p-4 bg-white50 text-white900 rounded-2xl lg:w-[90%] lg:mx-auto'>
			<div className='flex flex-col space-y-4'>
				{/* Header */}
				<div>
					<p className='text-p1-bold'>{title}</p>
				</div>
				{/* Content */}
				<div className='space-y-3'>
					<h3 className='text-h3-bold'>$ {amount.toLocaleString()} </h3>
					<p className='text-p1-regular text-white600'>
						<span className='text-success700'> + $ {earning}</span> en 12 meses
					</p>
				</div>
				{/* Footer */}
				<div className='w-full'>
					<Link href={'/app/portfolio'}>
						<Button size='large' variant='solid' className='rounded-3xl w-full'>Invertir</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

