import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 flex-wrap text-timer-gray-100 text-lg font-bold">
          <label htmlFor="task">I will work on</label>
          <input
            type="text"
            id="task"
            list="task-suggestion"
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
            placeholder="00"
            className="bg-transparent w-16 h-9 p-2 border-b-2 font-bold text-lg border-b-timer-gray-500 placeholder:text-timer-gray-500 focus:shadow-none focus:border-b-timer-green"
          />

          <span>minutes.</span>
        </div>

        <div className="flex gap-4 font-roboto-mono text-[10rem] leading-[8rem] text-timer-gray-100">
          <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">0</span>
          <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">0</span>
          <div className="w-16 flex justify-center py-8 px-0 text-timer-green rounded-lg overflow-hidden">
            :
          </div>
          <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">0</span>
          <span className="bg-timer-gray-700 px-4 py-8 rounded-lg">0</span>
        </div>

        <button
          type="submit"
          className="bg-timer-green text-timer-gray-100 w-full rounded-lg flex justify-center items-center gap-2 p-4 font-bold hover:bg-timer-green-dark disabled:opacity-70 disabled:hover:bg-timer-green"
        >
          <Play size={24} />
          Start
        </button>
      </form>
    </div>
  )
}
