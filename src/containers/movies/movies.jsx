import './movies.scss';
import  React  from "react";
import Header from '../../components/login/header/header';
import Body from '../../components/movies/body/body';



function Movies() {
    return(
        <div className="contMainMovies">
            <div className="boxShadow"></div>
            <div className="contContent">

                <Header></Header>
                <Body></Body>
            </div>


        </div>
    );
}
export default Movies;