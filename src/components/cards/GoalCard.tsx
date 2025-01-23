import React from 'react'
import Button from '../ui/Button'
import { AirplaneTicket, Savings } from '@mui/icons-material'
import Link from 'next/link'

interface Goal {
	title: string
	percentage: number
	amount: number
}

interface GoalsCardProps {
	goals: Goal[] | Goal
}

export default function GoalCard({ goals }: GoalsCardProps) {
	const goalList = Array.isArray(goals) ? goals : [goals]

	return (
		<div className='flex flex-col p-4 space-y-6 bg-white50 rounded-2xl'>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center space-x-2'>
					<Savings className='text-accent300' />
					<h6 className='text-h6-bold text-white900'>Tus metas</h6>
				</div>
				<Button size='small' variant='solid' className='rounded-3xl'>Agregar fondos</Button>
			</div>
			<div>
				<p className='text-p3-regular'>Algunos ejemplos de nuestra comunidad: </p>
			</div>

			{/* Goals */}
			<div className='space-y-4'>
				{goalList.map((goal, index) => (
					<div
						key={index}
						className='flex items-center justify-between bg-primary100 p-4 rounded-lg shadow-sm'
					>
						<div className='flex items-center space-x-3'>
							<AirplaneTicket className='text-accent300' />
							<div className='flex flex-col'>
								<p className='text-p1-semibold'>{goal.title}</p>
								<p className='text-p3-regular'>$ {goal.amount.toLocaleString()} meta.</p>
							</div>
						</div>
						<p className='text-p1-bold text-white300'>{goal.percentage} %</p>
					</div>
				))}
			</div>
			<div className='flex items-center justify-center w-full space-x-4'>
				<Link href={'#'} passHref className='w-full'>
					<Button size='medium' variant='solid' className='rounded-3xl w-full'>Ver más</Button>
				</Link>
				<Link href={'#'} passHref className='w-full'>
					<Button size='medium' variant='outline' className='rounded-3xl w-full bg-white100 border-none shadow-sm text-white900'>Editar</Button>
				</Link>
			</div>
		</div>
	)
}
