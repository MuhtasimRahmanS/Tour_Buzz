//import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { useEffect, useState } from "react";

const AllSpot = () => {
  //const allSpot = useLoaderData();
  const [allSpot, setAllSpot] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-amber-sigma.vercel.app/allSpot")
      .then((res) => res.json())
      .then((data) => {
        setAllSpot(data);
      });
  }, []);
  const [sort, setSort] = useState([]);

  const handleSort = (sortSpot) => {
    if (sortSpot === "cost") {
      const cost = [...allSpot].sort((a, b) => b.cost - a.cost);
      setSort(cost);
    } else if (sortSpot === "cost2") {
      const cost2 = [...allSpot].sort((a, b) => a.cost - b.cost);
      setSort(cost2);
    }
  };
  useEffect(() => {
    setSort(allSpot);
  }, [allSpot]);
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className="container mx-auto px-2 py-10">
      <h2 className="text-3xl font-bold text-center text-[#3DB043]">
        All Tourists Spot
      </h2>

      <div className="text-center my-5">
        <details className="dropdown ">
          <summary className="m-1 btn px-6 py-2 bg-[#23BE0A] text-white text-lg font-semibold">
            Sort By ⌄{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleSort("cost")}>
              <a>Cost High--Low</a>
            </li>
            <li onClick={() => handleSort("cost2")}>
              <a>Cost Low--High</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {sort.slice(0, showAll ? sort.length : 6).map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
      <div className="text-center">
        {sort.length > 6 && !showAll && (
          <button
            onClick={handleShowAll}
            className="btn bg-[#23BE0A] text-white my-5"
          >
            {" "}
            Show All Spot
          </button>
        )}
      </div>
    </div>
  );
};

export default AllSpot;
