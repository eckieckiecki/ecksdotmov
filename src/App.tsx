import ReactDOM from 'react-dom/client';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider} from 'styled-components';

import { AppBar, Toolbar, Button } from 'react95';
import logoIMG from './assets/redfloppy.png';
import powerIMG from './assets/power.png';
import original from 'react95/dist/themes/vistaesqueMidnight';

import { MenuList, MenuListItem, Separator, styleReset, Frame, Handle } from 'react95';
import '@react95/core/themes/tokyoDark.css';
import { useState, useEffect, useRef } from 'react';
import WinBox from './components/winbox/winbox.min.jsx'
import PreLoader from './components/BootUp.jsx';

import images from './assets/images.js';
import backgrounds from './assets/backgrounds.js';

import AboutMe from './components/windows/AboutMe.tsx';
import Videos from './components/windows/Videos.tsx';
import Gallery from './components/windows/Gallery.tsx';
import Music from './components/windows/Music.tsx';
import Contact from './components/windows/Contact.tsx';
import Donate from './components/windows/Donate.tsx';
import Credits from './components/windows/Credits.tsx';

import { videos, openVideoWinBox } from './components/windows/Videos';

let imageArr = [backgrounds.background1, backgrounds.background2, backgrounds.background3, backgrounds.background4, backgrounds.background5, backgrounds.background6];
let randomNum = Math.floor(imageArr.length * Math.random());
let randomImage = imageArr[randomNum];
console.log(randomImage);

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;





const App = () => {
  
  const [crtEnabled, setCrtEnabled] = useState(true)

  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => setDarkMode((prev) => !prev)
  useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }

  document.querySelectorAll('.winbox').forEach(winbox => {
    if (darkMode) {
      winbox.classList.add('dark-mode');
    } else {
      winbox.classList.remove('dark-mode');
    }
  });
}, [darkMode]);

  const toggleCRT = () => {
  setCrtEnabled(prev => {
    const next = !prev;
    if (next) {
      document.body.classList.add('crt');
    } else {
      document.body.classList.remove('crt');
    }
    return next;
  });
};


  const lastWindowOpenTime = useRef(0);
  
  const canOpenWindow = () => {
    const now = Date.now();
    if (now - lastWindowOpenTime.current >= 400) {
      lastWindowOpenTime.current = now;
      return true;
    }
    return false;
  };

  const [showPreLoader, setShowPreLoader] = useState(true);
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
      TaskbarOpen(false);
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [open]);

  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateString = now.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' });

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
  };

  return positions[windowType];
};

const setTemporaryTitle = (newTitle: string, revertTitle: string = "[3cks.net]") => {
  document.title = newTitle;
  setTimeout(() => {
    document.title = revertTitle;
  }, 11111); 
};

const location = useLocation();
const hashPath = location.pathname;


useEffect(() => {
  setShowPreLoader(true);
  setShowWelcome(false);
  document.body.classList.add('crt');

  const timer = setTimeout(() => {
    setShowPreLoader(false);
    
    

    const match = hashPath.match(/^\/watch\/([^/]+)$/i);
    if (match) {
      const slug = match[1].toLowerCase();
      const videoToOpen = videos.find(
        v =>
          v.window_title.replace(/[^a-z0-9]/gi, '').toLowerCase() === slug.replace(/[^a-z0-9]/gi, '')
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
  }, 6116);

  return () => clearTimeout(timer);
}, [hashPath]);

  useEffect(() => {
    if (showWelcome) {
      const WelcomeContainer = document.createElement('div');
      new WinBox({
              title: "~X/WHATS_NEW/",
              icon: images.info,
              background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
              width: "375px",
              height: "400px",
              x: "center",
              y: "center", 
              url: "https://google.com", // eckis-chronicle.neocities.org
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
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundSize = '110% auto';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  }, []);

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
      onClose: () => {
      console.log("Window closed");
      document.title = "[3cks.net]";
      const root = ReactDOM.createRoot(CreditsContainer);
      root.unmount(); 
          CreditsContainer.remove(); 
        },
      });
      if (darkMode) {
  winbox.window.classList.add('dark-mode');
}
  const CreditsRoot = ReactDOM.createRoot(CreditsContainer); 
  
  CreditsRoot.render(<Credits />);
      };

  const openDonateWindow = () => {
    if (!canOpenWindow()) return;
    setTemporaryTitle("[3cks.net] - DONATE!");
    const DonateContainer = document.createElement('div');
    if (darkMode) {
      DonateContainer.classList.add('dark-mode');
    }
    const winbox = new WinBox({
      title: "~X/DONATE/",
      icon: images.desktop_donate,
      background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
      border: "0.3em",
      width: Math.min(325, window.innerWidth * 0.8) + "px", 
      maxWidth: "40%",
      height: Math.min(230, window.innerHeight * 0.7) + "px",
      maxHeight: "35%",
      x: WindowPosition('donate'),
      y: "45%",
      mount: DonateContainer, 
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      onClose: () => {
      console.log("Window closed");
      document.title = "[3cks.net]";
      const root = ReactDOM.createRoot(DonateContainer);
      root.unmount(); 
          DonateContainer.remove();
        },
      });
      if (darkMode) {
    winbox.window.classList.add('dark-mode');
  }
  const DonateRoot = ReactDOM.createRoot(DonateContainer); 
  DonateRoot.render(<Donate />);
      };

  const openAboutMeWindow = () => {
    if (!canOpenWindow()) return;
    setTemporaryTitle("[3cks.net] - ABOUT!");
    const aboutMeContainer = document.createElement('div');
    if (darkMode) {
      aboutMeContainer.classList.add('dark-mode');
    }
    const winbox = new WinBox({
      title: "~X/ABOUT/",
      className: "no-resize",
      icon: images.desktop_about,
      background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
      border: "0.3em",
      width: Math.min(440, window.innerWidth * 0.8) + "px", 
      maxWidth: "440px",
      height: Math.min(575, window.innerHeight * 0.7) + "px",
      maxHeight: "550px",
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
        console.log("Window closed");
        document.title = "[3cks.net]";
        const root = ReactDOM.createRoot(ContactContainer);
        root.unmount();
        ContactContainer.remove(); 
      },
      });
      if (darkMode) {
    winbox.window.classList.add('dark-mode');
  }
  const contactRoot = ReactDOM.createRoot(ContactContainer); 
  contactRoot.render(<Contact />);
    };

  const openGalleryWindow = () => {
    if (!canOpenWindow()) return;
    setTemporaryTitle("[3cks.net] - GALLERY!");
    const GalleryContainer = document.createElement('div');
    if (darkMode) {
      GalleryContainer.classList.add('dark-mode');
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
        console.log("Window closed");
        document.title = "[3cks.net]";
        const root = ReactDOM.createRoot(GalleryContainer);
        root.unmount();
        GalleryContainer.remove(); 
      },
    });
    if (darkMode) {
    winbox.window.classList.add('dark-mode');
  }
const GalleryRoot = ReactDOM.createRoot(GalleryContainer); 
GalleryRoot.render(<Gallery />);
  };

const openMusicWindow = () => {
    if (!canOpenWindow()) return;
    setTemporaryTitle("[3cks.net] - MUSIC!");
    const MusicContainer = document.createElement('div');
    if (darkMode) {
      MusicContainer.classList.add('dark-mode');
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
        console.log("Window closed");
        document.title = "[3cks.net]";
        const root = ReactDOM.createRoot(MusicContainer);
        root.unmount();
        MusicContainer.remove(); 
      },
    });
    if (darkMode) {
    winbox.window.classList.add('dark-mode');
  }
const MusicRoot = ReactDOM.createRoot(MusicContainer); 
MusicRoot.render(<Music />);
  };

 useEffect(() => {
    Object.values(images).forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);
useEffect(() => {
  let x = 0, y = 0;
  let targetX = 0, targetY = 0;
  let rafId: number;
  const maxTilt = 18; // degrees


  const maxOffset = 33; 

  const handleMouseMove = (e: MouseEvent) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * maxOffset;
    targetY = (e.clientY / window.innerHeight - 0.5) * maxOffset;
  };

  const animate = () => {

    const prevX = x, prevY = y;
    x += (targetX - x) * 0.1;
    y += (targetY - y) * 0.1;
    if (Math.abs(x - prevX) > 0.1 || Math.abs(y - prevY) > 0.1) {
      document.body.style.backgroundPosition = `perspective(${x}px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg)`;
      ;
    }
    rafId = requestAnimationFrame(animate);
  };

  window.addEventListener('mousemove', handleMouseMove);
  rafId = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(rafId);
  };
}, []);

  return (
    <>

{showPreLoader && <PreLoader />}

<div className="App">
  <div className="crt" style={{ opacity: crtEnabled ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.3 ease' }} />
  <div id="desktop">
  <label htmlFor={'about-me'} className="desktop-item" onClick={openAboutMeWindow}>
            <a href="#/about/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_about_gif} className="logo" alt="ABOUT" />
            <div className="desktop-text">ABOUT</div>
            </a>
          </label>
          <div id="about-me-content" style={{ display: 'none' }}>
          </div>
  <label htmlFor={'videos'} className="desktop-item" onClick={openVideoWindow}>
            <a href="#/videos/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_videos_gif} className="logo" alt="VIDEOS" />
            <div className="desktop-text">VIDEOS</div>
            </a>
          </label>
          <div id="videos-content" style={{ display: 'none' }}>
          </div>

  <label htmlFor={'gallery'} className="desktop-item" onClick={openGalleryWindow}>
            <a href="#/gallery/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_gallery_gif} className="logo" alt="GALLERY" />
            <div className="desktop-text">GALLERY</div>
            </a>
          </label>
          <div id="gallery-content" style={{ display: 'none' }}>
          </div> 

    <label htmlFor={'contact'} className="desktop-item" onClick={openContactWindow}>
            <a href="#/contact/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_contact_gif} className="logo" alt="CONTACT" />
            <div className="desktop-text">CONTACT</div>
            </a>
          </label>
          <div id="contact-content" style={{ display: 'none' }}>
          </div> 
    <label htmlFor={'donate'} className="desktop-item" onClick={openDonateWindow}>
            <a href="#/donate/" onClick={(e) => e.preventDefault()}>
              <img src={images.desktop_donate_gif} className="logo" alt="GALLERY" />
            <div className="desktop-text">DONATE</div>
            </a>
          </label>
          <div id="donate-content" style={{ display: 'none' }}>
          </div> 
    </div>
</div> 
      <div className="taskbar">
      <ThemeProvider theme={original}>
      <AppBar fixed={true}style={{top: 'auto', bottom: 0, position: 'fixed', zIndex: 1}}>
      <Toolbar noPadding style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'flex', width: '100%', alignItems: 'center', padding: '0px' }}>
        <Button
        ref={startBtnRef}
        onClick={() => TaskbarOpen(!open)}
        active={open ? true : undefined}
        style={{ fontWeight: 'bold', marginRight: 6, marginLeft: 6 }}>
        <img src={logoIMG} alt='START' style={{ height: '20px', marginRight: 4 }}
            />
            START
          </Button>
          <Handle size={35} style={{ marginRight: 10 }}/>

<div style={{ position: 'relative', display: 'inline-block', marginRight: 14 }} onClick={() => window.open('https://youtube.com/ecksposting', '_blank', 'noopener,noreferrer')}>
  <img src={images.youtube}
    alt='YouTube' className="taskbar-item"/>
  <div className="taskbar-tooltip">YOUTUBE</div></div>

<div style={{ position: 'relative', display: 'inline-block', marginRight: 14 }} onClick={() => window.open('https://instagram.com/ecksposting', '_blank', 'noopener,noreferrer')}>
  <img src={images.instagram}
    alt='Instagram' className="taskbar-item"/>
  <div className="taskbar-tooltip">INSTAGRAM</div></div>

<div style={{ position: 'relative', display: 'inline-block', marginRight: 14 }} onClick={() => window.open('https://twitter.com/ecksposting', '_blank', 'noopener,noreferrer')}>
  <img src={images.xitter}
    alt='Xitter' className="taskbar-item"/>
  <div className="taskbar-tooltip">XITTER</div></div>

<div style={{ position: 'relative', display: 'inline-block', marginRight: 14 }} onClick={() => window.open('https://eckslol.newgrounds.com/', '_blank', 'noopener,noreferrer')}>
  <img src={images.newgrounds}
    alt='Newgrounds' className="taskbar-item"/>
  <div className="taskbar-tooltip">NEWGROUNDS</div></div>

{open && (
  <MenuList
    ref={menuRef}
    style={{
      position: 'absolute',
      left: '-3px',
      bottom: '80%',
    }}
    onClick={() => TaskbarOpen(false)}
  >
              <MenuListItem className="taskbar-tab" onClick={openVideoWindow} style={{cursor: 'pointer', fontFamily: 'Pixeloid Sans'}}>
              <span role='img'>
                  <img src={images.desktop_videos} loading="eager" alt="VIDEOS" style={{ width: '20px', height: '20px', margin: '0 15px -4px 0'}} />
                </span>
                VIDEOS
              </MenuListItem>
              <MenuListItem className="taskbar-tab" onClick={openGalleryWindow} style={{cursor: 'pointer', fontFamily: 'Pixeloid Sans'}}>
                <span role='img'>
                  <img src={images.desktop_gallery} loading="eager" alt="GALLERY" style={{ width: '20px', height: '20px',  margin: '0 15px -4px 0'}} />
                </span>
                GALLERY
              </MenuListItem>
              <MenuListItem className="taskbar-tab" onClick={openAboutMeWindow} style={{cursor: 'pointer', fontFamily: 'Pixeloid Sans'}}>
                <span role='img'>
                  <img src={images.desktop_about} loading="eager" alt="GALLERY" style={{ width: '20px', height: '20px', margin: '0 15px -4px 0'}} />
                </span>
                ABOUT
              </MenuListItem>
              <MenuListItem className="taskbar-tab" onClick={showWelcome ? () => {} : () => setShowWelcome(true)} style={{cursor: 'pointer', fontFamily: 'Pixeloid Sans'}}>
                <span role='img'>
                  <img src={images.blog} loading="eager" alt="GALLERY" style={{ width: '20px', height: '20px', margin: '0 15px -4px 0'}} />
                </span>
                BLOG
              </MenuListItem>
              <Separator />
              <MenuListItem className="taskbar-tab" onClick={() => window.open('https://tornada.net/', '_blank', 'noopener,noreferrer')} style={{cursor: 'pointer', fontFamily: 'Pixeloid Sans'}}>
                <span role='img'>
                  <img src={images.tornada} loading="eager" alt="TORNADA" style={{ width: '20px', height: '20px', margin: '0 15px -4px 0'}} />
                </span>
                TORNADA
              </MenuListItem>
              <Separator />
              <MenuListItem className="taskbar-tab" onClick={openCreditsWindow} style={{cursor: 'pointer', fontFamily: 'Pixeloid Sans'}}>
                <span role='img'>
                  <img src={images.notepad} loading="eager" alt="CREDITS" style={{ width: '20px', height: '20px', margin: '0 10px -3px 0'}} />
                </span>
                CREDITS
              </MenuListItem>
              <MenuListItem disabled style={{fontFamily: 'Pixeloid Sans'}}>
                <span role='img'> 
                  <img src={powerIMG} loading="eager" style={{ width: '20px', height: '20px', margin: '0 10px -3px 0'}}/>
                </span>
                SHUTDOWN
              </MenuListItem>
            </MenuList>     
          )}
        </div>
<img className="taskbar-corner-item"
  src={darkMode ? images.darkmode : images.lightmode}
  alt={darkMode ? "DARK MODE" : "LIGHT MODE"}
  onClick={toggleDarkMode}
  title={darkMode ? "Theme: After Dark" : "Theme: Rise N' Grind"}
/>
<img className="taskbar-corner-item"
  src={crtEnabled ? images.crtmode : images.lcdmode}
  alt={crtEnabled ? "CRT" : "LCD"}
  onClick={toggleCRT}
  title={crtEnabled ? "Display: CRT" : "Dislay: LCD"}
/>
        <Frame
        variant='well'
        
        style={{ right: 'auto', padding: '0.1rem', width: '140px', height: '40px', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#000', border: 'black inset 2px', borderRadius: '0.1rem', marginTop: 4, marginBottom: 4, marginRight: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} 
      >
        <div style={{ fontSize: '0.9em'}}>{timeString}</div>
        <div style={{ fontSize: '0.9em', marginTop: 6 }}>{dateString}</div>
      </Frame>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
      </div>
    </>
  );
};

export default App;