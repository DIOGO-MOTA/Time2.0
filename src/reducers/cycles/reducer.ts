import { ActionTypes } from './actions'

export interface Cycle {
  // interface para definir o formato dos ciclos
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CycleState, action: any) {
  // o useReducer agora tem uma função para todas as alterações que precisãm acontecer
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          // percorredo os ciclos e ira retornar cada um dos ciclos alterados ou não
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() } // adicionando a data em que o ciclo foi parado
          } else {
            return cycle
          }
        }),
        activeCycleId: null, // zera o contador
      }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          // percorredo os ciclos e ira retornar cada um dos ciclos alterados ou não
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() } // adicionando a data em que o ciclo foi parado
          } else {
            return cycle
          }
        }),
        activeCycleId: null, // zera o contador
      }
    default:
      return state
  }
}
