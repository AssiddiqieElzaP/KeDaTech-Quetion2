import React from 'react'
import Vector1img from '../../asset/gambar/Vector.png'
import Vector2img from '../../asset/gambar/Vector-1.png'
import Vector3img from '../../asset/gambar/Vector-2.png'
import LogoP from '../../asset/gambar/LogoPutih.png'

function Footer() {
  return (
    <>
    <footer>
        <div class="container-footer">
            <div class="content1">
                <div class="item1">
                    <h4>Menu</h4>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
                <div class="item2">
                    <h4>TIER / LEVEL</h4>
                    <p>Basic</p>
                    <p>Business</p>
                    <p>Entrepreneur</p>
                </div>
                <div class="item3">
                    <h4>ABOUT US</h4>
                    <p>Need Help</p>
                    <p>Business Inquiry</p>
                    <p> Who we are</p>
                </div>
            </div>
            <div class="content2">
                <div class="content-left">
                    <img src={LogoP} alt=""/>
                    <p>Jakarta, Indonesia</p>
                </div>
                <div class="content-right">
                    <ul>
                        <li><a href="#"><img src={Vector1img} alt=""/></a></li>
                        <li><a href="#"><img src={Vector2img} alt=""/></a></li>
                        <li><a href="#"><img src={Vector3img} alt=""/></a></li>
                    </ul>
                    <p>Copyright © 2023 Jurnal.ID Indonesia</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
