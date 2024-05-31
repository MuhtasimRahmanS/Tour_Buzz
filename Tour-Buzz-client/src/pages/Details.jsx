import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-server-amber-sigma.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-[#3DB043]">
        Tourists Spot details
      </h2>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col container  mx-auto overflow-hidden rounded">
          <img
            src={item.photo}
            alt=""
            className="w-full h-70 sm:h-96 dark:bg-gray-500"
          />

          <div className="p-6 pb-12 m-4 mx-auto  space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 text-[#3DB043]">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {item.spotName}
              </a>
              <p className="text-xs dark:text-gray-600">{item.location}</p>
            </div>
            <div className="flex gap-5">
              <p>
                <span className="font-medium">Country:</span> {item.country}
              </p>
              <p>
                <span className="font-medium">Cost:</span> {item.cost}$
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Visitor per year:</span>{" "}
                {item.visitor}
              </p>
            </div>
            <div className="lg:flex gap-5">
              <p>
                <span className="font-medium">Time:</span> {item.time}
              </p>
              <p>
                <span className="font-medium">Seasonality:</span> {item.season}
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Description</p>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
