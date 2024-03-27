import Avatar from "./components/Avatar";
function App() {
  const bart = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
  };
  const homer = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Bart",
    lastName: "Simpson",
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

      <Avatar
        img={homer.image}
        firstName={homer.firstName}
        lastName={homer.lastName}
      />
      <Avatar
        img={marge.image}
        firstName={marge.firstName}
        lastName={marge.lastName}
      />
      <Avatar
        img={lisa.image}
        firstName={lisa.firstName}
        lastName={lisa.lastName}
      />

      <Avatar
        img={bart.image}
        firstName={bart.firstName}
        lastName={bart.lastName}
      />
      <Avatar
        img={maggie.image}
        firstName={maggie.firstName}
        lastName={maggie.lastName}
      />
    </>
  );
}

export default App;
