import Image from "next/image"
import Iphone from"../images/Iphone Image.png"
export default function Hero(){
    return(
        <>
        <div className="hero">
            <div className="text">
                <h2>Pro Beyound</h2> <br />
                <h1>IPHONE 14 <span className="font-bold">Pro</span></h1>
                <br />
                <p>Created to change everything for the better. For everyone</p> <br />
                <button>Shop Now</button> <br />
                </div>
            <Image src={Iphone} alt="iphone" className="slide-tr"/>
            </div>
        
        </>
    );
}