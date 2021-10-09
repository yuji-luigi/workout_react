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
    <video
      ref={videoRef}
      className="mx-auto w-2/4 h-2/4"
      onMouseEnter={(e) => e.target.play()}
      onMouseLeave={(e) => e.target.load()}
    >
      <source className="" src={video} />
    </video>
  );
};

export default Clip;
