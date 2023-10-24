import "./Product.css"

function Product(props) {
    return (
        <>
        <div>

            <div className="product">
                <img className="product_image" src={props.image}></img>
                <div className="product_recuo">
                    <p className="product_title" >{props.title}</p>
                    <p className="product_description">{props.description}</p>
                    <div className="product_pricediv">
                        <p className="product_pricediv_currentprice">{props.currentPrice}</p>
                        <p className="product_pricediv_oldprice">{props.oldPrice}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product