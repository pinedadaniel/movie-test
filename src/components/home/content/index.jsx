

function Content() {
    return(
        <div className="containerContent">
            <h1 className="content-titlle">Películas y series ilimitadas <br/> y mucho más.</h1>
            <h2 className="content-subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
            <p className="content-label">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            <form className="form-content">
                <input type="email" name="" id="content-email" placeholder="Email"/>
                <button className="btn-comenzar cursor">Comenzar 
                        <span class="material-icons">
                            keyboard_arrow_right
                        </span> 
                </button>
                </form>

        </div>
    );
    
}
export default Content;