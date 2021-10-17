import { useRef, useEffect } from "react";
const Clip = ({ video }) => {
  const videoRef = useRef();
  const previousUrl = useRef(video);

  useEffect(() => {
    if (previousUrl === video) {
      return;
    }
    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = video;
  });

  return (
    <div className="h-screen-70" onScroll={() => console.log("scrooooll")}>
      <iframe
        className="h-screen-70 mx-auto"
        src={`${video}`}
        title="chinup"
      ></iframe>
    </div>
  );
};

export default Clip;
