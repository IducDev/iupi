'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image';
import Input from '../ui/Input';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<header className='shadow-md relative px-6 py-4'>
			<nav className='mx-auto flex items-center justify-between px-4 py-2 md:py-4'>
				{/* Logo */}
				<div >
					<Image src='/BlueLogo.png' alt='logo' width={72} height={36} />
				</div>
				{/* Search Bar */}
				<div
					className={clsx(
						'hidden md:flex',
						isOpen ? 'md:hidden' : 'md:flex'
					)}
				>
					<Input
						type='search'
						size='medium'
						placeholder='Buscar...'
						className='w-[120px] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
				{/* Avatar and Hamburger Menu */}
				<div className='flex items-center gap-4'>
					{/* User Avatar */}
					<div className='w-8 h-8 rounded-full bg-gray-300 overflow-hidden'>
						<Image
							src='/Avatar.png'
							alt='Avatar'
							width={150}
							height={150}
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Hamburger Menu Icon */}
					<button
						className='text-2xl text-gray-600'
						onClick={toggleMenu}
						aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
					>
						{isOpen ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={clsx(
					'absolute inset-x-0 top-full bg-gray-50 border-t border-gray-200 transition-all duration-300',
					isOpen ? 'max-h-screen p-4 z-10' : 'max-h-0 overflow-hidden'
				)}
			>
				{/* Search Bar (Visible only in mobile menu) */}
				{isOpen && (
					<div className='mb-4'>
						<Input
							type='search'
							size='medium'
							placeholder='Buscar...'
							className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>
				)}

				{/* Mobile Links */}
				<ul className='flex flex-col gap-4 text-gray-700'>
					<li>Perfil</li>
					<li>Notificaciones</li>
					<li>Mensajes</li>
					<li>Historial de operaciones</li>
					<li>Metas financieras</li>
					<li>Sobre iUpi</li>
					<li>Política de privacidad</li>
					<li>Términos y condiciones</li>
				</ul>
			</div>
		</header>
	)
}
