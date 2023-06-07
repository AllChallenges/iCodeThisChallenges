import React from "react";
import Jellyfish from "/project/modalSideImg.jpeg";
import "./subscribeModal.css";
import Close from "../../../assets/icons/close";

const SubscribeModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  console.log("showModal", showModal);

  return (
    <div className="modal__main">
      <div
        className={`modal__gradient ${
          showModal ? "modal__gradient__show" : ""
        }`}
      ></div>
      <button
        className="btn modal__open-btn"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <section
        className={`modal__container ${
          showModal ? "show__modal__container" : ""
        }`}
      >
        {/* IMAGE SECTION */}
        <div className="modal__img">
          <img src={Jellyfish} alt="Jellyfish in Sea" />
        </div>

        {/* CONTENT SECTION */}
        <div className={`modal__content`}>
          {/* CONTENT HEADER */}
          <h3 className="modal__heading">
            {" "}
            Ideas and UI components in your inbox{" "}
          </h3>
          <p className="modal__text">
            Sign up to receive ideas, free components, and free resources plus
            15% off on all of our pro UI kits.
          </p>
          {/* SUBSCRIBE FORM */}
          <form className="modal__form">
            <input
              type="text"
              className="modal__input"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="btn modal__submit-btn"
              placeholder="Email Address"
            >
              <div className="loading"></div>
              Subscribe
            </button>
            <p className="modal__no-spam">
              <small> No Spams included </small>
            </p>
          </form>
        </div>

        {/* CLOSE BUTTON */}
        <div className="modal__close-btn" onClick={() => setShowModal(false)}>
          <Close size={{ width: 18, height: 18 }} />
        </div>
      </section>
    </div>
  );
};

export default SubscribeModal;
