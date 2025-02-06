import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'

interface FinancialSampleProps {
	title: string,
	value: number
	path: string
}

export default function FinancialSampleCard({ title, value, path }: FinancialSampleProps) {
	return (
		<div className='p-4 bg-white50 text-white900 rounded-2xl space-y-6 w-[240px] h-[160px]'>
			<div className='flex flex-col space-y-6'>
				<div className='space-y-2'>
					<p className='text-p2-medium'>{title}</p>
					<p className='text-h6-semibold'>
						{title === 'Capacidad de ahorro'
							? `% ${value}`
							: title === 'Total de deudas'
								? `$ ${value.toLocaleString()}`
								: `$ ${value.toLocaleString()} por mes`}
					</p>
				</div>
				<div>
					<Link href={path}>
						<Button size='small' className='rounded-3xl w-full bg-accent25'>Ver detalle</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
