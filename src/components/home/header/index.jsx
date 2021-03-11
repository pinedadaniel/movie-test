import './style.css';
import Netflix from '../../../images/netflix.svg';
function Header() {

    return(
        <div className="containerHeader">
            <div className="header-left">
            <img  className="cursor" src={Netflix} alt="" height="36px" width="134px"/>  
            </div>
            
            <div className="header-right">
            <label htmlFor="select-lang" className="container-select">
                <span class="material-icons">
                    language
                </span> 
                <select name="select-lang" id="select-lang" className="btn-lang">
                    <option value="Español">Español</option>
                    <option value="Ingles">Ingles</option>
                </select>
            </label>
            <button className="btn-login cursor">Iniciar Sesion</button>
            </div>
            

            
        </div>
    );
    
}
export default Header;