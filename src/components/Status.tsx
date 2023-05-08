interface StatusProps {
  status: string
  statusColor?: 'bg-timer-yellow' | 'bg-timer-green-light' | 'bg-timer-red'
}

export function Status({ status, statusColor }: StatusProps) {
  return (
    <span
      className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:${statusColor}`}
    >
      {status}
    </span>
  )
}
