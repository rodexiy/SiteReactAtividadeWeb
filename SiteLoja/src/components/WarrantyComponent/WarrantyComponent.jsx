import "./WarrantyComponent.css"

function WarrantyComponent(props) {
    return (
        <>
            <div className="WC_main">
                <img className="WC_image" src={props.image}></img>
                <div className="WC_textArea">
                    <p className="WC_title">{props.title}</p>
                    <p className="WC_description">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default WarrantyComponent