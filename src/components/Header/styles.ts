import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex; /*o padrão do flex direction ja é row, um do lado do outro */
    gap: 0.5rem; /*gap gera um espaçamento estre os elementos*/

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent; /* Borda transparent para centralizar a pocição dos icones */
      border-bottom: 3px solid transparent; /* Adicionar previamente a borda mesmo que não aprereça
      para quando o hover aparecer jé ter uma borda antes e ja estar levemente posicionado "para cima"  */

      &:hover {
        /* ao passar o maou por cima mostrar border-bottom */
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      /*quando uma página estiver ativa, automaticamente o NavLink vai colocar na ancora que está por volta
       do icone uma classe chamada active e uma aria-current="page". Assim posso estilizar o ACTIVE*/
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
