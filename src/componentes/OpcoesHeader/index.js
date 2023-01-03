import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcaoHeader() {
    return (
        <ul className='opcoes'>
            { textoOpcoes.map( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
      </ul>
    );
}

export default OpcaoHeader;