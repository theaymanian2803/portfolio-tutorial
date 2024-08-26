import React from "react";
import "./contact.scss";
import Button from "../button/Button";
function Contact() {
  return (
    <div className="contact">
      <div className="top">
        <h1>let's discuss your future project</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          provident aliquid cupiditate accusantium? Blanditiis, itaque?
        </p>
      </div>
      <div className="bottom">
        <form>
          <div>
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="phone number" />
          </div>
          <div>
            <input type="email" placeholder="your email" />
            <input type="text" placeholder="budget " />
          </div>
          <textarea style={{ width: "700px", height: "200px" }} />

          <Button text="submit message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
