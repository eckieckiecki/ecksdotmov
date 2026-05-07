import ReactDOM from 'react-dom/client';
import { useLocation } from 'react-router-dom';
import Taskbar from './components/Taskbar';

import '@react95/core/themes/tokyoDark.css';
import { useState, useEffect, useRef} from 'react';
import WinBox from './components/winbox/winbox.min.jsx'

import images from './assets/images.js';
import backgrounds from './assets/backgrounds.js';

import AboutMe from './components/windows/AboutMe.tsx';
import Videos from './components/windows/Videos.tsx';
import Gallery from './components/windows/Gallery.tsx';
import Music from './components/windows/Music.tsx';
import Contact from './components/windows/Contact.tsx';
import Donate from './components/windows/Donate.tsx';
import Credits from './components/windows/Credits.tsx';
import NotFound from './components/NotFound';

import { videos, openVideoWinBox } from './components/windows/Videos';

let imageArr = [backgrounds.background1, backgrounds.background2, backgrounds.background3, backgrounds.background4, backgrounds.background5, backgrounds.background6];
let randomNum = Math.floor(imageArr.length * Math.random());
let randomImage = imageArr[randomNum];
import BootUp from './components/BootUp.jsx';


const App = () => {
  
  useEffect(() => {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  return () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };
}, []);

  const [crtEnabled, setCrtEnabled] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => setDarkMode((prev) => !prev)
  useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode')} 
    else {document.body.classList.remove('dark-mode')}

  document.querySelectorAll('.winbox').forEach(winbox => {
    if (darkMode) {
      winbox.classList.add('dark-mode')
    } else {
      winbox.classList.remove('dark-mode')
    }})}, [darkMode])

  const toggleCRT = () => {
  setCrtEnabled(prev => {
    const next = !prev;
    if (next) {document.body.classList.add('crt')} 
    else {document.body.classList.remove('crt')} 
    return next })}

  const lastWindowOpenTime = useRef(0);
  
  const canOpenWindow = () => {
    const now = Date.now();
    if (now - lastWindowOpenTime.current >= 400) {
      lastWindowOpenTime.current = now;
      return true;
    }
    return false;
  }


  const [showPreLoader, setShowPreLoader] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [open, TaskbarOpen] = useState(false);

  const startBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!open) return;

  function handleClickOutside(event: MouseEvent) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      startBtnRef.current &&
      !startBtnRef.current.contains(event.target as Node)
    ) {
      TaskbarOpen(false)
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [open])

const WindowPosition = (windowType: 'about' | 'gallery' | 'videos' | 'contact' | 'donate' | 'credits') => {
  if (window.innerWidth < 768) {
    return "center";
  }
  const positions = {
    about: "10%",
    gallery: "50%",
    videos: "25%",
    contact: "30%",
    donate: "50%",
    credits: "50%"
  }
  return positions[windowType]}

const titleTimeoutRef = useRef<number | null>(null);

const setTemporaryTitle = (newTitle: string, revertTitle = "[3cks.net]") => {
  document.title = newTitle;
  if (titleTimeoutRef.current) window.clearTimeout(titleTimeoutRef.current);
  titleTimeoutRef.current = window.setTimeout(() => {
    document.title = revertTitle;
  }, 11111);
};

useEffect(() => {
  return () => {
    if (titleTimeoutRef.current) window.clearTimeout(titleTimeoutRef.current);
  };
}, []);

const location = useLocation();
const hashPath = location.pathname;
const normalizedPath = hashPath.replace(/\/+$/, '') || '/';
const isWatchRoute = /^\/watch\/[^/]+$/i.test(normalizedPath);
const knownRoutes = new Set(['/', '/donate', '/videos', '/gallery', '/music', '/blog', '/about', '/contact']);
const showNotFound = !isWatchRoute && !knownRoutes.has(normalizedPath);


useEffect(() => {
  if (showNotFound) {
    setShowPreLoader(false)
    setShowWelcome(false)
    return
  }

  setShowPreLoader(true);
  setLoadProgress(0)
  setShowWelcome(false);
  document.body.classList.add('crt');

  let cancelled = false;
  let fadeTimer: number | null = null;

  const assets = [
    ...Object.values(images),
    ...Object.values(backgrounds),
  ] as string[];

  const total = assets.length || 1;
  let loaded = 0;

  const preloadImages = (srcs: string[]) =>
    Promise.all(
      srcs.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            const onDone = () => {
              if (!cancelled) {
                loaded++;
                setLoadProgress(Math.round((loaded / total) * 100));
              }
              resolve();
            };
            img.onload = onDone;
            img.onerror = onDone;
            img.src = src;
          })
      )
    );

  const assetsPromise = preloadImages(assets);
  const minDelayPromise = new Promise<void>((resolve) => setTimeout(resolve, 1500));

  Promise.all([assetsPromise, minDelayPromise]).then(() => {
    if (cancelled) return;


    fadeTimer = window.setTimeout(() => {
      if (cancelled) return;

    setShowPreLoader(false);

    const match = hashPath.match(/^\/watch\/([^/]+)$/i);
    if (match) {
      const slug = match[1].toLowerCase();
      const videoToOpen = videos.find(
        (v) =>
          v.window_title.replace(/[^a-z0-9]/gi, '').toLowerCase() ===
          slug.replace(/[^a-z0-9]/gi, '')
      );
      if (videoToOpen) {
        openVideoWinBox(videoToOpen);
        return;
      }
    }

    switch (hashPath) {
      case '/donate':
        openDonateWindow();
        break;
      case '/videos':
        openVideoWindow();
        break;
      case '/gallery':
        openGalleryWindow();
        break;
      case '/music':
        openMusicWindow();
        break;
      case '/blog':
        setShowWelcome(true);
        break;
      default:
        setShowWelcome(true);
        break;
    }
    }, 222);
  });

  return () => {
    cancelled = true;
    if (fadeTimer) window.clearTimeout(fadeTimer);
  };
}, [hashPath, showNotFound]);

  useEffect(() => {
    if (showWelcome) {
      const WelcomeContainer = document.createElement('div');
      new WinBox({
              title: "~X/WHATS_NEW",
              icon: images.info,
              background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
              width: "375px",
              height: "400px",
              x: "center",
              y: "center", 
              url: "https://eckis-chronicle.neocities.org", // eckis-chronicle.neocities.org
              setBackground: (color: string) => console.log(`Background set to ${color}`),
              onClose: () => {
                console.log('Window closed');
                WelcomeContainer.remove(); 
        },
            });
      setShowWelcome(false); 
    }
  }, [showWelcome]);

  useEffect(() => {
  const tiltEl = document.getElementById('background-tilt');
  if (!tiltEl) return;
  const maxTilt = 9; 
  const perspective = 444;
  const scale = 1.33; 
  let rafId: number | null = null;
  const updateTransform = (x: number, y: number) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      tiltEl.style.transform = `translate(-50%, -50%) perspective(${perspective}px) scale(${scale}) rotateY(${x}deg) rotateX(${y}deg)`;
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    let rx = (e.clientX / innerWidth - 0.77) * maxTilt * 2;
    let ry = (e.clientY / innerHeight - 0.77) * maxTilt * 2;

    rx = Math.max(-maxTilt, Math.min(maxTilt, rx));
    ry = Math.max(-maxTilt, Math.min(maxTilt, ry));

    updateTransform(-rx, ry * 0.9);
  };


  window.addEventListener('mousemove', handleMouseMove);
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    tiltEl.style.transform = 'translate(-50%, -50%)';
  };
}, [randomImage]);

const [bgDims, setBgDims] = useState({ width: '222vw', height: '222vh' });

useEffect(() => {
  function updateBgDims() {
    const tiltAngle = 15; 
    const radians = (tiltAngle * Math.PI) / 180;
    const extra = Math.tan(radians) * Math.max(window.innerWidth, window.innerHeight);
    setBgDims({
      width: `${window.innerWidth + extra * 2.22}px`,
      height: `${window.innerHeight + extra * 2.22}px`,
    })
  }
  updateBgDims();
  window.addEventListener('resize', updateBgDims);
  return () => window.removeEventListener('resize', updateBgDims);
}, [])

  const openCreditsWindow = () => {
    if (!canOpenWindow()) return;
    setTemporaryTitle("[3cks.net] - CREDITS!");
    const CreditsContainer = document.createElement('div');
    if (darkMode) {
      CreditsContainer.classList.add('dark-mode');
    }
    const winbox =new WinBox({
      title: "~X/CREDITS.TXT",
      icon: images.notepad,
      background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
      border: "0.3em",
      width: "255px",
      maxWidth: "20%",
      height: "360px",
      maxHeight: "25%",
      x: WindowPosition('credits'),
      y: "45%",
      mount: CreditsContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      })

      if (darkMode) {
  winbox.window.classList.add('dark-mode')}
  const CreditsRoot = ReactDOM.createRoot(CreditsContainer); 
  CreditsRoot.render(<Credits />)}

  const openDonateWindow = () => {
  if (!canOpenWindow()) return;
  setTemporaryTitle("[3cks.net] - DONATE!");

  const container = document.createElement("div");
  if (darkMode) container.classList.add("dark-mode");

  const root = ReactDOM.createRoot(container); // create once
  let cleaned = false;

  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    root.unmount(); // unmount same root
    container.remove();
    document.title = "[3cks.net]";
  };
    const winbox = new WinBox({
    title: "~X/DONATE/",
    icon: images.desktop_donate,
    background: "linear-gradient(180deg,rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgb(40,40,40) 100%)",
    border: "0.3em",
    width: Math.min(325, window.innerWidth * 0.8) + "px",
    height: Math.min(230, window.innerHeight * 0.7) + "px",
    x: WindowPosition("donate"),
    y: "45%",
    mount: container,
    setBackground: (color: string) => console.log(`Background set to ${color}`),
    onClose: cleanup
  });

  if (darkMode) winbox.window.classList.add("dark-mode");
  root.render(<Donate />);
};

  const openAboutMeWindow = () => {
    if (!canOpenWindow()) return;
    setTemporaryTitle("[3cks.net] - ABOUT!");
    const aboutMeContainer = document.createElement('div');
    if (darkMode) {
      aboutMeContainer.classList.add('dark-mode');
    }
    const winbox = new WinBox({
      title: "~X/SYSINFO/",
      className: "no-resize",
      icon: images.desktop_about,
      background: "linear-gradient(180deg,rgba(40, 40, 40, 1) 1%, rgba(66, 66, 66, 1) 4%, rgba(44, 44, 44, 1) 7%, rgba(66, 66, 66, 1) 10%, rgba(44, 44, 44, 1) 14%, rgba(0, 0, 0, 1) 100%)",
      border: "0.3em",
      width: Math.min(440, window.innerWidth * 0.8) + "px", 
      maxWidth: "440px",
      height: Math.min(333, window.innerHeight * 0.7) + "px",
      maxHeight: "444px",
      x: WindowPosition('about'),
      y: "10%",
      mount: aboutMeContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      noResize: true,
      onClose: () => {
      console.log("Window closed");
      document.title = "[3cks.net]";
      const root = ReactDOM.createRoot(aboutMeContainer);
      root.unmount(); 
      aboutMeContainer.remove(); 
    },
      });
      if (darkMode) {
    winbox.window.classList.add('dark-mode');
  }
  const aboutMeRoot = ReactDOM.createRoot(aboutMeContainer); 
  aboutMeRoot.render(<AboutMe />);
    }; 

    const openVideoWindow = () => {
      if (!canOpenWindow()) return;
      setTemporaryTitle("[3cks.net] - VIDEOS!");
      const VideoContainer = document.createElement('div');
      if (darkMode) {
        VideoContainer.classList.add('dark-mode');
      }
      if (crtEnabled) {
    VideoContainer.classList.add('crt');
  }
      const winbox = new WinBox({
        title: "~X/VIDEOS/",
        icon: images.desktop_videos,
        background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
        border: "0.3em",
        width: Math.min(650, window.innerWidth * 0.8) + "px",
        maxWidth: "800px",
        height: Math.min(475, window.innerHeight * 0.7) + "px",
        maxHeight: "550px",
        x: WindowPosition('videos'),
        y: "8%",
      mount: VideoContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      onClose: () => {
        console.log("Window closed");
        document.title = "[3cks.net]";
        const root = ReactDOM.createRoot(VideoContainer);
        root.unmount();
        VideoContainer.remove(); 
      },
      });
      if (darkMode) {
    winbox.window.classList.add('dark-mode');
  }
  const videosRoot = ReactDOM.createRoot(VideoContainer); 
  videosRoot.render(<Videos />);
    };

    const openContactWindow = () => {
      if (!canOpenWindow()) return;
      setTemporaryTitle("[3cks.net] - CONTACT!");
      const ContactContainer = document.createElement('div');
      if (darkMode) {
        ContactContainer.classList.add('dark-mode');
      }
      const winbox = new WinBox({
        title: "~X/HIT_MY_LINE/",
        icon: images.desktop_contact,
        background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
        border: "0.3em",
        width: Math.min(325, window.innerWidth * 0.8) + "px",
        maxWidth: "600px",
        height: Math.min(280, window.innerHeight * 0.7) + "px",
        maxHeight: "400px",
        x: WindowPosition('contact'),
        y: "30%",
      mount: ContactContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      onClose: () => {
        console.log("Window closed")
        document.title = "[3cks.net]"
        const root = ReactDOM.createRoot(ContactContainer)
        root.unmount()
        ContactContainer.remove()
      },
      })
      if (darkMode) {
    winbox.window.classList.add('dark-mode')
  }
  const contactRoot = ReactDOM.createRoot(ContactContainer) 
  contactRoot.render(<Contact />)
    }

  const openGalleryWindow = () => {
    if (!canOpenWindow()) return
    setTemporaryTitle("[3cks.net] - GALLERY!")
    const GalleryContainer = document.createElement('div')
    if (darkMode) {
      GalleryContainer.classList.add('dark-mode')
    }
    const winbox = new WinBox({
      title: "~X/GALLERY/",
      icon: images.desktop_gallery,
      background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
      border: "0.3em",
      width: Math.min(490, window.innerWidth * 0.8) + "px",
      maxWidth: "800px",
      height: Math.min(580, window.innerHeight * 0.7) + "px",
      maxHeight: "650px",
      x: WindowPosition('gallery'),
      y: "30%",
      mount: GalleryContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      onClose: () => {
        console.log("Window closed")
        document.title = "[3cks.net]"
        const root = ReactDOM.createRoot(GalleryContainer)
        root.unmount()
        GalleryContainer.remove()
      },
    })
    if (darkMode) {
    winbox.window.classList.add('dark-mode')
  }
const GalleryRoot = ReactDOM.createRoot(GalleryContainer)
GalleryRoot.render(<Gallery />)
  }

const openMusicWindow = () => {
    if (!canOpenWindow()) return
    setTemporaryTitle("[3cks.net] - MUSIC!")
    const MusicContainer = document.createElement('div')
    if (darkMode) {
      MusicContainer.classList.add('dark-mode')
    }
    const winbox = new WinBox({
      title: "~X/MUSIC/",
      icon: images.desktop_gallery,
      background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
      border: "0.3em",
      width: Math.min(650, window.innerWidth * 0.8) + "px",
      maxWidth: "675px",
      height: Math.min(375, window.innerHeight * 0.7) + "px",
      maxHeight: "400px",
      x: WindowPosition('gallery'),
      y: "30%",
      mount: MusicContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      onClose: () => {
        console.log("Window closed")
        document.title = "[3cks.net]"
        const root = ReactDOM.createRoot(MusicContainer)
        root.unmount()
        MusicContainer.remove()
      },
    })
    if (darkMode) {
    winbox.window.classList.add('dark-mode')
  }
const MusicRoot = ReactDOM.createRoot(MusicContainer) 
MusicRoot.render(<Music />)
  }
 useEffect(() => {
    Object.values(images).forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
useEffect(() => {
  const onResize = () => setIsMobile(window.innerWidth < 600);
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}, []);

  if (showNotFound) {
    return <NotFound path={hashPath} />
  }

  return (
    <>

{showPreLoader && (
<BootUp progress={loadProgress}/>)}

<div className="App">
  <div className="crt" style={{ opacity: crtEnabled ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.3s ease' }} />
  <div id="desktop">
  
  <label htmlFor={'about-me'} className="desktop-item" onClick={openAboutMeWindow}>
            <a href="#/about/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_about_gif} className="logo" alt="ABOUT" />
            <div className="desktop-text">ABOUT</div>
            </a>
          </label>

  <label htmlFor={'videos'} className="desktop-item" onClick={openVideoWindow}>
            <a href="#/videos/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_videos_gif} className="logo" alt="VIDEOS" />
            <div className="desktop-text">VIDEOS</div>
            </a>
          </label>


  <label htmlFor={'gallery'} className="desktop-item" onClick={openGalleryWindow}>
            <a href="#/gallery/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_gallery_gif} className="logo" alt="GALLERY" />
            <div className="desktop-text">GALLERY</div>
            </a>
          </label>

    <label htmlFor={'contact'} className="desktop-item" onClick={openContactWindow}>
            <a href="#/contact/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_contact_gif} className="logo" alt="CONTACT" />
            <div className="desktop-text">CONTACT</div>
            </a>
          </label>
          
    <label htmlFor={'donate'} className="desktop-item" style={{ position: 'relative', zIndex: 2 }} onClick={openDonateWindow}>
            <a href="#/donate/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_donate_gif} className="logo" alt="DONATE" />
            <div className="desktop-text">DONATE</div>
            </a>
          </label>
          
    </div>
</div> 
      <div className="taskbar">
      <Taskbar
        isMobile={isMobile}
        darkMode={darkMode}
        crtEnabled={crtEnabled}
        toggleDarkMode={toggleDarkMode}
        toggleCRT={toggleCRT}
        openVideoWindow={openVideoWindow}
        openGalleryWindow={openGalleryWindow}
        openAboutMeWindow={openAboutMeWindow}
        openContactWindow={openContactWindow}
        openDonateWindow={openDonateWindow}
        openCreditsWindow={openCreditsWindow}
        showWelcome={showWelcome}
        setShowWelcome={setShowWelcome}
      />
      </div>
      <div
  id="background-tilt"
  style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: bgDims.width,
    height: bgDims.height,
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
    pointerEvents: 'none',
    backgroundImage: `url(${randomImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.2s cubic-bezier(.4,2,.6,1)',
    willChange: 'transform',
    overflow: 'hidden',
  }}

></div></>)}

export default App;