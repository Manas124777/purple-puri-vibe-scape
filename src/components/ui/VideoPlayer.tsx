
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh]">
      {/* Placeholder for video - Google Drive links need to be converted to direct URLs */}
      <div className="w-full h-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Scene Sariba Video</h3>
          <p className="text-gray-300">Video will be embedded here</p>
          {/* You can replace this with direct video URL or YouTube embed */}
        </div>
      </div>
      
      {/* Uncomment and update this when you have a direct video URL */}
      {/*
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="YOUR_DIRECT_VIDEO_URL_HERE" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}
    </div>
  );
};

export default VideoPlayer;
