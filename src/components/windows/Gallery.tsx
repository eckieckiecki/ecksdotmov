import './Gallery.css'
import WinBox from '../winbox/winbox.min.jsx'
import icons from '../../assets/images.js'
import { JSX, useEffect, useState} from 'react'
import { images, TAGS } from '../../assets/gallery-images.ts'

const TAG_ICONS: Record<string, JSX.Element> = {
  'art': <img src={icons.gallery_art} alt="art" style={{ width: 12, height: 12 }} />,
  'gfx': <img src={icons.gallery_gfx} alt="gfx" style={{ width: 12, height: 12 }} />,
  'photos': <img src={icons.gallery_foto} alt="photos" style={{ width: 12, height: 12 }} />,
  'media': <img src={icons.gallery_music} alt="media" style={{ width: 12, height: 12 }} />,
}

const years = ['all', ...Array.from(new Set(images.map(img => img.year))).sort((a, b) => Number(b) - Number(a))]

const Gallery = () => {
  const [activeTags, setActiveTags] = useState([...TAGS])
  const [selectedYear, setSelectedYear] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [lastOpenTime, setLastOpenTime] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  const handleTagToggle = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const handleDoubleClick = (img: typeof images[0]) => {
      const now = Date.now()
    if (now - lastOpenTime < 1111) return
    setLastOpenTime(now)

    const imgContainer = document.createElement("div")
    imgContainer.style.background = "#000"
    imgContainer.style.display = "flex"
    imgContainer.style.alignItems = "center"
    imgContainer.style.justifyContent = "center"
    imgContainer.style.height = "100%"
    imgContainer.style.width = "100%"
  
    const image = new window.Image()
    image.src = img.full
    image.alt = img.title
    image.style.maxWidth = "100%"
    image.style.maxHeight = "100%"
    image.style.width = "auto"
    image.style.height = "auto"
    image.style.display = "block"
    image.style.margin = "auto"
  
    image.onload = () => {
  const maxWinWidth = window.innerWidth * 0.6
  const maxWinHeight = window.innerHeight * 0.5

  let winWidth = image.naturalWidth
  let winHeight = image.naturalHeight

  const widthRatio = maxWinWidth / winWidth
  const heightRatio = maxWinHeight / winHeight
  const scale = Math.min(1, widthRatio, heightRatio)

  winWidth = Math.max(220, winWidth * scale)
  winHeight = Math.max(150, winHeight * scale)

  imgContainer.innerHTML = ''
  imgContainer.appendChild(image)
  
    new WinBox({
    title: `${img.alt} - GALLERY`,
    icon: icons.desktop_gallery,
    background: '#000',
    width: `${winWidth}px`,
    height: `${winHeight}px`,
    x: "center",
    y: "center",
    mount: imgContainer,
    setBackground: () => {},
    onClose: () => imgContainer.remove(),
    noResize: window.innerWidth < 600, 
    noMax: window.innerWidth < 600,
    noMin: window.innerWidth < 600,
    noFull: window.innerWidth < 600,
      })
    }
  }

  const filteredImages = images.filter(img => {
    const tagMatch = activeTags.length > 0 && img.tags && img.tags.some(tag => activeTags.includes(tag))
    const yearMatch = selectedYear === 'all' || img.year === selectedYear
    const searchMatch = searchQuery === '' || img.title.toLowerCase().includes(searchQuery.toLowerCase())
    return tagMatch && yearMatch && searchMatch
  })

  const addressPath = `GALLERY${selectedYear === 'all' ? '' : `/${selectedYear}`}${activeTags.length === TAGS.length ? '' : `/${activeTags.join('+') || 'none'}`}`

  return (
    <div className="gallery-explorer">
      <div className="gallery-toolbar">
        <div className="gallery-address-bar">
          <span className="gallery-address-label">Address</span>
          <input
            className="gallery-address-input"
            readOnly
            value={addressPath}
          />
        </div>
        <div className="gallery-search-bar">
          <span className="gallery-address-label">Search⠀</span>
          <input
            className="gallery-address-input"
            type="text"
            placeholder="search files..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="gallery-body">

        <div className="gallery-sidebar">
          <div className="gallery-sidebar-section">
            <div className="gallery-sidebar-header">FOLDERS</div>
            {years.map(year => (
              <div
                key={year}
                className={`gallery-sidebar-item ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                <span className="gallery-sidebar-icon">{selectedYear === year ? <img src={icons.folderopen} alt="Open Folder" /> : <img src={icons.folder} alt="Closed Folder" />}</span>
                {year === 'all' ? 'ALL FILES' : year}
                <span className="gallery-sidebar-count">
                  ({year === 'all' ? images.length : images.filter(i => i.year === year).length})
                </span>
              </div>
            ))}
          </div>
          <div className="gallery-sidebar-divider" />
          <div className="gallery-sidebar-section">
            <div className="gallery-sidebar-header">FILTER BY TAG</div>
            {TAGS.map(tag => (
              <div
                key={tag}
                className={`gallery-sidebar-item ${activeTags.includes(tag) ? 'active' : 'muted'}`}
                onClick={() => handleTagToggle(tag)}
              >
                <span className="gallery-sidebar-icon">{activeTags.includes(tag) ? (TAG_ICONS[tag] ) : null}</span>
    {tag.toUpperCase()}
  </div>
            ))}
          </div>
          <div className="gallery-sidebar-divider" />
          <div className="gallery-sidebar-section">
            <div className="gallery-sidebar-hint">{isMobile ? 'Tap' : 'Double-click'}<br/>image to open</div>
          </div>
        </div>

        
        <div className="gallery-main-pane">
          {filteredImages.length === 0 ? (
            <div className="gallery-empty">
              <span>📂</span>
              <span>no files found</span>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredImages.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-img"
                  onDoubleClick={() => handleDoubleClick(img)}
                  onTouchEnd={() => handleDoubleClick(img)}
                  title={img.title}
                >
                  <img
                    src={img.thumb}
                    alt={img.title}
                    loading="lazy"
                  />
                  <span className="gallery-file-label">{img.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="gallery-statusbar">
        <span>{filteredImages.length} item{filteredImages.length !== 1 ? 's' : ''}</span>
        <span className="gallery-statusbar-sep">|</span>
        <span>{selectedYear === 'all' ? 'all years' : selectedYear}</span>
        <span className="gallery-statusbar-sep">|</span>
        <span>{activeTags.length === 0 ? 'no tags' : activeTags.join(', ')}</span>
        {searchQuery && <><span className="gallery-statusbar-sep">|</span><span>search: "{searchQuery}"</span></>}
      </div>

      <span className="bottom-tag" style={{ fontFamily: 'Sans Nouveaux', margin: 'auto', display: 'block', textAlign: 'center', padding: '8px 0' }}>- one shot. cut. print. perfect. -</span>
    </div>
  )
}

export default Gallery