import React from "react";
import { Link } from "react-router-dom";
import "./visitor.css";

export default function Visitor() {
  const [handleScroll, setHandleScroll] = React.useState({
    scroll: window.scrollY,
  });


  React.useEffect(() => {


    const listener = () => {
      setHandleScroll({ scroll: window.scrollY });
    }


    window.addEventListener("scroll",listener );

    return () => {
      window.removeEventListener('scroll',listener);
    };
  }, [handleScroll.scroll]);


  const get_Catgeory_classes = () => {
    //console.log(handleScroll.scroll);
    // console.log(window.innerHeight , window.scrollY, document.body.offsetTop);
    if (handleScroll.scroll > 150) {
      return "categories_fixed";
    } else {
      return "categories";
    }
  };

  const get_categories_classes = () => {
    if (handleScroll.scroll > 150) {
      return "category_fixed";
    } else {
      return "category";
    }
  }

    const get_categories_inline_classes = () => {
    if (handleScroll.scroll > 150) {
      return "category_inline_fixed";
    } else {
      return "category_inline";
    }
}

const  get_categories_link_classes = () => {
    if (handleScroll.scroll > 150) {
        return "category_link_fixed";
    } else {
        return "category_link";
    }
}





  return (
    <div className="Container">
      <div className="visitor_container">
        <div className="title">
          <h1>Find the right talent, or job, for your business</h1>
        </div>
        <div className="visitor_search">
          <div className="visitor_search_inner">
            <div className="search_text_field">
              <input
                className="search_input"
                type="text"
                placeholder="Search for jobs or skills "
              />
            </div>
            <div className="search_buttons">
              <button className="search_button">Search</button>
            </div>
          </div>
        </div>

        <div className={get_Catgeory_classes()} >
          <div className={get_categories_classes()}>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>Development & It</Link>
            </div>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>Design & creative</Link>
            </div>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>Sales & Marketing</Link>
            </div>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>Writing & Translation</Link>
            </div>

            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>
                Admin & Customer Support
              </Link>
            </div>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>Finance & Accounting</Link>
            </div>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>
                Engineering & Architecture
              </Link>
            </div>
            <div className={get_categories_inline_classes()}>
              <Link to ="/" className={get_categories_link_classes()}>Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
