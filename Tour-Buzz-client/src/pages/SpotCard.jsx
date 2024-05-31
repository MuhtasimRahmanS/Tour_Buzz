import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpotCard = ({ spot }) => {
  const { photo, spotName, cost, season, time, visitor, _id } = spot;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div>
        <div className="card card-compact  bg-base-100 border-2 border-[#3DB043]">
          <figure>
            <img
              style={{ height: "250px", width: "100%" }}
              src={photo}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {spotName} </h2>
            <p> Avarage cost:{cost}$</p>
            <p>Visitor per year: {visitor}</p>
            <p>Travel time: {time}</p>
            <p>Seasonality: {season}</p>
            <div className="card-actions justify-end">
              <Link to={`/allSpot/${_id}`}>
                <button className="btn bg-[#3DB043] text-white">
                  View Spot
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
