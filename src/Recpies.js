import React from 'react'
import './Recpies.css'

function Recpies() {
    return (
        <div className="recpie">
            <div className="wrapper">
                <div className="card">
                    <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/eda-frukty-gody-klubnika-7658.jpg" alt="" />
                    <div className="info">
                        <h1>Heading</h1>
                        <p>This is the recpie</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="card">
                    <img src="https://images.wallpapersden.com/image/wxl-cake-dessert-cream_44800.jpg" alt="" />
                    <div className="info">
                        <h1>Heading</h1>
                        <p>This is the recpie</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="card">
                    <img src="https://images.wallpapersden.com/image/wxl-burger-cheddar-cheese_45312.jpg" alt="" />
                    <div className="info">
                        <h1>Heading</h1>
                        <p>This is the recpie</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recpies
