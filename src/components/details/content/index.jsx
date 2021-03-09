import './style.css';
import joker from "../../../images/joker.jpg"
function Content() {
    return(
        <div className="containerContentDetails">
            <div className="contentDetailsImg">
                <img src={joker} alt="Pelicula el joker"/>
                 </div>
            <div className="contentDetailsInfo">
                <div className="infoDatos">
                <h1>Joker</h1>
                <h2 className="text-verHD">Ver Joker en  HD completa</h2>
                <h4 className="sipnosis">La película se centrará en los orígenes del malvado personaje denominado 
                    como Joker (Guasón) (interpretado esta vez por el actor Joaquin Phoenix) 
                    y explora cómo y por qué el personaje de Arthur Fleck, se convirtió en ese 
                    famoso villano que es el enemigo más famoso en el universo de Gotham City y 
                    en la vida de Batman.</h4>
                <h4 className="sipnosis">La sinopsis oficial dice así: «‘Joker’ se centra en el icónico archienemigo de
                     Bruce Wayne, y se trata de una historia original sobre el personaje que nunca antes se ha
                    visto en la gran pantalla. La exploración de Arthur Fleck, un hombre marginado y separado
                    de la sociedad, no es sólo un oscuro estudio de personajes, sino también un cuento demasiado 
                    oscuro con una moraleja igual de oscura».</h4>
                    </div>
                <div className="infoEtiquetas">
                   <div className="infoEtiquetasLeft">
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Vistas</h3>
                            <h3 >924610</h3>
                       </div>
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Generos</h3>
                            <h3 className="textEtiqueta">Acción, Crimen, Drama, Suspenso</h3>
                       </div>
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Director</h3>
                            <h3 className="textEtiqueta">Todd Phillis</h3>
                       </div>
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Actores</h3>
                            <h3 className="textEtiqueta">Brett Cullen, Douglas Hodge, Frances Conroy, 
                            Joaquin Phoenix, Robert De Niro, Shea Whigham, Zazie Beetz</h3>
                       </div>
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Paises</h3>
                            <h3 className="textEtiqueta">Canada, Usa</h3>
                       </div>
                   </div>
                   <div className="infoEtiquetasRight">
                   <div className="etiqueta">
                            <h3 className="titleEtiqueta">Duracion</h3>
                            <h3>122min</h3>
                       </div>
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Calidad</h3>
                            <h3 >HD</h3>
                       </div>
                       <div className="etiqueta">
                            <h3 className="titleEtiqueta">Lanzamiento</h3>
                            <h3 className="textEtiqueta">2019</h3>
                       </div>
                   </div>
                    </div>
                 </div>

        </div>
        
    );
    
}
export default Content;