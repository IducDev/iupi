"use client"
import { AccountBalance, ShoppingBag, Storage, LegendToggle } from '@mui/icons-material'
import BalanceCard from "@/components/cards/BalanceCard";
import FinanceCard from "@/components/cards/FinanceCard";
import GoalCard from "@/components/cards/GoalCard";
import RecommendationCard from '@/components/cards/RecommendationCard';

export default function Home() {

  const userGoals = [
    {
      title: "Viaje a Japon con millas",
      amount: 250000,
      percentage: 50,
    },
    {
      title: "Mi propia casa en el interior",
      amount: 5000000,
      percentage: 30
    },
  ];

  const incomeData = [
    { label: 'Fondos mutuos', icon: <LegendToggle />, path: '/income/mutual-funds' },
    { label: 'Stocks', icon: <AccountBalance />, path: '/income/stocks' },
    { label: 'ETFS', icon: <Storage />, path: '/income/etfs' },
    { label: 'Acciones', icon: <ShoppingBag />, path: '/income/actions' }
  ]

  const expenseData = [
    { label: 'Fondos mutuos', icon: <LegendToggle />, path: '/expenses/mutual-funds' },
    { label: 'Stocks', icon: <AccountBalance />, path: '/expenses/stocks' },
    { label: 'ETFS', icon: <Storage />, path: '/expenses/etfs' },
    { label: 'Acciones', icon: <ShoppingBag />, path: '/expenses/actions' }
  ]

  const savingsData = [
    { label: 'Fondos mutuos', icon: <LegendToggle />, path: '/savings/mutual-funds' },
    { label: 'Stocks', icon: <AccountBalance />, path: '/savings/stocks' },
    { label: 'ETFS', icon: <Storage />, path: '/savings/etfs' },
    { label: 'Acciones', icon: <ShoppingBag />, path: '/savings/actions' }
  ]

  const recommendations = [
    {
      label: 'Fondo de Crecimiento en Tecnología',
      description: 'Basado en tu perfil de inversor.',
      percentage: 9.2
    },
    {
      label: 'Energía verde ETF',
      description: 'Tendencia en tu grupo de edad.',
      percentage: 5.7
    },
    {
      label: 'Fondo de Bonos Corporativos',
      description: 'Diversifica tu cartera.',
      percentage: 4.3
    },
    {
      label: 'Fondo de Startups',
      description: 'Participa en empresas emergentes.',
      percentage: 15.0
    }
  ]


  return (
    <main className="px-4 pt-6 pb-24 space-y-4 w-full bg-primary300">
      <BalanceCard amount={0.00} />

      <FinanceCard title="Ingresos" items={incomeData} />
      <FinanceCard title="Gastos" items={expenseData} />
      <FinanceCard title="Capacidad de ahorro" items={savingsData} />

      <RecommendationCard title="Recomendado para ti" items={recommendations}/>


      <GoalCard goals={userGoals} />
    </main>
  );
}
