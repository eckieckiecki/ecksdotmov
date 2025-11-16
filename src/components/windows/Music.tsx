import './Music.css';
import { useState, useEffect } from 'react';

const musicFiles = [
  {
    title: "track1.mp3",
    artist: "Artist A",
    src: "/music/track1.mp3",
    cover: "/covers/track1.jpg"
  },
  {
    title: "track2.mp3",
    artist: "Artist B",
    src: "/music/track2.mp3",
    cover: "/covers/track2.jpg"
  }

];

const Music = () => {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1111);
    return () => clearTimeout(timer);
  }, []);

  return (
    showSplash ? (
      <div className={`aboutme-splash${!showSplash ? ' splash-fade-out' : ''}`}>
        <h2 style={{ color: '#fff', fontFamily: 'Pixeloid Sans', letterSpacing: 2 }}>ABOUT ME</h2>
      </div>
    ) : (
      <div
        style={{
          background: "linear-gradient(135deg, #181818 0%, #232323 100%)",
          minHeight: "100vh",
          color: "#fdfdfd",
          fontFamily: "Sans Nouveaux, Arial, sans-serif",
          padding: "32px",
          boxSizing: "border-box"
        }}
      >
        <h1 style={{ fontSize: 32, marginBottom: 24, fontWeight: "bold", letterSpacing: 2 }}>
          Music
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px"
          }}
        >
          {musicFiles.map((track, idx) => (
            <div
              key={idx}
              style={{
                background: "#222",
                borderRadius: 12,
                boxShadow: "0 2px 16px rgba(0,0,0,0.6)",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.2s",
              }}
            >
              <img
                src={track.cover}
                alt={track.title}
                style={{
                  width: 120,
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 16,
                  boxShadow: "0 0 8px #000"
                }}
              />
              <div style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
                {track.title}
              </div>
              <div style={{ fontSize: 14, color: "#aaa", marginBottom: 12 }}>
                {track.artist}
              </div>
              <audio controls style={{ width: "100%" }}>
                <source src={track.src} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Music;