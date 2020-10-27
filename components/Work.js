import React, { useState } from "react";
import Data from "../db.json";
import { Modal } from "antd";
export default function Work() {
  const [modal, setModal] = useState(false);
  const [kontenModal, setKontenModal] = useState("");
  const [title, setTitle] = useState("");

  const handleDesc = (id, idBtn) => {
    let filterData = Data.background.filter((item) => item.id == id);
    let newDesc = filterData[0].item.filter((item) => item.id == idBtn);
    setKontenModal(newDesc[0].desc);
    setTitle(newDesc[0].name);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <section className="work-section container">
      <h2 className="title-work">
        How Do <span>We Work</span>
      </h2>
      <div className="border-work" />
      {Data.background.map((item, i) => {
        return (
          <div
            className="row align-items-center"
            style={{ marginTop: "3.5rem" }}
          >
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
                      onClick={() => handleDesc(item.id, btnItem.id)}
                    >
                      {btnItem.name}
                    </button>
                  );
                })}
                <Modal
                  visible={modal}
                  onCancel={handleClose}
                  centered
                  footer={null}
                  className="modal-style"
                >
                  <h3>{title}</h3>
                  <hr style={{ borderWidth: "0.2rem" }} />
                  <p>{kontenModal}</p>
                </Modal>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
