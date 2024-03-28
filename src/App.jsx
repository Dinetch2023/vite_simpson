import Avatar from "./components/Avatar";
function App() {
  const bart = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
    donuts: "0",
  };
  const homer = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Bart",
    lastName: "Simpson",
    donuts: "42",
  };
  const marge = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",

    firstName: "Marge",
    lastName: "Simpson",
  };
  const lisa = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    firstName: "Lisa",
    lastName: "Simpson",
  };
  const maggie = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
    firstName: "Maggie",
    lastName: "Simpson",
  };

  return (
    <>
      <h1>La Famille Simpson</h1>

      {personnages.map((personnage, index) => (
        <Avatar
          key={index}
          img={personnage.image}
          firstName={personnage.firstName}
          lastName={personnage.lastName}
          donuts={personnage.donuts}
        />
      ))}
    </>
  );
}

export default App;
