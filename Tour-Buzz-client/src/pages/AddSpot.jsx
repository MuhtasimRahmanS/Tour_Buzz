import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddSpot = () => {
  const [country, setCountry] = useState("");
  const { user } = useContext(AuthContext);

  const handleAddSpot = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const spotName = form.spotName.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const description = form.description.value;

    const newSpot = {
      photo,
      spotName,
      country,
      location,
      cost,
      season,
      time,
      visitor,
      email,
      userName,
      description,
    };

    console.log(newSpot);

    fetch("https://assignment-10-server-amber-sigma.vercel.app/allSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Spot Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="container mx-auto px-2 py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Spot-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-[#3DB043]">
        Add Tourists Spot
      </h2>
      <form className="space-y-4" onSubmit={handleAddSpot}>
        <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Spot Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="spotName"
                placeholder="Spot Name"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group">
              <select
                name="country"
                className="w-full input border-2 rounded-xl border-[#3DB043]"
                type="text"
                placeholder="Select Country"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Country">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="cost"
                placeholder="Average Cost"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="season"
                placeholder="Seasonality"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Travel Time"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Visitors per year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="visitor"
                placeholder="Visitors per year"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={user.email}
                type="text"
                name="email"
                placeholder="User Email"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={user.displayName}
                type="text"
                name="userName"
                placeholder="User Name"
                className="input border-2 rounded-xl border-[#3DB043] w-full"
              />
            </label>
          </div>
        </div>
        <div className="sm:space-y-4 md:space-y-0">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="input border-2 rounded-xl border-[#3DB043] w-full h-20"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Tourists Spot"
          className="btn btn-block bg-[#3DB043] text-xl text-white"
        />
      </form>
    </div>
  );
};

export default AddSpot;
