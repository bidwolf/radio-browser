'use client';
import React from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/button";
export const Pagination = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const offset = searchParams.get('offset') as string || 0
  const limit = searchParams.get('limit') || 10
  const handlePagination = (offset: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('offset', offset.toString())
    replace(`${pathname}?${params.toString()}`)
  }
  const handleNext = () => {
    handlePagination(+offset + +limit)
  }
  const handlePrevious = () => {
    if (+offset - +limit < 0) {
      handlePagination(0)
      return
    }
    handlePagination(+offset - +limit)
  }

  return (
    <div id="pagination" className="flex justify-center gap-4">
      <Button className="" onClick={handlePrevious}>Anterior</Button>
      <Button className="" onClick={handleNext}>Próximo</Button>
    </div>
  )
}