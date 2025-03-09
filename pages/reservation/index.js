import Header from "@/components/modules/Header/Header";
import ReservationDetails from "@/components/templates/Reservation/ReservationDetails";
import React from "react";

function Reservation() {
  return (
    <>
      <Header route="Reservation" />
      <ReservationDetails />
    </>
  );
}

export default Reservation;
