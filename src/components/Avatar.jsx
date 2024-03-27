function Avatar({ img, firstName, lastName }) {
  return (
    <>
      <img src={img} alt={firstName} />
      <p>
        {firstName} {lastName}
      </p>
    </>
  );
}

export default Avatar;
