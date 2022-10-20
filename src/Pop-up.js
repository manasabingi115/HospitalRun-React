import React from "react";
import { MdCancel } from "react-icons/md";

export default function PopUp({ popUp, setPopUp, popUpContent }) {
  // const [popUp, setPopUp] = React.useState(false);
  // const [popUpContent, setPopUpContent] = React.useState();

  return (
    // <div className="pop-up-parent-div">
    <div
      className={popUp ? "pop-up-container pop-up-slide" : "pop-up-container"}
    >
      <div className="success-div">
        <p>
          <strong>Success!</strong>
        </p>
        <MdCancel onClick={() => setPopUp(false)} />
      </div>
      <p>
        Successfully <span>{popUpContent}.</span>
      </p>
    </div>
    //   <button name="test" onClick={() => handleButton("test")}>
    //     Test
    //   </button>
    // </div>
  );
}
