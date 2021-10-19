const DifficultyButtons = ({ changeLevel }) => {
  const changeColor = (e) => {
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.classList.remove("bg-yellow-400", "hover:bg-yellow-300");
    });
    e.target.classList.add("bg-yellow-400", "hover:bg-yellow-300");
  };
  return (
    <div>
      <h3>Chose your level</h3>
      <button
        className="btn mx-2 font-bold bg-white hover:bg-gray-100"
        onClick={(e) => {
          changeLevel("begginer");
          changeColor(e);
        }}
      >
        Begginer
      </button>
      <button
        className="btn mx-2 font-bold bg-white hover:bg-gray-100"
        onClick={(e) => {
          changeLevel("intermediate");
          changeColor(e);
        }}
      >
        intermediate
      </button>
      <button
        className="btn mx-2 font-bold bg-white hover:bg-gray-100 bg-yellow-400 hover:bg-yellow-300"
        onClick={(e) => {
          changeLevel("advanced");
          changeColor(e);
        }}
      >
        Advanced
      </button>
    </div>
  );
};

export default DifficultyButtons;
