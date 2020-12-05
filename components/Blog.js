import Carousel from "react-elastic-carousel";
import React, { useEffect } from "react";
import ReactHtmlParser, { htmlparser2 } from "react-html-parser";

export default function Blog({ data }) {
  const toText = (node) => {
    if (process.browser) {
      let tag = document.createElement("div");
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    }
    // console.log(document);
  };

  const shortText = (text, startingPoint, maxLength) => {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  };

  const transform = (node) => {
    if (node.type === "div" && node.name === "img") {
      return null;
    }
  };
  // console.log(data);
  return (
    <section className="container blog-section">
      <h3 className="title">Article</h3>
      <div className="border" />
      <div className="blog-list">
        <div className="row">
          {data.length != 0 ? (
            data.map((item, i) => {
              return (
                <div className="col-4">
                  <div className="card-blog" key={`card-${i}`}>
                    <div className="card-meta">
                      <div className="img-wrapper">
                        <img
                          src={item.thumbnail}
                          alt={`image ${item.title}`}
                          className="img-cover"
                        />
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{toText(item.content)}</p>
                    </div>
                    <div className="card-author">
                      <h5 className="author">{item.author}</h5>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </section>
  );
}
