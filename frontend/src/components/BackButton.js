const BackButton = () => {
  return (
    <div className="flex justify-end">
      <button
        onClick={() => window.history.back()}
        className="btn absolute top-15 right-5 bg-green-200 hover:bg-green-100 "
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
