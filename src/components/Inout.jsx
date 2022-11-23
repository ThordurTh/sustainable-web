import React from "react";
import "../styles/inout.scss";
import progress0 from "../assets/progress0.png";
import progress1 from "../assets/progress1.png";
import progress2 from "../assets/progress2.png";
import progress3 from "../assets/progress3.png";
import progress4 from "../assets/progress4.png";
import { useState, useRef, useEffect } from "react";

function Inout() {
  const [totalG, setTotalG] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const [destination, setDestination] = useState("");

  function submit(e) {
    e.preventDefault();
    let someValue = parseFloat(e.target.elements.some.value) * 120;
    let emailsValue = parseFloat(e.target.elements.emails.value) * 20;
    let browsingValue = parseFloat(e.target.elements.browsing.value) * 100;
    setTotalG(someValue + emailsValue + browsingValue);
  }

  useEffect(() => {
    if (totalG < 337.5 && totalG > 1) {
      setPercentage(Math.round((totalG / 337.5) * 100));
      setImageSrc(<img src={progress1}></img>);
      setDestination("Kongens Nytorv");
    } else if (totalG > 337.5 && totalG < 587.5) {
      setPercentage(Math.round((totalG / 587.5) * 100));
      setImageSrc(<img src={progress2}></img>);
      setDestination("Christianshavn");
    } else if (totalG > 587.5 && totalG < 1062) {
      setPercentage(Math.round((totalG / 1062) * 100));
      setImageSrc(<img src={progress3}></img>);
      setDestination("Amager Strand");
    } else if (totalG > 1062) {
      setPercentage(Math.round((totalG / 1412.5) * 100));
      setImageSrc(<img src={progress4}></img>);
      setDestination("Kastrup Lufthavn");
    } else {
      setImageSrc(<img src={progress0}></img>);
    }
  }, [totalG]);

  return (
    <section className="inout">
      <form onSubmit={submit}>
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
            <input type="number" id="emails" name="emails" required />
          </div>
          <div>
            <label htmlFor="browsing">Browsing hours per day</label>
            <input
              type="number"
              id="browsing"
              name="browsing"
              min="0"
              max="24"
              required
            />
          </div>
        </div>
        <button>check</button>
      </form>
      {/* <div className="outputs">
        <p className="outputGrams">{totalG}grams</p>
        <p className="outputKM">{totalG / 125}km</p>
      </div> */}

      <div className="progress-bar">{imageSrc}</div>
      <ul className="destinations">
        <li>KEA</li>
        <li>Kongens Nytorv</li>
        <li>Christianshavn</li>
        <li>Amager Strand</li>
        <li>Kastrup Lufthavn</li>
      </ul>
      <p className="output-p">
        Your internet traffic equals to <span>{totalG}g</span> of CO2e and could
        take you <span>{percentage}%</span> of the way from <span>KEA</span> to{" "}
        <span>{destination}</span> which spans <span>{totalG / 125}km</span> in
        an average sized car.
      </p>
    </section>
  );
}

export default Inout;
