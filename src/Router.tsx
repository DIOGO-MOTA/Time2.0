import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Defaultlayout/index'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* quando "/" o Layout vai se aplicado em todas as pages */}
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  )
}
