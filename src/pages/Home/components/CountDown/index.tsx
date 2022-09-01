import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  // var para converter o num de minutos em seg

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        // calculando a diferença de segundos da data atual para ad data que começou o ciclo

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished() // chamando function que está na home
          // percorredo os ciclos e ira retornar cada um dos ciclos alterados ou não
          // adicionando a data em que o ciclo foi parado
          setSecondsPassed(totalSeconds) // sem isso o contador termina em 00:01
          clearInterval(interval) // para poder chegar a 00:00
        } else {
          setSecondsPassed(secondsDifference)
          // alterando pelo calculo da diferença
        }
      }, 1000) // 1 segungo
    }

    return () => {
      // o retorno de dentro do useEffect sempre será uma function
      // a function  serve para resetar/limpar o setInterval
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]) // denpendecia do useEffect

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  // calculo dos segundo que ja se passaram desde o cicli ativo

  const minutesAmount = Math.floor(currentSeconds / 60) // Masth.floor arredonda números quebrados para baixo. ceil arredonda para cima
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0') // convesão de numero para string
  const seconds = String(secondsAmount).padStart(2, '0') // convesão de numero para string

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])
  // todavex que minutos e segungos mudarem aatulaizar pra striong desses numeros
  return (
    <CountdownContainer>
      {/** No lugar da div já fica o nome da const */}
      {/* Div do contador */}
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
