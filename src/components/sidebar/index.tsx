'use client'
import { usePathname } from "next/navigation"
import Nav from "../navigation"
import HomeIcon from "../icons/home"
import TransmissionIcon from "../icons/transmision"
import FavoriteIcon from "../icons/favorite"
export default function SideBar() {
  const pathname = usePathname()
  return (
    <Nav.container>
      <Nav.header>
        Radio Vibe
      </Nav.header>
      <Nav.item
        href='/'
        icon={<HomeIcon />}
        isActive={pathname === "/"}
        label='Página inicial'
        testId="nav-home"
      />
      <Nav.item
        href='/stations'
        icon={<TransmissionIcon />}
        isActive={pathname === "/stations"}
        label='Todas as estações'
        testId="nav-stations"
      />
      <Nav.item
        href='/favorites'
        icon={<FavoriteIcon />}
        isActive={pathname === "/favorites"}
        label='Estações Favoritas'
        testId="nav-favorites"
      />
    </Nav.container>
  )
}