import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
      
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="uivideo">
        <iframe src={videoSrc} allowFullScreen title="Video player" frameBorder="0" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p></p>
      </div>
    </div>
  );
};



export default VideoDetail;
