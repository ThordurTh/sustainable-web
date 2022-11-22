import React from "react";
import "../styles/inout.scss";
import { useState, useRef } from "react";

function Inout() {
  const [totalG, setTotalG] = useState(0);
  const [totalKM, setTotalKM] = useState(0);
  const theForm = useRef(null);

  async function submit(e) {
    e.preventDefault();
    let someValue = parseFloat(theForm.current.elements.some.value) * 120;
    let emailsValue = parseFloat(theForm.current.elements.emails.value) * 20;
    let browsingValue =
      parseFloat(theForm.current.elements.browsing.value) * 100;
    // console.log(someValue + emailsValue + browsingValue);
    setTotalG(someValue + emailsValue + browsingValue);
    setTotalKM(totalG / 125);
  }

  return (
    <>
      <form onSubmit={submit} ref={theForm}>
        <div className="inputs">
          <div>
            <label htmlFor="some">Social media hours per day</label>
            <input
              type="number"
              id="some"
              name="some"
              min="0"
              max="24"
              required
            />
          </div>
          <div>
            <label htmlFor="emails">Emails per day</label>
            <input type="number" id="emails" name="emails" />
          </div>
          <div>
            <label htmlFor="browsing">Browsing hours per day</label>
            <input
              type="number"
              id="browsing"
              name="browsing"
              min="0"
              max="24"
            />
          </div>
        </div>
        <button>check</button>
      </form>
      <div className="outputs">
        <p>
          With the ammount of CO2e emitted by your internet traffic you could
          have traveled from KEA to Kongens Nytov
        </p>
        <p className="outputGrams">
          {totalG}
          grams
        </p>
        <p className="outputKM">
          {totalKM}
          km
        </p>
      </div>
    </>
  );
}

export default Inout;
