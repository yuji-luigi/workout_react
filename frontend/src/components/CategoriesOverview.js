import { Link } from "react-router-dom";

const CategoriesOverview = ({ category }) => {
  const playIframeVideo = (e) => {
    console.log(e);
  };

  return (
    <div className=" relative w-72 h-52 m-3 flex-none text-center px-3 cursor-pointer snap-center">
      <Link to={`/routines/categories`}>
        <div
          className="w-72 h-52 m-auto rounded-lg shadow-md bg-white bg-opacity-0 hover:shadow-xl transition-shadow duration-300 ease-in-out
        "
        >
          {category.image ? (
            <video
              className="w-72 h-52 absolute"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.load()}
            >
              <source
                className="w-72 h-52 absolute"
                src={`${category.image}`}
              />
            </video>
          ) : (
            <iframe
              onMouseEnter={(e) => playIframeVideo(e)}
              // onMouseLeave={(e) => e.target.loadVideo()}
              className="w-72 h-52 absolute"
              src={`
              ${category.iframeLink}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <div className="absolute">
            <h1 className="font-bold text-white pb-3">{category.type}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesOverview;
