import './body.scss';
import Joker from '../../../images/joker.jpg';
import {Link} from 'react-router-dom';
 



 
 
function BodyMovies() {
    return(
    <div className="contBodyMain">
        <div className="contCategories">
            <h1>CATEGORIAS</h1>
            <div className="categoriesLabel">
                <label htmlFor="">Terror/</label>
                <label htmlFor="">Acción/</label>
                <label htmlFor="">Comedia/</label>
                <label htmlFor="">Suspenso/</label>
                <label htmlFor="">Drama/</label>
                <label htmlFor="">Ciencia Ficción/</label>
                <label htmlFor="">Aventuras/</label>
                
                <label htmlFor="">Caricaturas/</label>
                <label htmlFor="">+18/</label>
            </div>
        </div>
        <div className="cardMovies">
            <div className="text">
                <h1>FAVORITOS</h1>
            </div>
            <div className="contGrid">
            <Link to="/details">
                    <div className="movieItem">
                     <img src={Joker} alt="Movie" width="100%" height="100%" />
                    <div className="mask">
                        <span >El Joker</span>

                    </div>
                    
                </div>
            </Link>

            </div>
            <div className="text">
                <h1>TENDENCIAS</h1>
            </div>
            <div className="contGrid">
                <Link to="/details">
                    <div className="movieItem">
                        <img src={Joker} alt="Movie" width="100%" height="100%" />
                        <div className="mask">
                            <span >El Joker</span>

                        </div>
                    
                    </div>
                </Link>

            </div>
        </div>

    </div>
    );
    
}
export default BodyMovies;