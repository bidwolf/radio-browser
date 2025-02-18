'use client';
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CountryButtonProps = {
  country: string
}
export const CountryButton = ({ country }: CountryButtonProps) => {
  let regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' });
  console.log(regionNames.of(country.toUpperCase()))
  const route = useRouter()
  return (
    <Button onClick={() => route.push(`/stations?filter=country&value=${country}`)} size="md" color="primary" className="w-full text-tertiary-500 flex items-center justify-center gap-2">
      <Image src={`https://flagcdn.com/16x12/${country.toLowerCase()}.png`} alt="flag" width={16} height={12} className="object-cover" />
      Ver mais de {regionNames.of(country.toUpperCase())}
    </Button>
  )
}