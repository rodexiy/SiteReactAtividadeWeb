import "./Products.css"
import Product from "../Product/Product"

function Products() {
    return (
        <>
            <section className="products_main">
            <h3 className="products_titulo">Our Products</h3>

            <div className="products_row">
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
            </div>

            <div className="products_row">
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
                <Product image="./images/product.png" title="Syltherine" description="Stylish cafe chair" currentPrice="Rp 2.500.000" oldPrice="Rp 3.500.000"/>
            </div>
            
            <div className="loadMore_button">
                <p>
                    Load More
                </p>
            </div>

            </section>
        </>
    )
}

export default Products