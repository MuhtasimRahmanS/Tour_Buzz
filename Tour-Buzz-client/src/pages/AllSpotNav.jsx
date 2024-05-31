import AllSpot from "./AllSpot";
import { Helmet } from "react-helmet";

const AllSpotNav = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Spot-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AllSpot></AllSpot>
    </div>
  );
};

export default AllSpotNav;
