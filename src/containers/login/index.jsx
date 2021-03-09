import './style.scss';
import React from 'react';
import Header from '../../components/login/header/header';
import Body from '../../components/login/body/body';


function ContainerLogin() {
    return(
        <div className="containerMain">
            <div className="boxShadow"></div>
            <div className="contContent">
                
                <Header></Header>
                <Body></Body>

            </div>
        </div>
    )
}
export default ContainerLogin;
