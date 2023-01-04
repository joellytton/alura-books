import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconeComponent = styled.li`
  margin-right: 40px;
  width: 25px;
`;


const IconesComponent = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];


function IconesHeader() {
    return (
        <IconesComponent>
        { icones.map( (icone) => (
          <IconeComponent><img src={icone} alt="icones"></img></IconeComponent>
        )) }
      </IconesComponent>
    );
}

export default IconesHeader;