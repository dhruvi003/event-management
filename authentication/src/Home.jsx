import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom"
import "./app.css"
// import BGimage from "./images/pexels-lukas-590045.png"

export default function Home(){
    return(
        <div>
        <Navbar />
            <div className="home-container">
                <div className="welcom-container">
                    {/* <img src={BGimage} /> */}
                    <p>lorem  ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla id leo tempus elementum. Mauris
                    Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit. Illo earum ipsa corrupti expedita explicabo repellendus laborum ullam distinctio alias culpa repudiandae odio ipsam accusamus, laudantium aliquid. Deserunt architecto unde esse?
                    lorem  ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla id leo tempus elementum. Mauris
                    Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit. Illo earum ipsa cor
                    </p>
                    
                </div>
                <div className="myLink">
                
                        <Link  to={'/dashboard'}> 
                           <button className="button-71" role="button">Let's go</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}