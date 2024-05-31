import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto my-20 text-center space-y-4 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-center">
        <h2 className="text-[#3DB043] font-bold text-3xl">Your Profile</h2>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
      </div>
      <div className="justify-center flex">
        <img src={user.photoURL} width={200} height={200} alt="" />
      </div>
      <div>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
