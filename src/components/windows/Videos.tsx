/* eslint-disable react-refresh/only-export-components */
import './Videos.css'
import WinBox from '../winbox/winbox.min.jsx'
import icons from '../../assets/images.js'
import { videos } from '../../assets/my-videos.ts'
import featured_vhs from '../../assets/Featured-VHS.gif'
import featured_monitor from '../../assets/icons/videos-monitor.gif'
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'



const featured = [
  {
  title: 'COMPS! Vol. 1',
  description: 'also known as Compositions...',
  featuring: 'ECKS',
  featuring_link: 'https://3cks.net',
  }
]

const randomvid = () => {
    const eligible = videos.filter(v => v.id !== 12)
    const random = eligible[Math.floor(Math.random() * eligible.length)]
    openVideoWinBox(random)
  }

export function openVideoWinBox(video: typeof videos[0]) {
  const videoContainer = document.createElement('div')
  new WinBox({
    title: `~/X/VIDEOS/${video.window_title}`,
    icon: icons.desktop_videos,
    width: Math.min(500, window.innerWidth * 0.9) + "px",
    height: VideoPreviewSize(),
    x: 'center',
    y: 'center',
    background: '#000',
    mount: videoContainer,
    setBackground: (color: string) => console.log(`Background set to ${color}`),
    onClose: () => {
      videoContainer.remove()
    }
  })

  videoContainer.innerHTML = `
  <div>
  <div style="position:relative; padding-top:56.25%; border-bottom: 2px solid #FDFDFD"><iframe src="${video.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
  </div>
  <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1; background: linear-gradient(0deg,rgb(62, 62, 62) 0%, rgb(16, 16, 16) 86%); width:text-align: center; color: #FDFDFD;">
  <h2 style="color: #FDFDFD; margin: 0.3em 0; font-family: 'Pixeloid Sans Bold';">${video.alt_title}</h2>
  ${video.date} - <a href="${video.source}" target="_blank" style="color:rgb(255, 0, 0); text-decoration: none; font-size: 14px; margin-top: 10px;">Watch Original Here</a>
  <button id="share-btn" class="share-btn" style="margin-left:10px;background:#222;color:#fff;border:'2px rigid #222';padding:2px 10px;border-radius:4px;cursor:pointer;font-size:13px;">Share</button>
  <p style="color: #FDFDFD; margin-top: 24px; white-space: pre-wrap; font-size: 16px; font-weight: bold;">Description / Notes:</p>
  <div class="description-border" style="font-size: 10pt;padding: 6px; line-height: 1.25em; color: white; background-color:rgba(0, 0, 0, 0.4); border: 2px solid #FDFDFD;">
  ${video.description}
  </div>
  </div>
  `

  setTimeout(() => {
    const shareBtn = videoContainer.querySelector('#share-btn')
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const shareUrl = `https://3cks.net/#/watch/${video.window_title.toLowerCase()}`
        if (navigator.share) {
          navigator.share({
            title: video.title,
            url: shareUrl,
          })
        } else {
          const shareBox = document.createElement('div')
          new WinBox({
            title: "~X/SHARE/",
            icon: icons.blog,
            background: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",
            width: "375px",
            height: "215px",
            x: "center",
            y: "center", 
            mount: shareBox,
            setBackground: (color: string) => console.log(`Background set to ${color}`),
            onClose: () => {
              console.log('Window closed')
              shareBox.remove()
            },
          })
          shareBox.innerHTML = `
            <div style="padding: 24px; text-align: center; background: linear-gradient(0deg,rgb(33, 33, 33) 0%, rgb(12, 12, 12) 86%); width:text-align: center;">
              <div style="display: flex; align-items: center; gap: 10px; margin: 4px 0 16px 0; justify-content: center;">
<div style="display: flex; align-items: flex-end; gap: 32px; margin: 4px 0 16px 0; justify-content: center;font-family:'Pixeloid Sans';">
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}" target="_blank" title="Share on Twitter" style="display:inline-block;">
    <img src="${icons.xitter}" alt="Twitter/X" style="width:33px;height:33px;margin-bottom:8px;" />
  <span style="color:#fdfdfd; font-size:14px;">Xitter</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}" target="_blank" title="Share on Facebook" style="display:inline-block;">
    <img src="${icons.reddit}" alt="Reddit" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Reddit</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" target="_blank" title="Share on Reddit" style="display:inline-block;">
    <img src="${icons.facebook}" alt="Facebook" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Facebook</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
    <a href="mailto:?subject=Check%20this%20video&body=${encodeURIComponent(shareUrl)}" title="Share via Email" style="display:inline-block;">
    <img src="${icons.desktop_contact}" alt="Email" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Email</span>
      </a>
</div>
</div>
</div>

<div style="display: flex; align-items: center; justify-content: center; gap: 2px; margin-bottom: 16px;">
<input type="text" value="${shareUrl}" readonly style="width: 70%; background:#fdfdfd;color:#222; padding: 8px; font-size: 12px;font-family:'Pixeloid Sans';"/>
                <button id="copy-share-link" class="share-btn" style="background:#fdfdfd;color:#0d0d0d;border:'2px rigid #0d0d0d';padding:6px 18px;cursor:pointer;font-size:15px;font-family:'Pixeloid Sans';">Copy</button>
              </div>
              <br/>
              <span style="font-size:9px;color:#fdfdfd;font-family:'Sans Nouveaux'">- spread the luh -</span>
            </div>
            </div>
          `
          setTimeout(() => {
            const copyBtn = shareBox.querySelector('#copy-share-link')
            if (copyBtn) {
              copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(shareUrl)
                copyBtn.textContent = 'Copied!'
                setTimeout(() => (copyBtn.textContent = 'Copy'), 1200)
              })}}, 0)}})}}, 0)}

const YouTubeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" style={{marginLeft: 4, verticalAlign: 'middle'}}>
  <path fill="#FF0000"
  d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999z"/>
  <path fill="#FFFFFF" d="M10 15V9l5 3-5 3z" />
  </svg>
)

const ArrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" style={{marginLeft: 4, verticalAlign: 'middle'}}>
    <path fill="#888" d="M10 17l5-5-5-5v10z"/>
  </svg>
)

const VideoPreviewSize = () => {
  if (window.innerWidth < 768) {
    return "60%"
  }
  return "400px"
}

const parseVideoDate = (dateStr: string): number => {
  const parts = dateStr.split('-')
  if (parts.length === 3) {
    // MM-DD-YYYY
    return new Date(`${parts[2]}-${parts[0]}-${parts[1]}`).getTime()
  } else if (parts.length === 2) {
    // MM-YYYY
    return new Date(`${parts[1]}-${parts[0]}-01`).getTime()
  }
  return 0
}

const Videos = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [showSubtitle, setShowSubtitle] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')


  type CursorTooltip = {
  target: string
  x: number
  y: number
} & (
  | { kind: 'text'; text: string }
  | { kind: 'featured'; title: string }
  | { kind: 'video'; videoId: number; title: string; date: string; summary: string }
)

const [tooltip, setTooltip] = useState<CursorTooltip | null>(null)

const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
const pointerPosition = useRef({ x: 0, y: 0 })

useEffect(() => () => {
  if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
}, [])

  const filteredAndSortedVideos = videos
    .filter(video => video.id !== 11)
    .filter(video => 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.alt_title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = parseVideoDate(a.date)
      const dateB = parseVideoDate(b.date)
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

  useEffect(() => {
    const node = headerRef.current
    if (!node) return
    const observer = new window.ResizeObserver(entries => {
      for (const entry of entries) {
        setShowSubtitle(entry.contentRect.width > 480)
      }
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
    <div className="videos-header" ref={headerRef} style={{ color: '#FDFDFD', fontSize: 24, margin: 0, overflowX: 'visible', overflowY: 'visible', display: 'flex', marginTop: -8, whiteSpace: 'nowrap', marginBottom: 16, maxHeight: 222}}
    >
      <span style={{paddingTop: 30, marginLeft: 24, fontSize: 16, position: 'absolute', wordSpacing: 8}}><span style={{color: 'yellow', fontFamily: 'Pixeloid Sans Bold', fontSize: 18}}>ECKS</span>  →   bunker</span>
      <div className="videos-header-left">
      
    <div className="featured-monitor"
      onPointerEnter={(event) => {
  if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
  pointerPosition.current = { x: event.clientX, y: event.clientY }
  tooltipTimer.current = setTimeout(() => {
    setTooltip({
      kind: 'text',
      target: 'monitor',
      text: 'Click here to play a random video, playa!',
      ...pointerPosition.current,
    })
  }, 700)
}}
onPointerMove={(event) => {
  pointerPosition.current = { x: event.clientX, y: event.clientY }
  setTooltip(current =>
    current?.target === 'monitor'
      ? { ...current, ...pointerPosition.current }
      : current
  )
}}
onPointerLeave={() => {
  if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
  tooltipTimer.current = null
  setTooltip(current => current?.target === 'monitor' ? null : current)
}}>
      <img src={featured_monitor} style= {{ objectFit: 'contain', margin: 'auto', marginLeft: -2, alignSelf: 'flex-start', cursor: 'pointer', transition: 'filter 0.25s cubic-bezier(.4,2,.6,1)', filter: 'saturate(1)',}}
      onClick={randomvid}
      /></div>
      </div>
      {showSubtitle && (
      <div className="videos-header-subtitle">
        <span className="header-in-a-header">エックス・ネット</span>
  <span className="videos-header-quote">
    My select contributions to this wave. Find peace in its motion and create 'til you die.
  </span>
    <div style={{ display: 'flex', flexDirection: 'row', gap: 20, marginLeft: 72 }}>
  <button
      style={{
        paddingLeft: 0, width: 120, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-start',}}
      onClick={() => window.open('https://www.youtube.com/@ecksposting?sub_confirmation=1', '_blank')}>{YouTubeIcon}<span style={{ marginLeft: 2 }}> / @ECKSPOSTING</span></button>
  <button
      style={{
        paddingLeft: 0, width: 100, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-start',}} 
        onClick={() => window.open('https://www.youtube.com/@ECKSONYT/playlists', '_blank')}>{YouTubeIcon}<span style={{ marginLeft: 2 }}> / PLAYLISTS</span></button>
  </div>
    </div>)}
      <div className="videos-featured"
  onClick={() => openVideoWinBox(videos[0])}>
  <div className="featured-vhs">
    <div className="featured-vhs-wrap videos-tooltip" onPointerEnter={(event) => {
  if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
  pointerPosition.current = { x: event.clientX, y: event.clientY }

  tooltipTimer.current = setTimeout(() => {
    setTooltip({
      kind: 'featured',
      target: 'featured-vhs',
      title: featured[0].title,
      ...pointerPosition.current,
    })
  }, 700)
}}
onPointerMove={(event) => {
  pointerPosition.current = { x: event.clientX, y: event.clientY }
  setTooltip(current =>
    current?.target === 'featured-vhs'
      ? { ...current, ...pointerPosition.current }
      : current
  )
}}
onPointerLeave={() => {
  if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
  tooltipTimer.current = null
  setTooltip(current =>
    current?.target === 'featured-vhs' ? null : current
  )
}}>
    <span className="featured-vhs-star" aria-hidden="true" />
    <img
      src={featured_vhs}
      alt={featured[0].title}
      style={{width: 150, height: 150, objectFit: 'contain', margin: 'auto', display: 'block',}}/></div>
  <span style={{ fontSize: 12, marginRight: 8, lineHeight: 1,marginTop: -20}}>
  <span style={{ color: 'yellow'}}>FEATURED VIDEO</span><br></br>"{featured[0].title}"</span>
  
  </div></div></div>

    <div style={{ display: 'flex', flexDirection: 'row', gap: 12, margin: '0 auto 16px', width: '98%', maxWidth: '99%', alignItems: 'center', fontFamily: 'Pixeloid Sans'}}>

      <span style={{ whiteSpace: 'nowrap', display: 'inline-block', fontSize: '10px', marginLeft: 8}}>SEARCH</span>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '8px 12px', fontSize: '0.625rem', fontFamily: 'Pixeloid Sans', background: '#222', color: '#FDFDFD', border: '2px solid #FDFDFD', width: '100%', minWidth: '60px', maxWidth: '260px', boxSizing: 'border-box'}}
      />


<div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, marginRight: 12}}>
     <span style={{ whiteSpace: 'nowrap', display: 'inline-block', fontSize: '10px' }}>SORT BY</span>
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
    style={{
      padding: '8px 10px', fontSize: '0.625rem',fontFamily: 'Pixeloid Sans',background: '#222', color: '#FDFDFD', border: '2px solid #FDFDFD',cursor: 'pointer', outline: 'none', touchAction: 'manipulation', minHeight: 24, minWidth: 80}}
  >
    <option value="newest">Newest</option>
    <option value="oldest">Oldest</option>
  </select>
      </div>
    </div>
  <div className="videos-grid" style={{ display: 'flex', flexWrap: 'wrap', width: '95%', textAlign: 'center', gap: '12px'}}>
  {filteredAndSortedVideos.map((video) => (
    <div
  key={video.id} className="video-card-tooltip"
  onPointerEnter={(event) => {
    pointerPosition.current = { x: event.clientX, y: event.clientY }
    tooltipTimer.current = setTimeout(() => {
      setTooltip({
  kind: 'video',
  target: `video-${video.id}`,
  videoId: video.id,
  title: video.title,
  date: video.date,
  summary: video.summary ?? '',
  ...pointerPosition.current,
})
    }, 700)
  }}
  onPointerMove={(event) => {
    pointerPosition.current = { x: event.clientX, y: event.clientY }
    setTooltip(current =>
    current?.kind === 'video' && current.videoId === video.id
    ? { ...current, ...pointerPosition.current }
    : current
)
  }}
  onPointerLeave={() => {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
    tooltipTimer.current = null
    setTooltip(null)
  }}
>
      <button
        className="my-videos"
        onClick={() => openVideoWinBox(video)}>
        <img 
          src={video.thumbnail}
          alt={video.alt_title}
          loading="lazy"/>
        <span className="video-title">
      {video.title}{video.isYouTube ? YouTubeIcon : ArrowIcon}
</span>
      </button> 
    </div>
    ))}
    </div>
    <span className="bottom-tag" style={{marginTop: 16, fontFamily: 'Sans Nouveaux'}}  >- press play. trust the process. -</span>
    <span style={{ textAlign: 'center', visibility: 'hidden' }}>...</span>
    {tooltip && createPortal(
  <div
    className="video-cursor-tooltip"
    role="tooltip"
    style={{ left: tooltip.x, top: tooltip.y }}
  >
    {tooltip.kind === 'featured' ? (
  <span className="video-cursor-tooltip-title">Watch "{tooltip.title}"</span>
) : tooltip.kind === 'text' ? (
  <span className="featured-monitor-tooltip">{tooltip.text}</span>
) : (
  <>
    <span className="video-cursor-tooltip-title">{tooltip.title}</span>
    <span>From {tooltip.date}</span>
    <span>{tooltip.summary}</span>
  </>
)}
  </div>,
  document.body
)}
    </>
  )
}

export default Videos