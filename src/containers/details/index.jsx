import Header from "./../../components/home/header"
import './style.css';
import Content from "./../../components/details/content"
function Details() {
    return(
       <div className="container-details">
           <div className="sombra">
            <Header></Header>
            <Content></Content>
            </div>
       </div>
    );
    
}
export default Details;