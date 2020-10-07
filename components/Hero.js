import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 col-lg-4">
              <Fade left>
                <div className="hero-content">
                  <h2>Miloo Project</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <Link href="/">
                        <p className="btn btn-hero btn-hero-primary">Contact</p>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link href="/">
                        <p className="btn btn-hero btn-hero-secondary">
                          Product
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
      <Fade right>
        <div className="bg-hero">
          <img src="/hero-image.png" alt="" />
        </div>
      </Fade>
      <Fade left>
        <img src="/bg-left.png" alt="" className="bg-left" />
      </Fade>
    </>
  );
}
