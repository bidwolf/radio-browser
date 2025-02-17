'use client'
import { usePathname } from "next/navigation"
import Nav from "../navigation"
import HomeIcon from "../icons/home"
import TransmissionIcon from "../icons/transmision"
import FavoriteIcon from "../icons/favorite"
export default function SideBar() {
  const pathname = usePathname()
  return (
    <Nav.Container navClasses="hidden md:col-span-5 lg:col-span-4 w-[17.5rem] xl:col-span-3 md:flex md:flex-col md:gap-4">
      <Nav.Header>
        Radio Vibe
      </Nav.Header>
      <Nav.Item
        href='/'
        icon={<HomeIcon />}
        isActive={pathname === "/"}
        label='Página inicial'
        testId="nav-home"
      />
      <Nav.Item
        href='/stations'
        icon={<TransmissionIcon />}
        isActive={pathname === "/stations"}
        label='Todas as estações'
        testId="nav-stations"
      />
      <Nav.Item
        href='/favorites'
        icon={<FavoriteIcon />}
        isActive={pathname === "/favorites"}
        label='Estações Favoritas'
        testId="nav-favorites"
      />
    </Nav.Container>
  )
}