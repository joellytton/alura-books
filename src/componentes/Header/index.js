import './estilo.css';
import Logo from '../Logo/index';
import OpcaoHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <OpcaoHeader/>
            <IconesHeader/>
        </header>
    );
}

export default Header;

