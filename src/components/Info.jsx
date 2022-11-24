import React from "react";
import "../styles/info.scss";
import servers from "../assets/servers.webp";

function Info() {
  return (
    <section className="info-section">
      <article>
        <h1>
          WE WANT TO SHAPE SUSTAINABLE CONSUMPTION, ATTITUDES AND BEHAVIOUR.
        </h1>
        <p>
          We want to shape sustainable consumption, attitudes and behaviour. In
          2025, we will only work for companies that contribute to a sustainable
          future and with projects that contribute to a sustainable present. We
          are all in this together.
          <br />
          By the way, you can use our CO2e calculator below to see how much CO2e
          your daily internet usage produce.
        </p>
      </article>
      <img src={servers}></img>
    </section>
  );
}

export default Info;
