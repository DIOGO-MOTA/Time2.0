import styled from 'styled-components'

export const FromContainer = styled.div`
  //container do form
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']}; //cor
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap; // quando a tela for menos ele vair quebrar o campo em mai linhas.
`
const BaseInput = styled.input`
  // const base que será usada somente dentro do styles para reaporveitar o codigo
  // tudo o que eu colocar aqui será aplicados para os inputs que tiverem a const BaseInput
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem; // preciso aplicar de novo pq o input não herda o font-size dop container
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none; // para não mostrar toda a borda só a border-bottom
    border-color: ${(props) =>
      props.theme['green-500']}; // cor da bordder-bottom
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1; // faz o input ocupar o maximo de espaço que dá

  &::-webkit-calendar-picker-indicator {
    //PARA TIRA A SETINHA QUE ESTAVA NO INPUT (CHROME)
    display: none !important;
  }
`

export const MinutsAmountInput = styled(BaseInput)`
  width: 4rem;
`
