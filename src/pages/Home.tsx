import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewCycleForm } from '../components/NewCycleForm'
import { CountDown } from '../components/CountDown'
import * as zod from 'zod'
import { CyclesContext } from '../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Task is required'),
  minutesAmount: zod.number().min(5).max(60),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <button
            type="button"
            onClick={interruptCurrentCycle}
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
