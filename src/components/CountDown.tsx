import { differenceInSeconds } from 'date-fns'
import { useEffect, useContext } from 'react'
import { CyclesContext } from '../pages/Home'

export function CountDown() {
  const {
    activeCycle,
    activeCycleId,
    setSecondsPassed,
    amountOfSecondsPassed,
    markCurrentCycleAsFinished,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountOfSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <div className="flex gap-4 font-roboto-mono text-[10rem] leading-[8rem] text-timer-gray-100">
      <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">
        {minutes[0]}
      </span>
      <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">
        {minutes[1]}
      </span>
      <div className="w-16 flex justify-center py-8 px-0 text-timer-green rounded-lg overflow-hidden">
        :
      </div>
      <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">
        {seconds[0]}
      </span>
      <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">
        {seconds[1]}
      </span>
    </div>
  )
}
