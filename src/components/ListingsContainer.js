import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ input }) {
  const baseURL = "http://localhost:6001/listings";

  const [listings, setListings] = useState([]);

  const getListings = () => {
    fetch(baseURL)
      .then(r => r.json())
      .then(listData => setListings(listData))
  }
  useEffect(() => {
    getListings();
  }, [])

  function handleDelete(itemID) {
    fetch(baseURL + `/${itemID}`, { method: "DELETE" })
      .then(r => r.json())
      .then(() => {
        getListings();
      })
  }

  const filteredListings = listings.filter(listing =>
    listing.description.toLowerCase().includes(input.toLowerCase()));

  const list = filteredListings.map(listing =>
    <ListingCard
      key={listing.id}
      description={listing.description}
      id={listing.id}
      image={listing.image}
      location={listing.location}
      handleDelete={handleDelete}
    ></ListingCard>
  )

  return (
    <main>
      <ul className="cards">
        {list}
      </ul>
    </main>
  );
}

export default ListingsContainer;
