'use client'
import { usePathname } from "next/navigation"
import * as Nav from "../navigation"
import HomeIcon from "../icons/home"
import TransmissionIcon from "../icons/transmision"
import FavoriteIcon from "../icons/favorite"
import { twMerge } from "tailwind-merge"
import { useSidebar } from "./sidebarContext"

export default function SideBar({ className }: { className?: string }) {
  const pathname = usePathname()
  const {
    showSidebar, closeSidebar
  } = useSidebar()

  return (
    <>

      <Nav.Container navClasses={twMerge(
        "fixed md:static h-full top-0 right-0 bg-background z-30 transition-transform w-[17.5rem] flex flex-col gap-4",
        showSidebar ? "translate-x-0 opacity-100 show" : "translate-x-full opacity-0 ",
        "md:translate-x-0 md:opacity-100",
        className
      )}>
        <button
          onClick={closeSidebar}
          className="absolute top-1 left-1 flex items-center justify-center w-8 h-8 text-muted cursor-pointer md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Nav.Header>
          Radio Vibe
        </Nav.Header>
        <Nav.Item
          href="/"
          icon={<HomeIcon />}
          isActive={pathname === "/"}
          label="Página inicial"
          testId="nav-home"
        />
        <Nav.Item
          href="/stations"
          icon={<TransmissionIcon />}
          isActive={pathname === "/stations"}
          label="Todas as estações"
          testId="nav-stations"
        />
        <Nav.Item
          href="/favorites"
          icon={<FavoriteIcon />}
          isActive={pathname === "/favorites"}
          label="Estações Favoritas"
          testId="nav-favorites"
        />
      </Nav.Container>
    </>
  )
}
