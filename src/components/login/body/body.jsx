import './style.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function BodyLogin() {

    const [validText, setValidText] = useState(true);


    function handleChange(e) {
        if(e.target.value === '') {
            setValidText(false);
            e.target.classList.add('border_bottom');
        } else {
            setValidText(true);
            e.target.classList.remove('border_bottom');
        }
    }
    

    return(
        <div className="containerBody">
            <div className="cardBody">
                <h1 className="titleMain">Iniciar sesión</h1>
                <div className="campLogin">
                    <div className="boxLogin">
                        <input type="email" onBlur={handleChange} onChange={handleChange} autoComplete="off" name="email" placeholder="email"  className={`campoEmail`} />
                        <label htmlFor="" className="placeholder1">Email o numero de telefono</label>
                    </div>
                    {
                        validText 
                        ? null
                        :  <small className="small"> Ingresa un email o un número de teléfono válido. </small>
                    }
                    <div className="boxLogin">
                        <input type="password"  name="password" placeholder="contraseña" className={`campoPassword`}/>
                        <label htmlFor="" className="placeholder2">Contraseña</label>
                    </div>
                    {
                        
                        validText 
                        ? null
                        :  <small className="small"> Ingresa tu contraseña. </small>
                    }
                </div>
                <Link to="/movies">
                    <input type="submit" value="iniciar sesión" className="submit cursor"/>
                </Link>
                <div className="contHelp">
                    <div className="sectionCheckbox">

                        <input type="checkbox" name="checkbox" id="checkbox" className="checkbox"/>
                        
                        <label htmlFor="checkbox" className="labelCheckbox">
                            <h2 className="fontHelp">Recuérdame</h2>
                        </label>
                    </div>
                    <Link to="/" className="fontHelp">¿Necesitas ayuda?</Link>
                </div>
                <div className="contBoxFinal">
                    <div className="apiFacebook">
                        <span className="material-icons facebook cursor">facebook</span>
                        <h2 className="fontFacebook cursor">Inicia sesión con Facebook</h2>
                    </div>
                    <div className="boxFinal">
                        <h2 className="fonth2">¿Primera vez en Netflix?</h2>
                        <Link to="/" className="fontSuscrib">Suscribete ya.</Link>
                    </div>
                    <div className="copyrig">
                        <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
                            <Link to="/" className="fontInfo">Más info.</Link>
                        </p>
                    </div>

                </div>
                

            </div>

        </div>
    );
}
export default BodyLogin;