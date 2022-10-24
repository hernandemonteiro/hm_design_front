import { ArrowUpwardTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import {} from "./ButtonScroll.scss";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 15 ? setVisible(true) : scrolled <= 15 && setVisible(false);
  };
  window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {visible ? (
        <ArrowUpwardTwoTone
          className="scroll"
          sx={{ fontSize: "2.3rem", color: "green" }}
          onClick={scrollToTop}
        />
      ) : (
        ""
      )}
    </>
  );
}
