import { useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Inout from "./components/Inout";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Info />
        <Inout />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
