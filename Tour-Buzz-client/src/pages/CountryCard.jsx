import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CountryCard = ({ country }) => {
  const { photo, countryName, description } = country;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Link to={`/country/${countryName}`}>
        <div
          className="card card-compact  bg-base-100 border-2 border-[#3DB043]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <figure>
            <img
              style={{ height: "250px", width: "100%" }}
              src={photo}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {countryName} </h2>
            <p> Description:{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
