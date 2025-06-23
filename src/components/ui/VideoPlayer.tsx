import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="0623.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default VideoPlayer;
