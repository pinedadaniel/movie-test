import Header from "./../../components/home/header"
import './style.css';
import Content from "./../../components/home/content"
function Home() {
    return(
       <div className="container-home">
           <div className="sombra">
            <Header></Header>
            <Content></Content>
            </div>
       </div>
    );
    
}
export default Home;