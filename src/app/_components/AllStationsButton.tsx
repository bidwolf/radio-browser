'use client';
import { Button } from "@/components/button";
import TransmissionIcon from "@/components/icons/transmision";
import { useRouter } from "next/navigation";

export const AllStationsButton = () => {
  const route = useRouter()
  return (
    <Button onClick={() => route.push('/stations')} size="md" color="secondary" className="w-full gap-2"><TransmissionIcon size={24} className="fill-white" /> Ver todas as rádios</Button>
  )
}