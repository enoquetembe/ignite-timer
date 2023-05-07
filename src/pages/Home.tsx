import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, useState } from 'react'
import { NewCycleForm } from '../components/NewCycleForm'
import { CountDown } from '../components/CountDown'
import * as zod from 'zod'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextTye {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountOfSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextTye)

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Task is required'),
  minutesAmount: zod.number().min(5).max(60),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountOfSecondsPassed, setAmountOfSecondsPassed] = useState(0)

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function handleCreateNewCycle(data: newCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((prevState) => [...prevState, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountOfSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((prevState) =>
      prevState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles((prevState) =>
      prevState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountOfSecondsPassed(seconds)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
      >
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountOfSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <CountDown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <button
            type="button"
            onClick={handleInterruptCycle}
            className="bg-timer-red text-timer-gray-100 w-full rounded-lg flex justify-center items-center gap-2 p-4 font-bold hover:bg-timer-red-dark disabled:opacity-70 disabled:hover:bg-timer-green disabled:cursor-not-allowed"
          >
            <HandPalm size={24} />
            Interrupt
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="bg-timer-green text-timer-gray-100 w-full rounded-lg flex justify-center items-center gap-2 p-4 font-bold hover:bg-timer-green-dark disabled:opacity-70 disabled:hover:bg-timer-green disabled:cursor-not-allowed"
          >
            <Play size={24} />
            Start
          </button>
        )}
      </form>
    </div>
  )
}
