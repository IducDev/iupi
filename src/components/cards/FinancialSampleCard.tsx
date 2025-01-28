import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'

interface FinancialSampleProps {
	title: string,
	icon: string
	value: number
	path: string
}

export default function FinancialSampleCard({ title, icon, value, path }: FinancialSampleProps) {
	return (
		<div className='p-4 bg-white50 text-white900 rounded-2xl w-[230px] h-[245px]'>
			<div className='flex flex-col space-y-4'>
				{/* Header */}
				<Image src={icon} alt="logo" width={72} height={72} />
				{/* Content */}
				<div>
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
						<Button size='medium' variant='solid' className='rounded-3xl w-full'>Ver detalle</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
