import React from "react";
import image from "../asset/gambar/undraw_creation_re_d1mi.svg";
import Groupimg1 from "../asset/gambar/dicovery/Group 10.png";
import Groupimg2 from "../asset/gambar/dicovery/Group 10 (1).png";
import OurPackage from "../components/OurPackage/OurPackage";
import Footer from "../components/Footer/Footer";

function about() {
  return (
    <>
      {/* section top start */}
      <div class="section-top" style={{ marginTop: "120px" }}>
        <div class="container">
          <div class="content1">
            <div class="content-left">
              <h1>JURNAL.ID</h1>
              <p>
                It is an ERP startup to make it easier for entrepreneurs to
                record every item that comes in and out and record every profit
                they make every day. This startup also provides a TIER System,
                where customers can buy their products per category/Level
              </p>
              <button>
                Find out who we are <i class="fa-regular fa-circle-right"></i>
              </button>
            </div>
            <div class="content-right right-content">
              <div class="border bodir">
                <img src={image} width="400px" height="450px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section top end */}

      {/* our value start */}
      <div class="our-value">
        <div class="container">
          <div class="content1">
            <div class="content-left">
              <h1>
                <span>About Our value</span> <br />
                for our Customer
              </h1>
              <p>
                We offer a wide range of services and have many choices of TIER
                System / level.
              </p>
            </div>
            <div class="content-right">
              <div class="col1">
                <div class="card">
                  <p>
                    <span>
                      <i class="fa-solid fa-heart"></i> TIER 1/BASIC
                    </span>
                  </p>
                  <p style={{fontSize:'medium'}}>
                    We will record incoming goods, record outgoing goods, record
                    profits
                  </p>
                </div>
              </div>
              <div class="col2">
                <div class="card">
                  <p>
                    <span>
                      <img src={Groupimg1} alt="" /> TIER 2/Business
                    </span>
                  </p>
                  <p style={{fontSize:'small'}}>
                    Record incoming and outgoing goods, record profits, can
                    analyze sales results with CHART, 7x24 hour support
                  </p>
                </div>
                <div class="card">
                  <p>
                    <span>
                      <img src={Groupimg2} alt="" /> TIER 3/Entrepreneur
                    </span>
                  </p>
                  <p style={{fontSize:'small'}}>
                    Record incoming and outgoing goods, record profits, can
                    analyze sales results with CHART, 7x24 hour support, export
                    data to Excel, AI income prediction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our value end */}

      {/* our package start */}
      <div style={{ marginBottom: "135px" }}>
        <OurPackage />
      </div>
      {/* our package end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
}

export default about;
