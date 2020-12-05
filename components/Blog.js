import Carousel from "react-elastic-carousel";
import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

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
                      <Link href={item.guid}>
                        <a
                          className="card-title"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.title}
                        </a>
                      </Link>
                      <p className="card-desc">{toText(item.content)}</p>
                    </div>
                    <div className="card-author">
                      <div className="card-author-profile">
                        <h5 className="author">{item.author}</h5>
                      </div>
                      <Link href={item.guid} passHref>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="card-link"
                        >
                          See More...
                        </a>
                      </Link>
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
      <div className="show">
        <button type="button" className="button-show">
          Show More
        </button>
      </div>
    </section>
  );
}
