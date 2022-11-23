// import React from "react";
// import "../styles/inout.scss";
// import { useState, useRef } from "react";

// function Inout() {
//   const [totalG, setTotalG] = useState(0);
//   const [totalKM, setTotalKM] = useState(0);
//   const theForm = useRef(null);

//   function submit(e) {
//     e.preventDefault();
//     let someValue = parseFloat(theForm.current.elements.some.value) * 120;
//     let emailsValue = parseFloat(theForm.current.elements.emails.value) * 20;
//     let browsingValue =
//       parseFloat(theForm.current.elements.browsing.value) * 100;

//     setTotalG(someValue + emailsValue + browsingValue);
//     setTotalKM(totalG / 125);

//     console.log(totalG);
//     console.log(totalKM);

// let svgItem = (
//     <svg
//       width="1430"
//       height="50"
//       viewBox="0 0 1430 50"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <line y1="26" x2="1428" y2="26" stroke="#2B9776" strokeWidth="10" />
//       <circle cx="25" cy="25" r="25" fill="#2B9776" />
//       <circle cx="715" cy="25" r="25" fill="#2B9776" />
//       <circle cx="370" cy="25" r="25" fill="#2B9776" />
//       <circle cx="1060" cy="25" r="25" fill="#2B9776" />
//       <circle cx="1405" cy="25" r="25" fill="#2B9776" />
//     </svg>
//   );
//   let destination;

//   if (totalG < 337 && totalG > 1) {
//         destination = "Kongens Nytorv";
//         // setPercentage(Math.round((totalKM / 337) * 10000) + "%");
//         // setPercentage("test1");
//         // console.log(percentage);
//       } else if (totalG > 337.5 && totalG < 587.5) {

//         destination = "Christianshavn";
//       } else if (totalG > 587.5 && totalG < 1062) {
//         destination = "Amager Strand";
//       } else if (totalG > 1062 && totalG < 1412.5) {
//         destination = "Kastrup Lufthavn";
//       }
//     }

//     let percentage = 0 + "%";

//   }
//   return (
//     <section className="inout">
//       <form onSubmit={submit} ref={theForm}>
//         <div className="inputs">
//           <div>
//             <label htmlFor="some">Social media hours per day</label>
//             <input
//               type="number"
//               id="some"
//               name="some"
//               min="0"
//               max="24"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="emails">Emails per day</label>
//             <input type="number" id="emails" name="emails" />
//           </div>
//           <div>
//             <label htmlFor="browsing">Browsing hours per day</label>
//             <input
//               type="number"
//               id="browsing"
//               name="browsing"
//               min="0"
//               max="24"
//             />
//           </div>
//         </div>
//         <button>check</button>
//       </form>
//       <div className="outputs">
//         <p className="outputGrams">
//           {totalG}
//           grams
//         </p>
//         <p className="outputKM">
//           {totalKM}
//           km
//         </p>
//       </div>
//       <div className="progress-bar"></div>
//       <ul className="destinations">
//         <li>KEA</li>
//         <li>Kongens Nytorv</li>
//         <li>Christianshavn</li>
//         <li>Amager Strand</li>
//         <li>Kastrup Lufthavn</li>
//       </ul>
//       <p className="output-p">
//         Your internet traffic equals to <span>{totalG}g</span> of CO2e and could
//         take you of the way from <span>KEA</span> to which spans{" "}
//         <span>{totalKM}km</span> in an average sized car.
//       </p>
//     </section>
//   );
// }

// export default Inout;
