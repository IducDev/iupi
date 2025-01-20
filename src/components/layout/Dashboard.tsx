import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, ChevronLeft, Cabin, Work, People } from '@mui/icons-material'
import clsx from 'clsx'

export default function Dashboard() {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isClient, setIsClient] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setIsClient(typeof window !== 'undefined')
	}, [])

	const menuItems = [
		{ label: 'Inicio', icon: <Cabin />, path: '/' },
		{ label: 'Portafolio', icon: <Work />, path: '/portfolio' },
		{ label: 'Comunidad', icon: <People />, path: '/community' },
	]

	const toggleMenu = () => setIsExpanded((prev) => !prev)

	if (!isClient) {
		return null
	}

	return (
		<nav
			className={clsx(
				'fixed text-white500 shadow-lg',
				'w-full bottom-0 md:w-20 md:h-full md:top-12 md:left-0',
				isExpanded && 'md:w-64'
			)}
		>
			<div className="flex md:flex-col items-center justify-between md:justify-start md:space-y-4 py-4 px-6">
				{/* Toggle button for vertical menu */}
				<button
					onClick={toggleMenu}
					className="hidden md:block focus:outline-none"
					aria-label="Toggle menu"
				>
					{isExpanded ? <ChevronLeft /> : <ChevronRight />}
				</button>

				{/* Menu items */}
				<ul className={clsx('flex md:flex-col justify-around md:justify-start md:space-y-6 w-full')}>
					{menuItems.map((item) => (
						<li
							key={item.path}
							className={clsx(
								'flex flex-col items-center justify-center md:items-start',
								router.pathname === item.path ? 'text-accent500' : 'text-white500',
								'hover:text-primary700'
							)}
						>
							<button
								onClick={() => router.push(item.path)}
								className="flex flex-col md:flex-row items-center gap-2 focus:outline-none"
							>
								{item.icon}
								{isExpanded && <span className="text-sm md:text-base">{item.label}</span>}
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
