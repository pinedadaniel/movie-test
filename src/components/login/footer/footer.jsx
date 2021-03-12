import './footer.scss';


function FooterLogin(params) {
    return(
        <div className="contMainFooter">
            <div className="sectionTop">
                <p className="font questions">¿Preguntas? Llama al 
                    <span className="font number">01 800 917 1564</span>
                </p>
            </div>
            <div className="sectionMedia">
                <ul className="list">
                    <li className="itemList font">Preguntas frecuentes</li>                    
                    <li className="itemList font">Centro de ayuda</li>
                    <li className="itemList font">Términos de uso</li>
                    <li className="itemList font">Términos de uso</li>
                    <li className=" font">Privacidad</li>
                    
                </ul>
                <ul className="list">
                    <li className="itemList font">Preferencias de cookies</li>
                    <li className="itemList font">Información corporativa</li>
                </ul>
            </div>
            <div className="sectionBotom">
                <label htmlFor="check" className="contLabelRelativ">
                    <span class="material-icons mundo">language</span>
                    <select name="" id="" className="selec">
                        <option value="español" className="option">Español</option>
                        <option value="ingles" className="option">Ingles</option>
                    </select>
                
                </label>
            </div>

        </div>
    );
}
export default FooterLogin; 