import App, { useState } from "react";

function Avatar({ img, firstName, lastName, donuts }) {
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
        <button onClick={() => setDonuts}>🍩 {donuts}</button>
      </div>
    </>
  );
}

export default Avatar;
