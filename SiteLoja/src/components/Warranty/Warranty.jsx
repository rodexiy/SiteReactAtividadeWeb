import WarrantyComponent from "../WarrantyComponent/WarrantyComponent"
import "./Warranty.css"

function Warranty() {
    return (
        <>
            <div className="Warranty_main">
                <WarrantyComponent image="/images/guarantee.png" title="High quality" description="Over 2 years"/>
                <WarrantyComponent image="/images/guarantee.png" title="High quality" description="Over 2 years"/>
                <WarrantyComponent image="/images/guarantee.png" title="High quality" description="Over 2 years"/>
                <WarrantyComponent image="/images/guarantee.png" title="High quality" description="Over 2 years"/>
            </div>
        
        </>
    )
}

export default Warranty