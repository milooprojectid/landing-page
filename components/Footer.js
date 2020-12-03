import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 ">
            <img src="./logo-footer.svg" alt="" className="logo-footer" />
            <p className="address">
              Jalan Danau Laut Tawar No. A69 Bendungan Hilir, Tanah Abang
              Jakarta Pusat, DKI Jakarta, Indonesia (10210)
            </p>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 mb-5">
            <h4 className="title-footer">Keep touch with Milo in</h4>
            <div className="wrapper-social row">
              <div className="col-6 col-xl-4 col-lg-4">
                <div className="social-item">
                  <img src="./footer1.svg" alt="" />
                  <button className="social-btn">Milo Channel</button>
                </div>
              </div>
              <div className="col-6 col-xl-4 col-lg-4">
                <div className="social-item">
                  <img src="./footer2.svg" alt="" />
                  <button className="social-btn">Milo Hub</button>
                </div>
              </div>
              <div className="col-6 col-xl-4 col-lg-4">
                <div className="social-item">
                  <img src="./footer3.svg" alt="" />
                  <button className="social-btn">Kumparan News</button>
                </div>
              </div>
              <div className="col-6 col-xl-4 col-lg-4">
                <div className="social-item">
                  <img src="./footer4.svg" alt="" />
                  <button className="social-btn">Milo Spotify</button>
                </div>
              </div>
              <div className="col-6 col-xl-4 col-lg-4">
                <div className="social-item">
                  <img src="./footer5.svg" alt="" />
                  <button className="social-btn">Milo Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
