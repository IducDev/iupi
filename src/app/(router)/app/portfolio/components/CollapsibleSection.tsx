import { useState } from 'react'
import Image from 'next/image'
import { ExpandMore } from '@mui/icons-material'

interface Fund {
	name: string
	distribution: number
}

interface CollapsibleSectionProps {
	title: string
	description: string
	funds: Fund[]
	imageSrc: string
}

export default function CollapsibleSection({
	title,
	description,
	funds,
	imageSrc
}: CollapsibleSectionProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='bg-white shadow-md rounded-lg w-full'>
			{/* Contenedor Principal */}
			<button
				className='w-full flex items-center gap-4 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='relative w-16 h-16'>
					<Image
						src={imageSrc}
						alt='Distribución'
						width={64}
						height={64}
						className='rounded-md object-cover'
					/>
				</div>

				{/* Información */}
				<div className='flex flex-col items-start text-left flex-grow text-white800'>
					<h6 className='text-h6-semibold '>{title}</h6>
					<p className='text-p1-regular'>{description}</p>
				</div>

				{/* Icono Expandir */}
				<ExpandMore
					className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
				/>
			</button>

			{/* Contenido desplegable */}
			{isOpen && (
				<div className='bg-primary50 p-2  rounded-lg'>
					<table className='w-full text-sm'>
						<thead>
							<tr className='border-b'>
								<th className='text-left text-p1-regular'>Fondo</th>
								<th className='text-right text-p1-semibold'>Distribución</th>
							</tr>
						</thead>
						<tbody>
							{funds.map((fund, index) => (
								<tr key={index} className='border-b'>
									<td className='py-2 text-p1-regular'>{fund.name}</td>
									<td className='py-2 text-right text-p1-semibold'>{fund.distribution.toLocaleString() + ' %'}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}
