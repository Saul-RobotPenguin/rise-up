import Map from "../Map";
import { useEffect, useState } from "react";

export default function Health({ lat, lng }) {
  const locations = [
    {
      name: "Weill Cornell Community Clinic",
      phoneNumber: "646.962.9222",
      lat: 40.7655863,
      lon: -73.9544244,
    },
    {
      name: "Mount Sinai Adolescent Health Care Clinic",
      phoneNumber: "212.423.3000",
      lat: 40.7824428,
      lon: -73.9471152,
    },
    {
      name: "East Harlem Health Outreach Program – Mount Sinai",
      phoneNumber: "626.942.6519",
      lat: 40.7914277,
      lon: -73.9520017,
    },
    {
      name: "Columbia Student Medical Outreach",
      phoneNumber: "212.342.4719",
      LOCATION: "21 Audubon Avenue",
      lat: 40.8394515,
      lon: -73.9389417,
    },
    {
      name: "Columbia-Harlem Homeless Medical Partnership",
      phoneNumber: "347.614.2121",
      LOCATION: "St. Mary’s Episcopal Church",
      lat: 40.8149431,
      lon: -73.9562415,
    },
    {
      name: "St. Anthony’s Free Clinic",
      phoneNumber: "718.401.9705",
      LOCATION: "421 East 155th Street",
      lat: 40.8201414,
      lon: -73.914991,
    },
    {
      name: "ECHO Free Clinic",
      phoneNumber: "800.836.1316",
      LOCATION: "1894 Walton Ave",
      lat: 40.8496738,
      lon: -73.909001,
    },
    {
      name: "Al Hirschfeld Free Health Clinic (exclusively for people in the entertainment industry)",
      phoneNumber: "212.489.1939",
      LOCATION: "475 West 57th Street",
      lat: 40.7691681,
      lon: -73.9882442,
    },
  ];

  return (
    <>
      <div>Health Locations</div>
      <Map lat={lat} lng={lng} locations={locations} />
    </>
  );
}
