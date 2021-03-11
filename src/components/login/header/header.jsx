import './style.scss';
import Netflix from '../../../images/netflix.svg';
import { Link } from "react-router-dom";
function Header() {
    return(
        <div className="containerLoginHeader">
            <Link to="/">
                <img src={Netflix} alt="" height="45px" width="145px"/>
            </Link>
        </div>
    );
    
}
export default Header;