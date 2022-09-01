import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; // Para quando estiver em tela pquene forçar gerar um scroll

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
const STATUS_COLORS = {
  // objeto que MAPEA um rgb para passar os tipos de cores deacordo com o status da tarefa
  // passado o tipo para statusColor
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const // esse tesxt sempre vai ser um desses 3 *****-500

// INTERFACE PARA QUE O Status RECEBA ALGUMA PROPRIEDADE
interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS // passando a tipagem typescript
}

export const Status = styled.span<StatusProps>`
  // Ao passar <StatusProps> estou dizendo que o span recebe as propriedades do <StatusProps>
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    // para ser visível o before precisa ter algum conteúdo mesmo que o conteúdo não sejá visível
    // o before vai ser a bolinha do Status
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
