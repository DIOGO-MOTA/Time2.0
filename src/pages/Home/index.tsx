import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form' // todo use*** é um hook
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

import { Countdown } from './components/CountDown'
import { NewCycleForm } from './components/NewCycleForm'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, ' o ciclo precisa ser de no min 5 minutos')
    .max(60, 'o ciclo precisa ser no max de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
// inferindo os tipos com TS pasa substituir a interface

export function Home() {
  const { activeCycle, createNewCycle, intrruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      // valor inicial de cada campo
      task: '',
      minutesAmount: 0,
    },
  })
  // {} é uma desestruturação para extrair variáveis e funcões do retorno da function
  // useForm() é como se eu estivesse criando um novo formulário na minha aplicação
  // register fala quais são os campos que eu vou ter no meu formulário

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task
 
  return (
    <HomeContainer>

      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        {/*  Context  */}
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={intrruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
