import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const OpcoesComponent = styled.ul`
  display: flex;
`;

const OpcaoComponent = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

function OpcaoHeader() {
    return (
        <OpcoesComponent>
            { textoOpcoes.map( (texto) => (
                <OpcaoComponent><p>{texto}</p></OpcaoComponent>
            ))}
      </OpcoesComponent>
    );
}

export default OpcaoHeader;