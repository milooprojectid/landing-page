import React from "react";

export default function About() {
  return (
    <section className="container about">
      <div className="row justify-content-center">
        <div className="col-5">
          <img src="/about.png" alt="" />
        </div>
        <div className="col-5">
          <div className="about-konten">
            <div className="title-about">
              <h5>About Us</h5>
              <h2>Who We Are</h2>
              <p>Miloo project</p>
            </div>
            <p>
              MILOO adalah sebuah platform pemenuhan skill anak muda. Concern
              kami ada pada kesiapan sumber daya manusia (SDM). Mimpi kami untuk
              mewujudkan ekosistem kolaboratif pada peningkatan skill hustler,
              hacker, ataupun hipster dalam kerangka data science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
