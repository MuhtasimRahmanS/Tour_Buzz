import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});
  const {
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
  } = spot;
  useEffect(() => {
    fetch(`https://assignment-10-server-amber-sigma.vercel.app/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
      });
  }, [id]);

  const handleUpdateSpot = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const spotName = form.spotName.value;
    const location = form.location.value;
    const country = form.country.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const description = form.description.value;

    const updatedSpot = {
      photo,
      spotName,
      location,
      country,
      cost,
      season,
      time,
      visitor,
      email,
      userName,
      description,
    };

    console.log(updatedSpot);

    // send data to the server
    fetch(`https://assignment-10-server-amber-sigma.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="container mx-auto px-2 py-10">
      <h2 className="text-3xl font-bold text-center text-[#3DB043]">
        Update Tourists Spot
      </h2>
      <form className="space-y-4" onSubmit={handleUpdateSpot}>
        <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
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
                defaultValue={spotName}
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
                defaultValue={country}
                placeholder="Select Country"
              >
                <option value={country}>{country}</option>
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
                defaultValue={location}
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
                defaultValue={cost}
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
                defaultValue={season}
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
                defaultValue={time}
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
                defaultValue={visitor}
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
                defaultValue={email}
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
                defaultValue={userName}
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
                defaultValue={description}
                placeholder="Short description"
                className="input border-2 rounded-xl border-[#3DB043] w-full h-20"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Tourists Spot"
          className="btn btn-block bg-[#3DB043] text-xl text-white"
        />
      </form>
    </div>
  );
};

export default Update;
