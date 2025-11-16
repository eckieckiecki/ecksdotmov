import './AboutMe.css';
import about_img from '../../assets/aboutem.gif';
import tag from '../../assets/this-is-my-tag.png';
import { useState, useEffect } from 'react';


const quotes = [
"jack of all trades, master at some",
"self-driven creative powerhouse",
"big boy with small dreams",
"just some guy tbh",
"nothing but a wizard",
"you're doing a great job!",
"set the scene. 86 degrees.",
"5'10, stand on my money, now I'm 5'6",
"long live the new flesh!",
"make that tv explode. bjork style.",
"antisocial experiment",
"do you like iPhone?",
"I'm afraid of what might happen if I relax."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log('ECKS - ', randomQuote);



const AboutMe = () => {

  const [showSplash, setShowSplash] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1666);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showSplash && (
    <div className={`aboutme-splash${!showSplash ? ' splash-fade-out' : ''}`}>
      <div className="this-is-my-tag"><img src={tag}/></div>
    </div>
  )}
    <div style={{ width: 'auto', height: '100%', padding: 0, margin: 0}}>
    <div className="about-me" style={{overflowX: 'hidden'}}>
    <span className="about-header"> SYSTEM &gt; ABOUT</span>
    <div className="about-split"></div>
    <div className="about-content">
    <span className="about-tagline" style={{ display: 'flex', alignItems: 'center'}}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <span className="ECKS-NAME">ECKS!</span>
    <span className="about-quote" style={{ marginTop: 2 }}>"{randomQuote}"</span>
  </div>
  <img src={about_img} alt="ECKS" className="about-image" style={{ right: 0, marginLeft: 50, maxWidth: 172, alignSelf: 'flex-start'}} />
</span>

    <div className="about-split"></div>
    <p className="about-bio" style={{ width: '95%' }}>
    Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in their free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there. 
    </p>
  <p className="about-bio" style={{ width: '95%' }}>This site aims to be an archive of some of my best scraps, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability.
  </p>
  <p className="about-bio" style={{ width: '98%' }}>
    Some of my other work can be found at <a href="https://tornada.net" target="_blank"><span className='bigdeal'>Tornada</span></a> - an animation supergroup with an all-star lineup of me and my relatives.
  </p>
  <p className="about-bio" style={{ width: '95%' }}>
    At the end of the day, I simply just create the stuff that I wish to see and experience. To me that's the only compass that really makes sense.
  </p>
  <p className="about-bio" style={{ width: '95%' }}>
    Anyone hoping to get in touch (or just say hi) can reach me at <a href="mailto:spam@3cks.net" target="_blank" rel="noopener noreferrer"><span className='bigdeal'>spam@3cks.net</span></a> or via the links listed on here. I'm open to work and/or whatever questions you may have. 
  </p>
      </div>

    </div>
    <span className="bottom-tag" style={{marginTop: 12, fontFamily: 'Sans Nouveaux', fontSize: '8px'}} >- 🅮 ECKS 2025 -</span>
    <span style={{ textAlign: 'center', visibility: 'hidden' }}>.</span>
    </div>
    </>
  );
};

export default AboutMe;