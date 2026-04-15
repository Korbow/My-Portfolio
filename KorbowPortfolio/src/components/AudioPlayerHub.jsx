import { useEffect, useRef, useState } from "react";

export default function AudioPlayerHub({
  track,
  autoPlay = false
}) {
  const iframeRef = useRef(null);
  const iframeYoutubeRef = useRef(null);
  const iframeSpotifyRef = useRef(null);
  const [player, setPlayer] = useState(null);

  // Init SoundCloud widget
  useEffect(() => {
    if (!iframeRef.current || !window.SC) return;

    const widget = window.SC.Widget(iframeRef.current);
    widget.bind(window.SC.Widget.Events.READY, () => {
      setPlayer(widget);
      if (autoPlay) widget.play();
    });

    return () => widget.unbind(window.SC.Widget.Events.READY);
  }, []);

  // Change track
  useEffect(() => {
    if (!player || !track?.trackId) return;
  
    player.load(track.trackId, {
      auto_play: false, // on s'en fout
    });
  
    player.bind(window.SC.Widget.Events.READY, () => {
      if (autoPlay) {
        player.play();
      }
    });
  }, [player, track?.trackId, autoPlay]);

  const getYoutubeId = (url) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  const getSpotifyId = (url) => {
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="audio-player-hub">
      
      {/* SoundCloud */}
      <div className="soundcloud-player">
      <h6>Soundcload :</h6>
        <div className="containerLink">
          <iframe
            ref={iframeRef}
            width="100%"

            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${track.trackId}`}
          />
        </div>
      </div>

      {/* Autres plateformes */}
      <div className="youtube-player">
        <h6>Youtube :</h6>
        <div className="containerLink">
          <iframe
            ref={iframeYoutubeRef}
            width="100%"
            height="100%"
            allow="autoplay"
            src={`https://www.youtube.com/embed/${getYoutubeId(track.youtubeLink)}`}
          />
        </div>
        
      </div>
      <div className="spotify-player">
        <h6>Spotify :</h6>
        <div className="containerLink">
          <iframe
            ref={iframeSpotifyRef}
            width="100%"
            height="100%"
            allow="autoplay"
            src={`https://open.spotify.com/embed/track/${getSpotifyId(track.spotifyLink)}`}
          />
        </div>

      </div>
    </div>
  );
}