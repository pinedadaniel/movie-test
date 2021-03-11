import './style.css';
import Netflix from '../../../images/netflix.svg';
import perfil   from "../../../images/perfil.jpg";
import { Link } from "react-router-dom";
function Header() {

    return(
        <div className="detailsContainerHeader">
            <div className="detailsHeaderLeft">
                <Link to="/">
                    <img  className="cursor" src={Netflix} alt="" height="45px" width="145px"/> 
                </Link> 
            </div>

            <div className="detailsHeaderRight">
                <label htmlFor="open-list" className="headerRightTop">
                    <input type="checkbox" name="" id="open-list" />
                    <img  src={perfil} alt="icono del usuario" height="35px" width="35px"/>
                    <h2  className="nameUser">Pineda</h2>
                    <span className="material-icons">
                        arrow_drop_down
                    </span>
                    <div className="lista-perfil">
                        <div>Cambiar usuario</div>
                        <div>Configuracion</div>
                        <div>Ayuda</div>
                        <div>Cerrar Sesion</div>
                    </div>
                </label>
               
                   
                
            </div>
            
            

            
        </div>
    );
    
}
export default Header;