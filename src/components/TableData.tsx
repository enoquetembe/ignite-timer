import { ReactNode } from 'react'

interface TableDataProps {
  children: ReactNode
}

export function TableData({ children }: TableDataProps) {
  return (
    <td className="bg-timer-gray-700 border-t-4 border-t-timer-gray-800 p-4  text-sm leading-[1.6] first:w-[50%]">
      {children}
    </td>
  )
}
