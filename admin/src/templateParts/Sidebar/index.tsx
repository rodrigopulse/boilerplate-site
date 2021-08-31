import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="menu">
        <NavLink className="menu__link" to="/hero">
          Hero
        </NavLink>
        <NavLink className="menu__link" to="/servicos">
          Serviços
        </NavLink>
      </nav>
    </aside>
  )
}
