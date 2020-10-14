import React, { useState } from "react";

// React Slick
import Carousel from "react-elastic-carousel";

const paginationCustom = () => {
  return <div className="pagination" />;
};

export default function Background() {
  const [activeClass, setActiveClass] = useState(false);
  const [idCard, setIdCard] = useState(0);

  const handleShow = (id) => {
    setActiveClass(true);
    setIdCard(id);
  };
  const handleClose = () => {
    setActiveClass(false);
  };

  const sliderSetting = {
    dots: true,
    slideToShow: 1,
    slideToScroll: 2,
    inifite: true,
    arrows: false,
  };

  return (
    <section className="container background-content">
      <div className="title-bg">
        <h5>Problem</h5>
        <h2>Background</h2>
      </div>
      <div className="row justify-content-center">
        <div
          className={`${
            activeClass && idCard === 1
              ? "col-12 col-md-12 col-lg-12"
              : "col-10 col-md-4 col-lg-4 col-sm-8"
          } ${idCard != 1 && activeClass == true ? "hideCard" : "showCard"}`}
        >
          <div
            className={`card-background ${
              activeClass && idCard === 1 ? "active-card" : ""
            }`}
          >
            <h3 className="title-card-bg">Why</h3>
            <div className="border-bg" />
            {activeClass && idCard == 1 ? (
              <Carousel
                itemsToScroll={1}
                itemsToShow={1}
                enableAutoPlay
                showArrows={false}
              >
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
              </Carousel>
            ) : (
              <p>
                Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi, yakni
                masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                demografi 2030.
              </p>
            )}
            <button
              className="btn-bg"
              onClick={
                activeClass && idCard === 1
                  ? () => handleClose(0)
                  : () => handleShow(1)
              }
            >
              {activeClass && idCard === 1 ? "See Less" : "See More"}
            </button>
          </div>
        </div>
        <div
          className={`${
            activeClass && idCard === 2
              ? "col-12 col-md-12 col-lg-12"
              : "col-10 col-md-4 col-lg-4 col-sm-8"
          } ${idCard != 2 && activeClass == true ? "hideCard" : "showCard"}`}
        >
          <div
            className={`card-background ${
              activeClass && idCard === 2 ? "active-card" : ""
            }`}
          >
            <h3 className="title-card-bg">How</h3>
            <div className="border-bg" />
            {activeClass && idCard == 2 ? (
              <Carousel
                itemsToScroll={1}
                itemsToShow={1}
                enableAutoPlay
                showArrows={false}
              >
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
              </Carousel>
            ) : (
              <p>
                Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi, yakni
                masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                demografi 2030.
              </p>
            )}
            <button
              className="btn-bg"
              onClick={
                activeClass && idCard === 2
                  ? () => handleClose(0)
                  : () => handleShow(2)
              }
            >
              {activeClass && idCard === 2 ? "See Less" : "See More"}
            </button>
          </div>
        </div>
        <div
          className={`${
            activeClass && idCard === 3
              ? "col-12 col-md-12 col-lg-12"
              : "col-10 col-md-4 col-lg-4 col-sm-8"
          } ${idCard != 3 && activeClass == true ? "hideCard" : "showCard"}`}
        >
          <div
            className={`card-background ${
              activeClass && idCard === 3 ? "active-card" : ""
            }`}
          >
            <h3 className="title-card-bg">What</h3>
            <div className="border-bg" />
            {activeClass && idCard == 3 ? (
              <Carousel
                itemsToScroll={1}
                itemsToShow={1}
                enableAutoPlay
                showArrows={false}
              >
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
                <p>
                  Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi,
                  yakni masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                  demografi 2030.
                </p>
              </Carousel>
            ) : (
              <p>
                Indonesia sedang bersiap untuk hadapi 3 agenda distrupsi, yakni
                masuknya 5G, revolusi industri 4.0, hingga terjadi bonus
                demografi 2030.
              </p>
            )}
            <button
              className="btn-bg"
              onClick={
                activeClass && idCard === 3
                  ? () => handleClose(0)
                  : () => handleShow(3)
              }
            >
              {activeClass && idCard === 3 ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
