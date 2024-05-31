import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotCard from "./SpotCard";
import { Helmet } from "react-helmet";

const CountrySpot = () => {
  const { country } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-10-server-amber-sigma.vercel.app/allCountry/${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [country]);
  const name = item.map((obj) => obj.country);
  return (
    <div className="container mx-auto px-2 py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Country-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-[#3DB043]">
        Tourists Spot Of {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {item.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default CountrySpot;
