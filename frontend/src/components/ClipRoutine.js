import React from "react";

const ClipRoutine = ({ video }) => {
  return (
    <>
      {/* <div className="h-screen-70" onScroll={() => console.log("scrooooll")}> */}
      {/* <video
          ref={videoRef}
          className="mx-auto h-screen-70"
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
        >
          <source className="" src={video} />
        </video>
      </div> */}
      <div className="h-screen-70" onScroll={() => console.log("scrooooll")}>
        <iframe
          className="h-screen-70 mx-auto"
          src={`${video}`}
          title="chinup"
        ></iframe>
      </div>
    </>
  );
};

export default ClipRoutine;
