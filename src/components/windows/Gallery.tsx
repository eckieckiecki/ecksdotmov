import './Gallery.css';
import WinBox from '../winbox/winbox.min.jsx';
import icons from '../../assets/images.js'; 
import { useState } from 'react';


const images = [

  {
    src: '/gallery/2025-search-thumb.jpg',
    alt: 'INTERNET-SEARCH',
    year: '2025',
    full: '/gallery/2025-search.jpg',
    tags: ['graphics']
  },

  {
    src: '/gallery/2025-baklava-mockup-thumb.jpg',
    alt: 'BAKLAVA-AD-MOCKUP',
    year: '2025',
    full: '/gallery/2025-baklava-mockup.jpg',
    tags: ['graphics']
  },

  {
    src: '/gallery/2025-baklava-blend.jpg',
    alt: 'BAKLAVA.BLEND',
    year: '2025',
    full: '/gallery/2025-baklava-blend.jpg',
    tags: ['graphics']
  },

  {
    src: '/gallery/2025-nadathumb.jpg',
    alt: 'TOM-Y-JERRY',
    year: '2025',
    full: '/gallery/2025-nada.gif',
    tags: ['graphics']
  },

  {
    src: '/gallery/2025-banner.jpg',
    alt: 'BANNER',
    year: '2025',
    full: '/gallery/2025-banner.jpg',
    tags: ['graphics']
  },

  {
    src: '/gallery/2025-you-rule-thumb.jpg',
    alt: 'YOU-RULE',
    year: '2025',
    full: '/gallery/2025-you-rule.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2025_crankdat.jpg',
    alt: 'CRANKDAT',
    year: '2025',
    full: '/gallery/2025_crankdat.jpg',
    tags: ['music']
  },

  {
    src: '/gallery/2025-uhuhuh.jpg',
    alt: 'UHUHUH',
    year: '2025',
    full: '/gallery/2025-uhuhuh.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2025-vinyl.jpg',
    alt: 'VINYL',
    year: '2025',
    full: '/gallery/2025-vinyl.jpg',
    tags: ['music']
  },

  {
    src: '/gallery/2025_bro-has-kickassia.jpg',
    alt: 'BRO-HAS-KICKASSIA',
    year: '2025',
    full: '/gallery/2025_bro-has-kickassia.jpg',
    tags: ['music']
  },
  
  {
    src: '/gallery/2024-tape-mockup.jpg',
    alt: 'SCRAPPED-TAPE-MOCKUP',
    year: '2024',
    full: '/gallery/2024-tape-mockup.jpg',
    tags: ['graphics']
  },

  {
    src: '/gallery/2024-be.jpg',
    alt: 'BE',
    year: '2024',
    full: '/gallery/2024-be.jpg',
    tags: ['music']
  },

  {
    src: '/gallery/2024-HBO.jpg',
    alt: 'HBO',
    year: '2024',
    full: '/gallery/2024-HBO.jpg',
    tags: ['music']
  },

  {
    src: '/gallery/2024-firestar.jpg',
    alt: 'FIRESTAR',
    year: '2024',
    full: '/gallery/2024-firestar.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2024-threebeersdeep.jpg',
    alt: 'THREEBEERSDEEP',
    year: '2024',
    full: '/gallery/2024-threebeersdeep.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2024-sagsog.jpg',
    alt: 'SAG-SOG',
    year: '2024',
    full: '/gallery/2024-sagsog.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2024-babygreen.jpg',
    alt: 'BABYGREENONEARTH',
    year: '2024',
    full: '/gallery/2024-babygreen.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2023-mach-stoney.jpg',
    alt: 'MACH-STONEY',
    year: '2023',
    full: '/gallery/2023-mach-stoney.jpg',
    tags: ['graphics']
  },

  {
    src: '/gallery/2023-orpheus-thumb.jpg',
    alt: 'ORPHEUS',
    year: '2023',
    full: '/gallery/2023-orpheus.jpg',
    tags: ['music']
  },

  {
    src: '/gallery/2023-setup.jpg',
    alt: 'SETUP',
    year: '2023',
    full: '/gallery/2023-setup.jpg',
    tags: ['photos']
  },

  {
    src: '/gallery/2022-waffle.jpg',
    alt: 'WH',
    year: '2022',
    full: '/gallery/2022-waffle.jpg',
    tags: ['photos']
  },
  
  
];

const TAGS = ['all', 'graphics', 'photos', 'music'];

const Gallery = () => {
  const [activeTag, setActiveTag] = useState('all');

  const handleDoubleClick = (img: typeof images[0]) => {
    const imgContainer = document.createElement('div');
    imgContainer.style.background = '#000';
    imgContainer.style.display = 'flex';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.justifyContent = 'center';
    imgContainer.style.height = '100%';
  
    const image = new window.Image();
    image.src = img.full;
    image.alt = img.alt;
    image.style.width = '100%';
    image.style.maxWidth = '600px';
    image.style.height = 'auto';
    image.style.display = 'flex';
    image.style.margin = 'auto';
  
    image.onload = () => {
      const maxWinWidth = Math.min(image.naturalWidth, window.innerWidth * 0.33);
      const maxWinHeight = Math.min(image.naturalHeight, window.innerHeight * 0.33);
      const winWidth = Math.max(220, maxWinWidth);
      const winHeight = Math.max(120, maxWinHeight);
      imgContainer.innerHTML = '';
      imgContainer.appendChild(image);
  
      new WinBox({
        title: `~/X/GALLERY/IMAGES/${img.year}/${img.alt}`,
    icon: icons.desktop_gallery,
    background: '#000',
    width: `${winWidth}px`,
    height: `${winHeight}px`,
    x: 'center',
    y: 'center',
    mount: imgContainer,
    setBackground: () => {},
    onClose: () => imgContainer.remove(),
    noResize: window.innerWidth < 600, 
    noMax: window.innerWidth < 600,
    noMin: window.innerWidth < 600,
    noFull: window.innerWidth < 600,
      });
    };
  };

  const filteredImages = activeTag === 'all'
    ? images
    : images.filter(img => img.tags && img.tags.includes(activeTag));

  return (
    <>
      <div className="gallery-header" style={{ color: 'black', fontSize: 40, margin: 4 }}>
        <p className="gallery-header-title">THE GALLERY</p>
        <p className="gallery-header-subtitle" style={{ fontSize: 14, lineHeight: 1}}>Here's a lil archive of images I have made, photos of my media collection, various side-quests and more. Double click an image to view it in full size.</p>


      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 12, marginTop: 12 }}>
        {TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.44)', fontFamily: 'Pixeloid Sans', padding: '6px 16px', borderRadius: 3, border: activeTag === tag ? '4px ridge #222' : '2px ridge #666565', background: activeTag === tag ? '#222' : '#f5f5f5', color: activeTag === tag ? '#f5f5f5' : '#222', fontWeight: activeTag === tag ? 'bold' : 'normal', cursor: 'pointer', outline: 'none',
            }}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>
              <div className="line" />
      </div>
      <div
        className="gallery-grid"
  style={{
    width: '98%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 16,
  }}
>
  {filteredImages.map((img, idx) => (
    <div
      key={idx}
      className="gallery-image-frame"
      style={{
        aspectRatio: 'auto', background: '#111', border: '2px ridge #222', margin: 'auto', padding: 4, display: 'flex', objectFit: 'cover', alignItems: 'center', justifyContent: 'center', maxWidth: 200, maxHeight: 200,cursor: 'pointer',
      }}
      onDoubleClick={() => handleDoubleClick(img)}
      title={img.alt}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        style={{
          background:'black', aspectRatio: 'auto', maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto', display: 'inline',
        }}
      />
    </div>
  ))}
  <br></br>
  <span className="gallery-bottom-tag" style={{fontFamily: 'Sans Nouveaux', marginTop: 18}} >- one shot. cut. print. perfect. -</span>
</div></>
  );
};

export default Gallery;