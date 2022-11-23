import { useState, useEffect } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Inout from "./components/Inout";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnY2Nyc3N4dWFxeHdra3FjbWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwMjA3MTQsImV4cCI6MTk4NDU5NjcxNH0.1d9wxPg6teUojO0pFro7IoydT0JMkvzBof_NHPtjjC8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnY2Nyc3N4dWFxeHdra3FjbWdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2OTAyMDcxNCwiZXhwIjoxOTg0NTk2NzE0fQ.DWK1fM8IdVhlMCdkBzmIKQtG-96-XN3n8hARZgGipbo",
      },
    };
    async function getData() {
      const res = await fetch(
        "https://rgccrssxuaqxwkkqcmgr.supabase.co/rest/v1/news",
        options
      );
      const data = await res.json();
      setNews(data);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Info />
        <Inout />
        <News news={news} />
      </main>
      <Footer />
    </>
  );
}

export default App;
