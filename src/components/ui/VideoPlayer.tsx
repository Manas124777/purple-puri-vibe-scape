
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh]">
      <video
        src="/your-video-name.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
