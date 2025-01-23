import Link from 'next/link'
import React from 'react'

interface FinanceCardProps {
	title: string
	items: { label: string; icon: React.ReactNode; path: string }[]
}

export default function FinanceCard({ title, items }: FinanceCardProps) {
	return (
		<div className='bg-white50 text-white900 shadow-lg rounded-2xl p-6'>
			<div className='mb-4'>
				<h6 className='text-h6-bold'>{title}</h6>
			</div>
			<div className='flex flex-wrap justify-start gap-8 text-white700'>
				{items.map((item) => (
					<Link
						key={item.label}
						href={item.path}
						className='flex flex-col items-center justify-center p-4 border-2 border-white400 rounded-xl bg-gray-100 hover:bg-primary100 focus:ring-2 focus:ring-primary300 transition-all w-[80px] h-[86px]'
					>
						<span className='text-accent300'>{item.icon}</span>
						<span className='text-sm font-medium mt-2'>{item.label}</span>
					</Link>
				))}
			</div>
		</div>
	)
}
