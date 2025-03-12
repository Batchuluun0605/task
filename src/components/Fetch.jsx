import React, { useEffect, useState } from "react";
import Error from "./Error";

const Fetch = () => {
  const [image, setImage] = useState(null);
  const [click, setClick] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/"
        );
        const data = response.json(); // Parse the response as JSON
        setImage(data.message); // Set the image using the URL from the 'message' key
      } catch (error) {
        throw new Error("error fetching data");
        setError(error.message);
      }
    };

    fetchData();
  }, [click]); // Fetch when `click` changes

  console.log(image);

  const handleButton = () => {
    setClick(!click);
  };

  //   if (error) {
  //     return <Error />;
  //   }
  return (
    <div>
      <img src={image} alt="" />
      <button onClick={() => handleButton()}>
        Click the button to change the image.{" "}
      </button>
    </div>
  );
};

export default Fetch;
