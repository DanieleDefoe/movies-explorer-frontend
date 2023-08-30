import { Outlet } from 'react-router-dom'
import './AppLayout'

export const AppLayout = () => {
  return (
    <section className="layout">
      app layout <Outlet />
    </section>
  )
}
