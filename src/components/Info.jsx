import React from "react";
import "../styles/info.scss";
import servers from "../assets/servers.webp";

function Info() {
  return (
    <section className="info-section">
      <article>
        <h1>Sustainability?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          reprehenderit, pariatur, deserunt quaerat magnam harum ex illo labore
          et iure neque minima laboriosam earum distinctio praesentium facilis
          dignissimos suscipit sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum reprehenderit, pariatur, deserunt quaerat
          magnam harum ex illo labore et iure neque minima.
        </p>
      </article>
      <img src={servers}></img>
    </section>
  );
}

export default Info;
