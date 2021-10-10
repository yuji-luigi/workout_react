const StartWorkout = ({ setPlayVideo, playVideo }) => {
  return (
    <>
      <button
        onClick={() => setPlayVideo(!playVideo)}
        className="btn bg-white "
      >
        back
      </button>
    </>
  );
};

export default StartWorkout;
