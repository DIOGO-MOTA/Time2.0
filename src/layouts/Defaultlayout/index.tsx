import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />{' '}
      {/* usando o outlet o react router dom saberá onde tem que posicionar
       o conteúdo que é específico de uma página */}
    </LayoutContainer>
  )
}
