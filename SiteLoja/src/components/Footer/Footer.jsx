import "./Footer.css"

function Footer() {
    return (
        <>
        <footer className="footer_main">
            <div className="footer_column">
                <h1 className="furniroP">Funiro.</h1>
                <p id="belowFurniroP">
                400 University Drive Suite 200 Coral<br/>
                Gables,<br/>
                FL 33134 USA
                </p>
            </div>
            <div>
                <p className="titulo_area">Links</p>
                <div className="footer_column">
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <p className="titulo_area">Help</p>
                <div className="footer_column">
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </div>
            </div>
            <div className="titulo_area">
                <p>Newsletter</p>

                <div className="enterzone">
                    <p className="enterEmail">Enter Your Email Address</p>
                    <p className="subscribe_button">SUBSCRIBE</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer