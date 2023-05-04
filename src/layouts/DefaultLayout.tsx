import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="bg-timer-gray-800 max-w-[74rem] h-[calc(100vh-10rem)] flex flex-col rounded-lg my-20 mx-auto p-10">
      <Header />
      <Outlet />
    </div>
  )
}
