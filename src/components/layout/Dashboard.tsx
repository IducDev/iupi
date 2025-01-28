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
				'fixed text-white500 bg-white z-50 shadow-2xl',
				'w-full bottom-0 2xl:w-20 2xl:h-full 2xl:top-[106px] 2xl:left-0',
				isExpanded && '2xl:w-64',
				'2xl:border-r 2xl:border-gray-200'
			)}
		>
			<div className="flex 2xl:flex-col items-center justify-between 2xl:justify-start 2xl:space-y-12 py-4 px-6 h-full">
				{/* Toggle button for vertical menu */}
				<button
					onClick={toggleMenu}
					className="hidden 2xl:block focus:outline-none"
					aria-label="Toggle menu"
				>
					{isExpanded ? <ChevronLeft /> : <ChevronRight />}
				</button>

				{/* Menu items */}
				<ul className={clsx('flex 2xl:flex-col justify-around 2xl:justify-start 2xl:space-y-6 w-full')}>
					{menuItems.map((item) => (
						<li
							key={item.path}
							className={clsx(
								'flex items-center justify-center 2xl:justify-start 2xl:items-center',
								pathname === item.path ? 'text-accent500' : 'text-gray-500',
								'hover:text-primary700'
							)}
						>
							<button
								onClick={() => router.push(item.path)}
								className={clsx(
									'flex flex-col 2xl:flex-row items-center 2xl:gap-2 gap-1 text-center focus:outline-none',
									isExpanded ? '2xl:flex-row' : '2xl:flex-col'
								)}
							>
								{item.icon}
								<span
									className={clsx(
										'text-xs 2xl:text-sm',
										'2xl:block',
										!isExpanded && '2xl:hidden'
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
