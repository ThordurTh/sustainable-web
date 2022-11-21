const options = {
  method: "GET",
  headers: {
    apikey: "API",
    Authorization: "Bearer Author",
  },
};

fetch("https://gnwgtmtpdixkokkyuotu.supabase.co/rest/v1/table-test", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function Cards() {
  const cardData = [
    {
      image: "src/assets/strategy.png",
      heading: "strategy",
      par: 'Looking to create a blockchain product? We help with your "Go-To-Market" strategy',
    },
    {
      image: marketin,
      heading: "marketing",
      par: "such greatness",
    },
    {
      image: { product },
      heading: "product",
      par: "such greatness",
    },
    {
      image: { legality },
      heading: "legality",
      par: "such greatness",
    },
    {
      image: { safety },
      heading: "safety",
      par: "such greatness",
    },
    {
      image: { protection },
      heading: "protection",
      par: "such greatness",
    },
  ];
  console.log(cardData);

  const cardList = cardData.map((item) => (
    <article>
      <Card
        className="card"
        image={item.image}
        heading={item.heading}
        par={item.par}
      />
    </article>
  ));

  return <>{cardList}</>;
}

function Card(props) {
  //   console.log(JSON.stringify(props.image));
  return (
    <>
      <img src={props.image} alt={props.image} />
      <h2>{props.heading}</h2>
      <p>{props.par}</p>
    </>
  );
}

export default Cards;
