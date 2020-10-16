import React, { useState } from "react";
import Data from "../db.json";

export default function Work() {
  const [desc, setDesc] = useState("masih kosong");

  // const handleDesc = (id, idBtn) => {
  //   let filterData = Data.background.filter((item) => item.id == id);
  //   let newDesc = filterData.filter((item) => item.id == idBtn);
  //   console.log(newDesc);
  // };
  return (
    <section className="work-section container">
      <h2 className="title-work">
        How Do <span>We Work</span>
      </h2>
      <div className="border-work" />
      {Data.background.map((item, i) => {
        return (
          <div className="row" style={{ marginTop: "3.5rem" }}>
            <div className="col-6">
              <div className="img-wrapper">
                <img src={item.image} alt={item.name} className="img-work" />
              </div>
            </div>
            <div className="col-6">
              <div className="work-meta-wrapper">
                <h4 className="work-title-item">
                  The <span>{item.name}</span>
                </h4>
                {item.item.map((btnItem) => {
                  return (
                    <button
                      className="btn-work"
                      key={`btn-${btnItem.id}`}
                      // onClick={() => handleDesc(item.id, btnItem.id)}
                    >
                      {btnItem.name}
                    </button>
                  );
                })}

                <div className="work-card-item">
                  <p>{item.item[0].desc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
