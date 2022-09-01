import { FromContainer, MinutsAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext() // Só funciona se tiver um Provider por volta

  return (
    <FromContainer>
      {/** No lugar da div já fica o nome da const */}
      <label htmlFor="task"> Vou trabalhar em </label>
      {/* When a user clicks or touches/taps a label, the browser passes the focus to its associated input  */}
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle} // campo do form desabilitado caso ciclo esteja tivo
        {...register('task')} // o sprad operator está pegando as inforções retornadas pelo register e acopla nos inputs como  se fossem propriedades
      />
      {/* task para conseguir trabalhar com a label */}

      <datalist id="task-suggestions">
        {/* Lista de sugetões para um input */}
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">Duração</label>
      <MinutsAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5} // para aumentar o número do inpude de 5 em 5
        min={5} // minimo
        max={60} // máximo
        disabled={!!activeCycle} // campo do form desabilitado caso ciclo esteja tivo
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FromContainer>
  )
}
