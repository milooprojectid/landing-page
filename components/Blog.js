import Carousel from "react-elastic-carousel";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

// Icons
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export default function Blog({ data }) {
  const [show, setShow] = useState(false);
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

  const handleShow = () => {
    setShow(!show);
  };
  // console.log(data);
  return (
    <section className={`container blog-section ${show && "show-list"}`}>
      <h3 className="title">Article</h3>
      <div className="border" />
      {data.length != 0 ? (
        <>
          <div className="blog-list">
            <div className="row justify-content-center">
              {data.map((item, i) => {
                return (
                  <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex">
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
              })}
            </div>
          </div>
          <div className="show">
            <button type="button" className="button-show" onClick={handleShow}>
              {show ? (
                <>
                  Show less
                  <IoMdArrowDropup />
                </>
              ) : (
                <>
                  Show more
                  <IoMdArrowDropdown />
                </>
              )}
            </button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
}
