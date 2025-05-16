"use client";

import YouTube from "react-youtube";

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubeVideo({
  videoId,
  title = "WikiWorks コンセプト動画",
  className = "",
}: YouTubeVideoProps) {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div
      className={`aspect-video relative rounded-lg overflow-hidden ${className}`}
    >
      <YouTube
        videoId={videoId}
        opts={opts}
        title={title}
        className="absolute inset-0"
      />
    </div>
  );
}
