import React from 'react'
import Awan from '../../asset/gambar/dicovery/awan.png'

function OurPackage() {
  return (
    <>
    <div class="section-our-package">
        <div class="content1">
            <h2>Our Package</h2>
            <p>for our Customer</p>
        </div>
        <div class="content2">
            <div>
                <div class="card card1">
                    <p><span>LEVEL 1 / Basic</span></p>
                    <h4>RP. 100.000,-</h4>
                    <p>We will record incoming goods, record outgoing goods, record
                    profits</p>
                    <img class="awan1" src={Awan} alt=""/>
                    <img class="awan2" src={Awan} alt=""/>
                    <img class="awan3" src={Awan} alt=""/>
                    <img class="awan4" src={Awan} alt=""/>
                    <img class="awan5" src={Awan} alt=""/>
                </div>
            </div>
            <div>
                <div class="card card1">
                <p><span>LEVEL 2 / Business</span></p>
                    <h4>RP. 500.000,-</h4>
                    <p>Record incoming and outgoing goods, record profits, can
                    analyze sales results with CHART, 7x24 hour support</p>
                    <img class="awan1" src={Awan} alt=""/>
                    <img class="awan2" src={Awan} alt=""/>
                    <img class="awan3" src={Awan} alt=""/>
                    <img class="awan4" src={Awan} alt=""/>
                    <img class="awan5" src={Awan} alt=""/>
                </div>
            </div>
            <div>
                <div class="card card2">
                    <p>LEVEL 3 / Entrepreneur</p>
                    <h4><span>RP. 750.000,-</span></h4>
                    <p>With an open trip, you'll have the opportunity to connect with travelers from all over the world, creating lifelong friendships and unforgettable memories. </p>
                    <img class="awan1" src={Awan} alt=""/>
                    <img class="awan2" src={Awan} alt=""/>
                    <img class="awan3" src={Awan} alt=""/>
                    <img class="awan4" src={Awan} alt=""/>
                    <img class="awan5" src={Awan} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurPackage
