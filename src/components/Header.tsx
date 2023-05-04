import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" />
      <nav className="flex gap-2">
        <NavLink
          to="/"
          title="timer"
          className="w-12 h-12 flex justify-center items-center text-timer-gray-100 border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent hover:border-b-timer-green-light link"
        >
          <Timer size={24} />
        </NavLink>

        <NavLink
          to="/history"
          title="history"
          className="w-12 h-12 flex justify-center items-center text-timer-gray-100 border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent hover:border-b-timer-green-light active:text-timer-green-light link"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </div>
  )
}
