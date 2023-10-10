import "./Topbar.css"

function Topbar() {
    return (
        <>
        <div className="bar">
            <div className="divLogo">
                <img className="logo" src="/images/logo.png"></img>
                <h2 className="logoTexto">Furniro</h2>
            </div>

            <div className="content">
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>

            <div className="icones">
                <img src="./images/perfil.png"></img>
                <img src="./images/pesquisa.png"></img>
                <img src="./images/coracao.png"></img>
                <img src="./images/carrinho.png"></img>
            </div>
        </div>
        
        </>
    )
}

export default Topbar