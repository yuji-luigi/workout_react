const BackButton = ({ clickEvent }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={() => clickEvent()}
        className="btn absolute  right-5 bg-gray-200 hover:bg-gray-100 "
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
