import clsx from "clsx"

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	size?: 'small' | 'medium' | 'large'
	variant?: 'outlined' | 'filled'
}

export default function Input({ size, variant, className, ...props }: InputProps) {

	const inputClass = clsx(
		'rounded-lg px-2 py-1 transition-all',
		{
			'text-sm w-[300px]': size === 'small',
			'text-base w-[400px]': size === 'medium',
			'text-lg w-[500px]': size === 'large',
			'bg-white border border-gray-300': variant === 'outlined',
			'bg-gray-100 focus:bg-white': variant === 'filled'
		},
		className
	)

	return (
		<input className={inputClass} {...props} />
	)
}
