import React from "react";
import "../styles/inout.scss";
import { useState } from "react";

function Inout() {
  const [soMe, setSoMe] = useState(0);
  const [emails, setEmails] = useState(0);
  const [browsing, setBrowsing] = useState(0);

  const someHours = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    setSoMe(e.target.value);
    // console.log(`soMe is: ${soMe}`);
  };

  const emailCount = (e) => {
    setEmails(e.target.value);
  };

  const browsingHours = (e) => {
    setBrowsing(e.target.value);
  };

  const gramsCalculated =
    parseFloat(soMe) * 120 +
    parseFloat(emails) * 20 +
    parseFloat(browsing) * 100;

  const kmCalculated = gramsCalculated / 123;

  return (
    <>
      <form>
        <div className="inputs">
          <div>
            <label for="some">Social media hours per day</label>
            <input onKeyUp={someHours} type="text" id="some" name="some" />
          </div>
          <div>
            <label for="emails">Emails per day</label>
            <input onKeyUp={emailCount} type="text" id="emails" name="emails" />
          </div>
          <div>
            <label for="browsing">Browsing hours per day</label>
            <input
              onKeyUp={browsingHours}
              type="text"
              id="browsing"
              name="browsing"
            />
          </div>
        </div>
      </form>
      <div className="outputs">
        <p className="outputGrams">{gramsCalculated}grams</p>
        <p className="outputKM">{kmCalculated.toFixed(2)} km</p>
      </div>
    </>
  );
}

export default Inout;
