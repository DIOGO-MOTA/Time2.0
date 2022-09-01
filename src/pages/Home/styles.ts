// no styled-components é importante evitar cascatear muito a estilização
// e focar mai  em criar novos componentes estilizados
// O styled-components permite a  estilização em cascata, assim como  o sass

import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const BaseCountdownButton = styled.button`
  //estilização do button
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer; // ponteiro do mouse

  &:disabled {
    //se o butto estiver disabled fazer
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    // se não estiver disabled
    background: ${(props) => props.theme['green-700']};
    // butto mais escuro ao passar o cursos por cima
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    // se não estiver disabled
    background: ${(props) => props.theme['red-700']};
    // butto mais escuro ao passar o cursos por cima
  }
`
