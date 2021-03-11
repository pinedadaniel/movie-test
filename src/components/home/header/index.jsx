import './style.css';
import Netflix from '../../../images/netflix.svg';
function Header() {

    return(
        <div className="containerHeader">
            <div className="header-left">
            <img  className="cursor" src={Netflix} alt="" height="45px" width="145px"/>  
            </div>
            
            <div className="header-right">
                <select name="select-lang" id="select-lang" className="btn-lang">
                    <option value="Español">Español</option>
                    <option value="Ingles">Ingles</option>
                </select>
            <button className="btn-login cursor">Iniciar Sesion</button>
            </div>
            

            
        </div>
    );
    
}
export default Header;