'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronRight, ChevronLeft, Cabin, Work, Groups2Outlined, Person } from '@mui/icons-material'
import clsx from 'clsx'

export default function Dashboard() {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isClient, setIsClient] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		setIsClient(typeof window !== 'undefined')
	}, [])

	const menuItems = [
		{ label: 'Inicio', icon: <Cabin />, path: '/app/home' },
		{ label: 'Portafolio', icon: <Work />, path: '/app/portfolio' },
		{ label: 'Comunidad', icon: <Groups2Outlined />, path: '/app/community' },
		{ label: 'Perfil', icon: <Person />, path: '/app/profile' }
	]

	const toggleMenu = () => setIsExpanded((prev) => !prev)

	if (!isClient) {
		return null
	}

	return (
		<nav
			className={clsx(
				'fixed text-white500 bg-white z-50 shadow-xl',
				'w-full bottom-0 xl:w-20 xl:h-full xl:top-[106px] xl:left-0',
				isExpanded && 'xl:w-64',
				'xl:border-r xl:border-gray-200'
			)}
		>
			<div className="flex xl:flex-col items-center justify-between xl:justify-start xl:space-y-12 py-4 px-6 h-full">
				{/* Toggle button for vertical menu */}
				<button
					onClick={toggleMenu}
					className="hidden xl:block focus:outline-none"
					aria-label="Toggle menu"
				>
					{isExpanded ? <ChevronLeft /> : <ChevronRight />}
				</button>

				{/* Menu items */}
				<ul className={clsx('flex xl:flex-col justify-around xl:justify-start xl:space-y-6 w-full')}>
					{menuItems.map((item) => (
						<li
							key={item.path}
							className={clsx(
								'flex items-center justify-center xl:justify-start xl:items-center',
								pathname === item.path ? 'text-accent500' : 'text-gray-500',
								'hover:text-primary700'
							)}
						>
							<button
								onClick={() => router.push(item.path)}
								className={clsx(
									'flex flex-col xl:flex-row items-center xl:gap-2 gap-1 text-center focus:outline-none',
									isExpanded ? 'xl:flex-row' : 'xl:flex-col'
								)}
							>
								{item.icon}
								<span
									className={clsx(
										'text-xs xl:text-sm',
										'xl:block',
										!isExpanded && 'xl:hidden'
									)}
								>
									{item.label}
								</span>
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
