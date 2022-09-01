import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from 'react'
import {
  ActionTypes,
  addNewCycleAction,
  intrruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  intrruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType) // as "dá" um inteligencia pro codigo

interface CyclesContextProviderProps {
  children: ReactNode
}

localStorage.setItem(
  '@ignite-timer:cycles-state-1.0.0',
  JSON.stringify({ cycles: [], activeCycleId: null }),
)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const INITIAL_STATE = {
    cycles: [],
    activeCycleId: null,
  }
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    INITIAL_STATE,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@Timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return INITIAL_STATE
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
      // calculando a diferença de segundos da data atual para ad data que começou o ciclo
    }
    return 0
  })
  // var para armazenar os segundo que ja se passaram desde qeu o counter iniciou ativo

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@Timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    // criando novo ciclo
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id, // getTime irá retornar id em milisegundos
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0) // resetando a var de quantos segungos já passartam para 0
  }

  function intrruptCurrentCycle() {
    dispatch(intrruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        intrruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
