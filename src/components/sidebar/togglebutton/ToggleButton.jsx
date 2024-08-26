import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./togglebutton.scss";
function ToggleButton({ setOpen }) {
  const handelClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="hamburger">
      <GiHamburgerMenu onClick={handelClick} />
    </div>
  );
}

export default ToggleButton;
