"use client"

import { useBalanceAndMovsStore } from "@/store/balance/balanceAndMovements"
import Button from "../ui/Button"

export default function CurrencySwitch() {
	const { currency, setCurrency } = useBalanceAndMovsStore()
	const isUSD = currency === "USD"

	return (
		<div className="relative bg-primary400 rounded-full w-[100px] h-[36px] flex items-center px-1">
			<div
				className={`absolute rounded-full w-[50%] h-[80%] transition-all duration-300 ${isUSD ? "translate-x-full" : "translate-x-0"
					}`}
			/>
			<div className="relative w-full h-full flex items-center justify-between">
				<Button
					variant="basic"
					size="small"
					onClick={() => setCurrency("ARS")}
					className={`absolute w-1/2 text-center z-10 rounded-full text-sm font-medium transition-opacity duration-300 ${!isUSD ? "opacity-100" : "opacity-0"
						}`}
				>
					ARS
				</Button>
				<Button
					variant="basic"
					size="small"
					onClick={() => setCurrency("USD")}
					className={`absolute w-1/2 right-0 text-center z-10 rounded-full text-sm font-medium transition-opacity duration-300 ${isUSD ? "opacity-100" : "opacity-0"
						}`}
				>
					USD
				</Button>
			</div>
		</div>
	)
}



