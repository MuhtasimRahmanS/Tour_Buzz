import About from "./About";
import AllSpot from "./AllSpot";
import Banner from "./Banner";
import Contact from "./Contact";
import Country from "./Country";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <AllSpot></AllSpot>
      <Country></Country>
      <About></About>

      <Contact></Contact>
    </div>
  );
};

export default Home;
