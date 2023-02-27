import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) {

    const STYLES = ['primary', 'outline-primary']
    const SIZES = ['sm', 'lg']

    /* as variáveis abaixo checam se o botão tem um estilo ou tamanho definido, se não tiver 
     * automaticamante o primeiro estilo dos arrays STYLES e SIZES */
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <div>
            <Link to='/' className="btn-mobile">
                <button
                    className={`${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}>

                    {children}

                </button>
            </Link>
        </div>
    );
}

export default Button;

