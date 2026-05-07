import { useRef, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator, Frame, Handle } from 'react95'
import original from 'react95/dist/themes/vistaesqueMidnight'
import logoIMG from '../assets/redfloppy.png'
import powerIMG from '../assets/power.png'
import images from '../assets/images.js'

interface TaskbarProps {
  isMobile: boolean
  darkMode: boolean 
  crtEnabled: boolean
  toggleDarkMode: () => void
  toggleCRT: () => void
  openVideoWindow: () => void
  openGalleryWindow: () => void
  openAboutMeWindow: () => void
  openContactWindow: () => void
  openDonateWindow: () => void
  openCreditsWindow: () => void
  showWelcome: boolean
  setShowWelcome: (val: boolean) => void
}

const Taskbar = ({
  isMobile, darkMode, crtEnabled,
  toggleDarkMode, toggleCRT,
  openVideoWindow, openGalleryWindow, openAboutMeWindow, openCreditsWindow,
  showWelcome, setShowWelcome,
}: TaskbarProps) => {
  const [open, TaskbarOpen] = useState(false)
  const startBtnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const dateString = now.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' })

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        startBtnRef.current && !startBtnRef.current.contains(event.target as Node)
      ) {TaskbarOpen(false)}
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className="taskbar">
      <ThemeProvider theme={original}>
        <AppBar
          fixed={true}
          style={{
            top: 'auto', bottom: 0, position: 'fixed', zIndex: 2,
            height: isMobile ? '2.375rem' : undefined,
            minHeight: isMobile ? '2.375rem' : undefined,
          }}
        >
          <Toolbar
            noPadding
            style={{
              justifyContent: 'space-between',
              minHeight: isMobile ? '2.375rem' : undefined,
              padding: isMobile ? '0 2px' : undefined,
            }}
          >
            <div style={{ position: 'relative', display: 'flex', width: '100%', alignItems: 'center', padding: isMobile ? '0px' : undefined }}>
              <Button
                ref={startBtnRef}
                onClick={() => TaskbarOpen(!open)}
                active={open ? true : false}
                style={{
                  fontWeight: 'bold',
                  marginRight: isMobile ? 2 : 4, marginLeft: isMobile ? 2 : 6,
                  fontFamily: 'Pixeloid Sans Bold',
                  fontSize: isMobile ? '0.85em' : '0.70em',
                  height: isMobile ? '1.75rem' : '2.25rem',
                  minWidth: isMobile ? '3.75rem' : '4.5rem',
                  padding: isMobile ? '0.13rem 0.4rem' : '0.19rem 0.5rem',
                }}
              >
                <img src={logoIMG} alt='START' style={{ height: isMobile ? '0.9rem' : '1.3rem', marginRight: isMobile ? 4 : 5 }} />
                START
              </Button>
              <Handle size={isMobile ? '1.625rem' : '2.25rem'} style={{ marginRight: isMobile ? 4 : 6, marginLeft: isMobile ? 2 : 2 }} />

              {[
                { src: images.youtube, alt: 'YouTube', tooltip: 'YOUTUBE', url: 'https://youtube.com/ecksposting' },
                { src: images.instagram, alt: 'Instagram', tooltip: 'INSTAGRAM', url: 'https://instagram.com/ecksposting' },
                { src: images.xitter, alt: 'Xitter', tooltip: 'XITTER', url: 'https://twitter.com/ecksposting' },
                { src: images.newgrounds, alt: 'Newgrounds', tooltip: 'NEWGROUNDS', url: 'https://eckslol.newgrounds.com/' },
                { src: images.tiktok, alt: 'TikTok', tooltip: 'TIKTOK', url: 'https://tiktok.com/@ecks.wtf' },
              ].map((icon) => (
                <div
                  key={icon.alt}
                  style={{ position: 'relative', display: 'inline-block', marginRight: isMobile ? '0.3rem' : '0.7rem' }}
                  onClick={() => window.open(icon.url, '_blank', 'noopener,noreferrer')}
                >
                  <img src={icon.src} alt={icon.alt} className="taskbar-item" style={{ height: isMobile ? '1.25rem' : undefined, width: isMobile ? '1.25rem' : undefined }} />
                  <div className="taskbar-tooltip" style={{ fontSize: isMobile ? '0.625rem' : undefined }}>{icon.tooltip}</div>
                </div>
              ))}

              {open && (
                <MenuList
                  ref={menuRef}
                  style={{ position: 'absolute', left: '-3px', bottom: '80%', zIndex: 111 }}
                  onClick={() => TaskbarOpen(false)}
                >
                  <MenuListItem className="taskbar-tab" onClick={openVideoWindow} style={{ cursor: 'pointer', fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={images.desktop_videos} loading="eager" alt="VIDEOS" style={{ width: '20px', height: '20px', margin: '0 15px -4px 0' }} /></span>
                    VIDEOS
                  </MenuListItem>
                  <MenuListItem className="taskbar-tab" onClick={openGalleryWindow} style={{ cursor: 'pointer', fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={images.desktop_gallery} loading="eager" alt="GALLERY" style={{ width: '20px', height: '20px', margin: '0 15px -4px 0' }} /></span>
                    GALLERY
                  </MenuListItem>
                  <MenuListItem className="taskbar-tab" onClick={openAboutMeWindow} style={{ cursor: 'pointer', fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={images.desktop_about} loading="eager" alt="ABOUT" style={{ width: '1.25rem', height: '1.25rem', margin: '0 15px -4px 0' }} /></span>
                    ABOUT
                  </MenuListItem>
                  <MenuListItem className="taskbar-tab" onClick={showWelcome ? () => {} : () => setShowWelcome(true)} style={{ cursor: 'pointer', fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={images.blog} loading="eager" alt="BLOG" style={{ width: '1.25rem', height: '1.25rem', margin: '0 15px -4px 0' }} /></span>
                    BLOG
                  </MenuListItem>
                  <Separator />
                  <MenuListItem className="taskbar-tab" onClick={() => window.open('https://tornada.net/', '_blank', 'noopener,noreferrer')} style={{ cursor: 'pointer', fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={images.tornada} loading="eager" alt="TORNADA" style={{ width: '1.25rem', height: '1.25rem', margin: '0 15px -4px 0' }} /></span>
                    TORNADA
                  </MenuListItem>
                  <Separator />
                  <MenuListItem className="taskbar-tab" onClick={openCreditsWindow} style={{ cursor: 'pointer', fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={images.notepad} loading="eager" alt="CREDITS" style={{ width: '1.25rem', height: '1.25rem', margin: '0 10px -3px 0' }} /></span>
                    CREDITS
                  </MenuListItem>
                  <MenuListItem disabled style={{ fontFamily: 'Pixeloid Sans' }}>
                    <span role='img'><img src={powerIMG} loading="eager" style={{ width: '1.25rem', height: '1.25rem', margin: '0 10px -3px 0' }} /></span>
                    SHUTDOWN
                  </MenuListItem>
                </MenuList>
              )}
            </div>

            <div style={{ position: 'relative', display: 'inline-block' }} onClick={toggleDarkMode}>
              <img className="taskbar-corner-item" src={darkMode ? images.darkmode : images.lightmode} alt={darkMode ? "DARK MODE" : "LIGHT MODE"} style={{ height: isMobile ? 22 : 33, width: isMobile ? 22 : 33, marginRight: isMobile ? 4 : 4 }} />
              <div className="taskbar-tooltip" style={{ left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>{darkMode ? "Theme: After Dark" : "Theme: Rise N' Grind"}</div>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }} onClick={toggleCRT}>
              <img className="taskbar-corner-item" src={crtEnabled ? images.crtmode : images.lcdmode} alt={crtEnabled ? "CRT" : "LCD"} style={{ height: isMobile ? 22 : 33, width: isMobile ? 22 : 33, marginRight: isMobile ? 4 : 11 }} />
              <div className="taskbar-tooltip" style={{ left: '33%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>{crtEnabled ? "Display: CRT" : "Display: LCD"}</div>
            </div>

            <Frame
              variant='well'
              style={{
                right: 'auto',
                padding: isMobile ? '0.05rem' : '0.1rem',
                width: isMobile ? '90px' : '140px',
                height: isMobile ? '28px' : '40px',
                textAlign: 'center',
                fontSize: isMobile ? '0.8rem' : '1rem',
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: '#000',
                border: 'black inset 2px',
                borderRadius: '0.1rem',
                marginTop: isMobile ? 2 : 4,
                marginBottom: isMobile ? 2 : 4,
                marginRight: isMobile ? 2 : 6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ lineHeight: isMobile ? 1 : 0.6 }}>
                <div style={{ fontFamily: 'Pixeloid Sans Bold', fontSize: isMobile ? '0.55em' : '0.8em' }}>{timeString}</div>
                <div style={{ fontFamily: 'Pixeloid Sans', fontSize: isMobile ? '0.55em' : '0.8em', marginTop: isMobile ? 2 : 6 }}>{dateString}</div>
              </div>
            </Frame>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default Taskbar