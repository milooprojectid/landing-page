import React from "react";

// Icon
import { FaTelegramPlane, FaLine } from "react-icons/fa";
import { RiLineLine, RiMessengerLine } from "react-icons/ri";

export default function Product() {
  return (
    <section className="container product-section">
      <h2 className="title">Milo Product Research</h2>
      <div className="border" />
      <div className="wrapper-product">
        <div className="row align-items-center">
          <div className="col-6">
            <h3 className="title-item">
              Milo <span>Chatbot</span>
            </h3>
            <p className="desc-item">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when It is a long established fact
              that a reader will be distracted by the readable content of a page
              when{" "}
            </p>
            <p>Get Here</p>
            <div className="button-wrapper">
              <button className="btn-product">
                <FaTelegramPlane />
              </button>
              <button className="btn-product">
                <FaLine />
              </button>
              <button className="btn-product">
                <RiMessengerLine />
              </button>
            </div>
          </div>
          <div className="col-6">
            <img src="./product.png" alt="" className="img-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
