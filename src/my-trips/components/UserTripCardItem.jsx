import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserTripCardItem = ({ trip }) => {
  const [photoURL, setPhotoURL] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery:trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[1].photos[1].name);
      const Url =PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[1].photos[1].name
      );
      setPhotoURL(Url);
    });
  };

  // useEffect(() => {
  //   trip&&GetPlacePhoto();
  // }, [trip]);
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all hover:shadow-md ">
        <img
          className="object-cover rounded-xl mx-auto w-80 h-64 border-purple-500 animated-border"
          src={photoURL}
        />
        <h2 className="font-bold text-lg text-white">
          {trip?.userChoice?.location?.label}
        </h2>
        <h2 className="text-sm text-white">
          {trip?.userChoice?.noOfDays} days trip with "
          {trip?.userChoice?.budget}" budget.
        </h2>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
