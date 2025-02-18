'use client';
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export const BrazilianButton = () => {
  const route = useRouter()
  return (
    <Button onClick={() => route.push('/stations?filter=country&value=Brazil')} size="md" color="primary" className="w-full text-tertiary-500">🇧🇷 Ver Rádios Brasileiras</Button>
  )
}