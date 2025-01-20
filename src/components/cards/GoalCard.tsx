import React from 'react'
import Button from '../ui/Button'
import { AirplaneTicket, Savings } from '@mui/icons-material'

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
				<Button size='small' variant='solid'>Agregar fondos</Button>
			</div>
			<div>
				<p className='text-p3-regular'>Algunos ejemplos de nuestra comunidad: </p>
			</div>

			{/* Goals */}
			<div className='space-y-4'>
				{goalList.map((goal, index) => (
					<div
						key={index}
						className='flex items-center justify-between bg-white p-4 rounded-lg shadow-sm'
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
		</div>
	)
}


// import React from 'react'
// import Button from '../ui/Button';
// import { AirplaneTicket, Savings } from '@mui/icons-material';


// interface GoldProps {
// 	title: string
// 	percentage?: number
// 	amount?: number
// }

// export default function GoldsCard({ title, percentage, amount }: GoldProps) {


// 	return (
// 		<div className='flex flex-col p-4 space-y-4 bg-white50 rounded-2xl'>
// 			<div className='flex items-center justify-between'>
// 				<div>
// 					<span><Savings /></span>
// 					<h6 className='text-h6-bold text-white900'>
// 						Tus metas
// 					</h6>
// 				</div>
// 				<Button>Agregar fondos</Button>
// 			</div>
// 			<div>
// 				<AirplaneTicket />
// 				<div className='flex flex-col'>
// 					<p className='text-p1-semibold'>{title}</p>
// 					<p className='text-p3-regular'>$ {amount} meta.</p>
// 				</div>
// 				<p className='text-p1-bold text-white300'>{percentage} %</p>
// 			</div>
// 		</div>
// 	)
// }
