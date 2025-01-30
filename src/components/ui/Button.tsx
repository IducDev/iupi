import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'small' | 'medium' | 'large'
	variant?: 'solid' | 'outline' | 'text' | 'basic'
	loading?: boolean
	icon?: React.ReactNode
}

export default function Button({
	size,
	variant,
	loading,
	icon,
	children,
	className,
	disabled,
	...props
}: ButtonProps) {
	const buttonClass = clsx(
		'inline-flex items-center justify-center rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2',
		{
			// Size styles
			'px-3 py-1 text-sm': size === 'small',
			'px-4 py-2 text-base': size === 'medium',
			'px-6 py-3 text-lg': size === 'large',
			// Variant styles
			'bg-accent300 text-white hover:bg-blue-700 focus:ring-blue-500': variant === 'solid',
			'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500': variant === 'outline',
			'bg-transparent hover:bg-transparent focus:outline-none focus:ring-0 active:bg-transparent active:border-none': variant === 'text',
			'bg-white text-white700 border font-semibold shadow-lg border-white200 focus:ring-blue-500': variant === 'basic',

			// Loading/Disabled styles
			'opacity-50 pointer-events-none': loading || disabled,
		},
		className
	)

	return (
		<button
			className={buttonClass}
			disabled={loading || disabled}
			{...props}
		>
			{loading ? (
				<svg
					className="animate-spin h-4 w-4 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
					/>
				</svg>
			) : (
				icon && <span className="mr-2">{icon}</span>
			)}
			{children}
		</button>
	)
}
