import React from "react";
import "../styles/header.scss";
import "../assets/advice.svg";
import "../assets/menu.svg";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-auto menu-svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            width="106"
            className=" h-4 md:h-8 w-auto advice-logo"
            height="24"
            viewBox="0 0 106 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="M100.628 7.27454L103.524 0H105.388L95.8515 23.9827H94.3702H94.3535H93.9874C88.162 23.8 84.5836 19.6811 84.5836 14.2667C84.5836 8.80252 88.4284 4.61717 94.004 4.61717C96.6171 4.61717 98.6809 5.48082 100.262 6.90915C100.395 7.02541 100.512 7.14167 100.628 7.27454ZM58.4184 4.00298H64.1605V0.033536H58.4184V4.00298ZM31.9714 23.4511H37.4639V0.531329H31.7218V7.4903H31.6219C30.5567 5.97893 29.1253 4.91598 26.5788 4.91598C21.9352 4.91598 18.6897 8.81899 18.6897 14.4327C18.6897 20.445 21.9685 23.9992 26.5788 23.9992C28.9423 23.9992 30.8064 22.8698 31.9049 21.0096H31.9714V23.4511ZM12.1832 23.452H17.7423V23.2029C17.2429 22.8873 17.1098 22.0735 17.1098 20.6286V11.5603C17.1098 9.31814 16.3775 7.55764 14.813 6.42826C13.5147 5.44836 11.6839 4.9501 8.97099 4.9501C3.51184 4.9501 0.948695 7.79016 0.798901 11.1285H6.07498C6.25806 9.6171 7.17347 8.80328 9.00428 8.80328C10.7352 8.80328 11.4676 9.58388 11.4676 10.7299C11.4676 11.9589 10.2692 12.3077 6.89052 12.7395C3.16232 13.2544 0 14.4502 0 18.4196C0 21.9738 2.56314 23.9004 6.1582 23.9004C8.87113 23.9004 10.4523 22.9537 11.5175 21.4424H11.5841C11.7339 22.3558 11.9003 23.07 12.1832 23.452ZM11.6176 17.0243C11.6176 18.9509 10.1363 20.263 7.98925 20.263C6.57453 20.263 5.52597 19.6983 5.52597 18.2533C5.52597 16.8914 6.44138 16.3267 8.655 15.8285C9.82007 15.5461 10.8686 15.2638 11.6176 14.8818V17.0243ZM28.0605 19.4818C30.4572 19.4818 31.8719 17.4057 31.8719 14.4494C31.8719 11.4266 30.6403 9.25093 28.127 9.25093C25.8302 9.25093 24.4987 11.3602 24.4987 14.383C24.4987 17.522 25.8468 19.4818 28.0605 19.4818ZM57.2206 5.58044L50.9959 23.4512H44.8044L38.563 5.58044H44.4715L46.9514 13.5858C47.4674 15.3795 47.9334 17.2064 47.9334 17.2064H48C48 17.2064 48.4494 15.3795 48.982 13.5858L51.4785 5.58044H57.2206ZM64.1605 23.4512H58.4184V5.58044H64.1605V23.4512ZM71.3859 14.4834C71.3859 11.2115 72.6176 9.16867 75.0809 9.16867C76.6953 9.16867 77.6939 10.2316 78.0434 11.8426H83.5692C83.0366 7.80677 79.9075 4.9501 75.0143 4.9501C69.3055 4.9501 65.5773 9.06902 65.5773 14.4668C65.5773 19.8646 69.3388 24.0001 75.1641 24.0001C80.2737 24.0001 83.5858 20.7614 83.719 16.6259H78.2265C77.9769 18.6687 76.895 19.7151 75.0975 19.7151C72.6176 19.7317 71.3859 17.6888 71.3859 14.4834ZM95.7326 19.5977L97.2305 15.811H90.3233C90.6729 18.2857 92.0377 19.8136 94.4344 19.8136C94.917 19.8136 95.3498 19.7306 95.7326 19.5977ZM97.5812 12.3397H90.3411C90.7406 10.164 91.8724 8.76887 94.1026 8.76887C96 8.76887 97.3648 10.164 97.5812 12.3397Z"
              ></path>
            </g>
            <defs></defs>
          </svg>
        </li>
        <li>
          <a href="#">CONTACT/</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
