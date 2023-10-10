import Card from "../Card/Card"
import "./Range.css"

function Range() {
    return (
        <>
            <div className="range">
                <div className="texto_cima">
                    <h3 className="titulo">
                        Browse The Range
                    </h3>
                    <p className="descricao"> 
                        Lorem ipsum sit amet, consecteur adipiscing elit.
                    </p>

                </div>


                    <div className="holder">
                        <div className="cards">
                            <Card image="./images/local1.png" local="Dining" />
                            <Card image="./images/local2.png" local="Living"/>
                            <Card image="./images/local3.png" local="Bedroom"/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Range