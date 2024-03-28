import { useState } from "react";

function Avatar({ img, firstName, lastName }) {
  const [donuts, setDonuts] = useState(0);
  return (
    <>
      <img src={img} alt={firstName} />
      {/*
				<img src="https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png" 
				alt="Simpson Bart" />

				*/}
      <p>
        {firstName} {lastName}
      </p>
      <div>
        <button onClick={() => setDonuts(donuts + 1)}>🍩 {donuts}</button>
      </div>
    </>
  );
}

export default Avatar;
