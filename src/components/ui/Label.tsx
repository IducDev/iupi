import React from 'react'
import clsx from 'clsx'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	size?: 'small' | 'medium' | 'large'
	weight?: 'light' | 'regular' | 'bold'
	color?: 'primary' | 'secondary' | 'muted'
}

export default function Label({ children, size, weight, color, className, ...props }: LabelProps) {
	const labelClass = clsx(
		'block transition-all',
		{
			'text-sm': size === 'small',
			'text-base': size === 'medium',
			'text-lg': size === 'large',
			'font-light': weight === 'light',
			'font-normal': weight === 'regular',
			'font-bold': weight === 'bold',
			'text-blue-600': color === 'primary',
			'text-gray-600': color === 'secondary',
			'text-gray-400': color === 'muted',
		},
		className
	)

	return <label className={labelClass} {...props}>{children}</label>
}



