import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
  const [allCountry, setAllCountry] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-amber-sigma.vercel.app/allCountry")
      .then((res) => res.json())
      .then((data) => {
        setAllCountry(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-2 py-10">
      <h2 className="text-3xl font-bold text-center text-[#3DB043]">
        All Country
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {allCountry.map((country) => (
          <CountryCard key={country._id} country={country}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Country;
