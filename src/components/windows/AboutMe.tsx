import './AboutMe.css';
import about_img from '../../assets/aboutem.gif';
import tag from '../../assets/this-is-my-tag.png';
import { useState, useEffect } from 'react';

const quotes = [
  "jack of all trades, master at some",
  "self-driven creative powerhouse",
  "big boy with small dreams",
  "nothing but a wizard",
  "video music man boy",
  "uhhhhhhhhh",
  "you're doing a great job!",
  "set the scene. 86 degrees.",
  "quick to flip the script...",
  "my shit's official!",
  "also known as 'Big Fat Ecki'",
  "5'10, stand on my money, now I'm 5'6",
  "long live the new flesh!",
  "make that tv explode. bjork style.",
  "I'm afraid of what might happen if I relax.",
  "sample text",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const isMobile = window.innerWidth < 600;
const tabs = [
  {
    key: 'about',
    label: 'SYSTEM',
    content: (
      <div>
        <div className="sysinfo-header">General System Information</div>
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
    <span className='ECKS-NAME' style={{ textAlign: 'left', width: '100%' }}>ECKS</span>
    <span className='about-quote' style={{ textAlign: 'left', width: '92%' }}>"{randomQuote}"</span>
  </div>
  <img src={about_img} alt="das me" style={{ width: 120, marginBottom: 12 }} />
</div>
        <div style={{fontSize: '0.75rem', fontFamily: 'Zpix', lineHeight: '1.25rem'}}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>

  <div className="sysinfo-text" style={{ flex: 1, display: 'block', marginTop: 0 }}>
    video editor. VFX artist. graphic designer. just some guy tbh. always up and looking for work...
  </div>
</div>
        <div>E-mail <span className="sysinfo-text"><a href="mailto:spam@3cks.net">spam@3cks.net</a></span></div>
        <div>Site Last Updated <span className="sysinfo-text">Jan 17</span></div>
        </div>
      </div>
    ),
  },
  {
    key: 'hardware',
    label: 'CPU',
    content: (
      <div style={{ lineHeight: 1 }}>
        <div className="sysinfo-header">More Information</div>
        <div style={{fontSize: '0.70rem', fontFamily: 'Zpix'}}>Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in his free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there. 
<br/><br/>
This site aims to be a portfolio + an archive of me at my best, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability.
<br/><br/>
Some of my other work can be found under <a href="https://tornada.net" target="_blank" rel="noopener noreferrer">Tornada</a> - an animation supergroup with an all-star lineup of me and my relatives.
<br/><br/>
 At the end of the day I'm simply just tryna create everything I wish to see and experience. To me that's the only compass that really makes sense.
</div>
      </div>
    ),
  },
  {
    key: 'tools',
    label: 'STORAGE',
    content: (
      <div style={{ lineHeight: 1 }}>
        <div className="sysinfo-header">System Storage</div>
      <div style={{fontSize: '0.75rem', fontFamily: 'Zpix', marginTop: 8}}>
        Everything you see on here was made with:
        <div style={{marginTop: 16, marginBottom: 2}}>A Computer</div>
        <div style={{marginBottom: 2}}>After Effects</div>
        <div style={{marginBottom: 2}}>Photoshop</div>
        <div style={{marginBottom: 2}}>VEGAS Pro</div>
        <div style={{marginBottom: 2}}>FL Studio</div>
        <div style={{marginBottom: 2}}>Blender</div>
        <div style={{marginBottom: 16}}>Tux Paint</div>
        <div style={{marginBottom: 2}}>...and a dream.</div>
      </div>
      </div>
    ),
  },
];

const AboutMe = () => {

  const [dateTime, setDateTime] = useState(new Date());

useEffect(() => {
  const interval = setInterval(() => setDateTime(new Date()), 1000);
  return () => clearInterval(interval);
}, []);

const formatClock = (date: Date) => {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = days[date.getDay()];
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  let hh = date.getHours();
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  const ampm = hh >= 12 ? 'PM' : 'AM';
  hh = hh % 12 || 12;
  return `${day}, ${mm}/${dd}/${yyyy} ${hh}:${min}:${sec} ${ampm}`;
};

  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1666);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className={`aboutme-splash${!showSplash ? ' splash-fade-out' : ''}`}>
          <div className="this-is-my-tag"><img src={tag} alt="tag" /></div>
        </div>
      )}
      <div className="aboutme-container"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: '100%',
          minHeight: 260,
          background: 'linear-gradient(180deg, #232526 0%, #414345 80%, rgba(65,67,69,77) 96%, rgba(65,67,69,0) 100%)',
          boxShadow: '2px 0px 0px #0004',
          overflow: 'hidden',
        }}
      >
        <nav
          style={{
            minWidth: isMobile ? '60px' : '100px',
            width: isMobile ? '100%' : '33%',
            maxWidth: isMobile ? '100%' : '120px',
            height: isMobile ? undefined : '100%',
            background: 'linear-gradient(180deg, #444 60%, #555 100%)',
            borderRight: isMobile ? 'none' : '2px solid #444',
            borderBottom: isMobile ? '2px solid #444' : 'none',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            alignItems: 'stretch',
            padding: '2px',
            gap: 6,
          }}
        >
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: activeTab === tab.key ? '#4af' : 'transparent',
                color: activeTab === tab.key ? '#fff' : '#bbb',
                border: 'none',
                borderLeft: !isMobile && activeTab === tab.key ? '2px solid #4af' : '2px solid transparent',
                borderBottom: isMobile && activeTab === tab.key ? '2px solid #4af' : '2px solid transparent',
                textAlign: isMobile ? 'center' : 'left',
                padding: '12px 18px',
                fontWeight: activeTab === tab.key ? 'bold' : 'normal',
                fontFamily: 'inherit',
                fontSize: '0.8rem',
                cursor: 'pointer',
                outline: 'none',
                margin: '1px',
                transition: 'background 0.2s, color 0.2s',
                flex: 1
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <section
          style={{
            flex: 1,
            padding: 12,
            color: '#fdfdfd',
            fontFamily: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: 220,
          }}>
          {tabs.find(tab => tab.key === activeTab)?.content}
          <div style={{ marginTop: 16, fontSize: '0.75rem', fontFamily: 'Zpix' }}>{formatClock(dateTime)}</div>
        </section>
      </div>
      
      <span className="bottom-tag" style={{ marginTop: 'auto', fontFamily: 'Sans Nouveaux'}}> - 🅮 ECKS 2026 - </span>
    </>
  );
};

export default AboutMe;