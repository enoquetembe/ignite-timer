import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 flex-wrap text-timer-gray-100 text-lg font-bold">
      <label htmlFor="task">I will work on</label>
      <input
        type="text"
        id="task"
        list="task-suggestion"
        {...register('task')}
        disabled={!!activeCycle}
        placeholder="Name your project"
        className="bg-transparent h-9 p-2 border-b-2 font-bold text-lg border-b-timer-gray-500 flex-1 placeholder:text-timer-gray-500 focus:shadow-none focus:border-b-timer-green"
      />
      <datalist id="task-suggestion">
        <option value="Design System" />
        <option value="Front-end" />
        <option value="PR Review" />
        <option value="Back-end" />
      </datalist>

      <label htmlFor="">For</label>
      <input
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
        placeholder="00"
        className="bg-transparent w-16 h-9 p-2 border-b-2 font-bold text-lg border-b-timer-gray-500 placeholder:text-timer-gray-500 focus:shadow-none focus:border-b-timer-green"
      />

      <span>minutes.</span>
    </div>
  )
}
