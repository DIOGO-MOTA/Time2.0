import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Um triangulo sobreposto sobre o outro" />
      <nav>
        <NavLink to="/" title="Timer">
          {/* NavLink para ao clicar nos icones, navegar entre as telas  */}
          <Timer size={24} /> {/* Timer Veio do phospor-react */}
        </NavLink>
        <NavLink to="/history" title="historico">
          <Scroll size={24} /> {/* Scroll Veio do phospor-react */}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
