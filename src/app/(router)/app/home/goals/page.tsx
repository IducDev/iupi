'use client'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowBackIos } from '@mui/icons-material'
import Label from '@/components/ui/Label'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { apiGoal } from '@/utils/goalData/fetchGoal'

export default function Goals() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [isMounted, setIsMounted] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const goalType = [
		'Proyecto personal', 'Educacion', 'Celebracion', 'Comprar un vehiculo',
		'Vacaciones y viajes', 'Comprar una casa', 'Retiro', 'Hobbie', 'Inversion',
		'Compra de equipos', 'Fondo de emergencia'
	]

	const validationSchema = Yup.object({
		description: Yup.string().min(3, 'El nombre debe tener al menos 3 caracteres').required('El nombre es obligatorio'),
		objectiveType: Yup.string().required('El tipo de meta es obligatorio'),
		amountObjective: Yup.number().typeError('Debe ser un número').positive('Debe ser un valor positivo').required('El valor total es obligatorio'),
		frequency: Yup.string().required('La frecuencia es obligatoria'),
		startDate: Yup.date().required('La fecha es obligatoria'),
		targetDate: Yup.date().required('La fecha es obligatoria'),
	})

	const formik = useFormik({
		initialValues: {
			description: '',
			objectiveType: '',
			amountObjective: 0,
			frequency: 'Semanal',
			startDate: '',
			targetDate: '',
		},
		validationSchema,
		onSubmit: async (values) => {
			try {
				await apiGoal.create(values)
				router.push('/app/home')
				console.log('Meta creada exitosamente')
			} catch (error) {
				console.error('Error al crear la meta:', error)
			}
		},
	})

	if (!isMounted) return null

	return (
		<main className="flex flex-col justify-start px-4 pt-6 w-full min-h-screen text-white900">
			<div className='flex justify-between'>
				<div className='flex items-center'>
					<Link href={'/app/home'}>
						<ArrowBackIos />
					</Link>
					<h6 className='text-h6-bold ml-2'>Nueva meta</h6>
				</div>
			</div>
			<div className='max-w-md p-6'>
				<h5 className='text-h5-semibold mb-4'>Define tus metas</h5>
				<p className='text-p2-regular mb-6'>Define algunos datos importantes para identificar claramente tus metas:</p>
				<form onSubmit={formik.handleSubmit}>
					<div className='mb-8'>
						<Label className='text-h6-semibold mb-2' htmlFor='description'>Nombre</Label>
						<Input id='description' type='text' name='description' placeholder='Ej: Comprar un libro' className='w-full p-3 h-[56px] border rounded-md' onChange={formik.handleChange} value={formik.values.description} />
						{formik.touched.description && formik.errors.description && <p className='text-red-500 text-xs'>{formik.errors.description}</p>}
					</div>
					<div className='mb-8'>
						<Label className='text-h6-semibold mb-2'>Tiempo</Label>
						<div className='flex gap-2'>
							<Input id='startDate' type='date' name='startDate' className='w-full p-3 border rounded-md' onChange={formik.handleChange} value={formik.values.startDate} />
							<Input id='targetDate' type='date' name='targetDate' className='w-full p-3 border rounded-md' onChange={formik.handleChange} value={formik.values.targetDate} />
						</div>
					</div>
					<div className='mb-8'>
						<Label className='text-h6-semibold mb-2' htmlFor='amountObjective'>Valor total</Label>
						<Input id='amountObjective' type='text' name='amountObjective' placeholder='Ej: $100.000,00' className='w-full p-3 border rounded-md' onChange={formik.handleChange} value={formik.values.amountObjective} />
						{formik.touched.amountObjective && formik.errors.amountObjective && <p className='text-red-500 text-xs'>{formik.errors.amountObjective}</p>}
					</div>
					<div className='mb-8'>
						<Label className='text-h6-semibold mb-2' htmlFor='frequency'>Frecuencia</Label>
						<select id='frequency' name='frequency' className='w-full p-3 border rounded-md' onChange={formik.handleChange} value={formik.values.frequency}>
							<option value='Semanal'>Semanal</option>
							<option value='Mensual'>Mensual</option>
							<option value='Anual'>Anual</option>
						</select>
					</div>
					<div className='mb-8'>
						<Label className='text-h6-semibold mb-2'>Tipo de meta</Label>
						<div className='flex flex-wrap gap-2'>
							{goalType.map((category) => (
								<Button key={category} type="button" className={`px-4 py-2 rounded-full text-sm border ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() =>  setSelectedCategory(category)}>
									{category}
								</Button>
							))}
						</div>
					</div>
					<button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700'>
						Crear meta
					</button>
				</form>
				<p className=' m-8'>Tus metas se verán en tu perfil</p>
			</div>
		</main>
	)
}

