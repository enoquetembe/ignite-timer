interface StatusProps {
  status: string
  statusColor?: 'timer-yellow' | 'timer-green-light' | 'timer-red'
}

export function Status({ status, statusColor }: StatusProps) {
  return (
    <span
      className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-${statusColor}`}
    >
      {status}
    </span>
  )
}
