import './style.scss';
import Netflix from '../../../images/netflix.svg';
function Header() {
    return(
        <div className="containerLoginHeader">
            <img src={Netflix} alt="" height="45px" width="145px"/>

        </div>
    );
    
}
export default Header;