
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh]">
      <iframe
        src="https://player.vimeo.com/video/1093368225?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
