import Carousel from "react-elastic-carousel";
import React from "react";

export default function Event() {
  return (
    <section className="container event-section">
      <h3 className="title">Event Routine Mountly</h3>
      <div className="border" />
      <div className="card-event-section">
        <div className="card-event">
          <Carousel itemsToScroll={1} itemsToShow={1} enableAutoPlay>
            <div className="item-carousel">
              <h2 className="title-item">#DataTalks vol.1</h2>
              <p className="desc-event">How data improve e-commerce business</p>
              <div className="img-collapse-event">
                <p>Speaker from</p>
                <img src="./bukalapak.png" alt="logo bukalapak" />
              </div>
            </div>
            <div className="item-carousel">
              <h2 className="title-item">#DataTalks vol.1</h2>
              <p className="desc-event">How data improve e-commerce business</p>
              <div className="img-collapse-event">
                <p>Speaker from</p>
                <img src="./bukalapak.png" alt="logo bukalapak" />
              </div>
            </div>
            <div className="item-carousel">
              <h2 className="title-item">#DataTalks vol.1</h2>
              <p className="desc-event">How data improve e-commerce business</p>
              <div className="img-collapse-event">
                <p>Speaker from</p>
                <img src="./bukalapak.png" alt="logo bukalapak" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
