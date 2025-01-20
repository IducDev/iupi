"use client"
import Dashboard from "@/components/layout/Dashboard";
import BalanceCard from "@/components/cards/BalanceCard";
import GoalCard from "@/components/cards/GoalCard";

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

  return (
    <main>
      <section className="px-4 pt-6 space-y-4 w-full bg-primary300 h-screen">
        <BalanceCard amount={0.00} />
        <GoalCard goals={userGoals} />
        <Dashboard />
      </section>
    </main>
  );
}