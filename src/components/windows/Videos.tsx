import './Videos.css';
import WinBox from '../winbox/winbox.min.jsx';
import icons from '../../assets/images.js'; 
import ft from '../../assets/Featured-VHS.gif'; 

const featured = [
  {
  description: 'Four colorful boys and their dad.',
  featuring: 'ColeDog',
  featuring_link: 'https://www.instagram.com/coledawg2001/',
  }
];

const videos = [
  {
    id: 0,
    title: 'THE_COLOR_BROTHERS',
    alt_title: 'THE COLOR BROTHERS',
    url: 'https://iframe.mediadelivery.net/embed/393622/b01f3be6-5a68-445e-9a39-a4f59d2ec845?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: 'https://www.youtube.com/watch?v=KAqmREHqTmg',
    date: '03/25',
    description: ' Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.',
    thumbnail: './thumbnails/colorbros.jpg',
    isYouTube: false,
  },
  {
    id: 2,
    title: 'HOT_THEM_SUMMER!',
    alt_title: 'HOT THEM SUMMER',
    url: 'https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: '',
    date: '11/22',
    description: 'Lyric video I did for my homegirl Lambs. Peace to bluvelv who is on the song as well.',
    thumbnail: './thumbnails/lambs.jpg',
    isYouTube: false,
  },
  {
    id: 3,
    title: 'KNOWLEDGE_GOD!',
    alt_title: '"KNOWLEDEGOD"',
    url: 'https://iframe.mediadelivery.net/embed/393622/5d9bc1aa-9bc8-42f8-bce1-931d46f8ba8c?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: 'https://www.youtube.com/watch?v=sziewA2jzEY',
    date: '11/22',
    description: 'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',
    thumbnail: './thumbnails/knowledgegod.jpg',
    isYouTube: false,
  },
    {
    id: 4,
    title: 'RIDETOSEVENELEVEN',
    alt_title: 'RIDETOSEVENELEVEN',
    url: 'https://www.youtube.com/embed/DKDvPdll1D4',
    date: '11/19',
    description: 'A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.',
    thumbnail: './thumbnails/ride.jpg',
    isYouTube: true,
  },
  {
    id: 5,
    title: 'FED_UP! (IN VR)',
    alt_title: 'FEDUP!INVR!',
    url: 'https://www.youtube.com/embed/9m8US6X9gWs',
    date: '08/21',
    description: 'This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.',
    thumbnail: './thumbnails/stride.jpg',
    isYouTube: true,
  },
  {
    id: 6,
    title: 'CHOPPA_WEDNESDAY',
    alt_title: 'CHOPPAWEDNESDAY',
    url: 'https://www.youtube.com/embed/G6ik_SLRulQ',
    date: '10/20',
    description: 'Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol',
    thumbnail: './thumbnails/choppa.jpg',
    isYouTube: true,
  },
  {
    id: 8,
    title: 'RIDETOSEVENELEVEN',
    alt_title: 'RIDETOSEVENELEVEN',
    url: 'https://www.youtube.com/embed/DKDvPdll1D4',
    date: '11/19',
    description: 'A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.',
    thumbnail: './thumbnails/ride.jpg',
    isYouTube: true,
  },
];

const YouTubeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" style={{marginLeft: 4, verticalAlign: 'middle'}}>
    <path fill="#FF0000" d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"/>
  </svg>
);

const ArrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" style={{marginLeft: 4, verticalAlign: 'middle'}}>
    <path fill="#888" d="M10 17l5-5-5-5v10z"/>
  </svg>
);

const VideoPreviewSize = () => {
  if (window.innerWidth < 768) {
    return "60%";
  }
  return "400px";
};

const Videos = () => {
  const openVideoWinBox = (video: typeof videos[0]) => {
    const videoContainer = document.createElement('div');
    new WinBox({
      title: `~/X/${video.title}`,
      icon: icons.desktop_videos,
      width: Math.min(500, window.innerWidth * 0.9) + "px",
      height: VideoPreviewSize(),
      x: 'center',
      y: 'center',
      background: '#000',
      mount: videoContainer,
      setBackground: (color: string) => console.log(`Background set to ${color}`),
      onClose: () => {
        videoContainer.remove();
      },
    });

    videoContainer.innerHTML = `
    <div>
    <div style="position:relative;padding-top:56.25%;"><iframe src="${video.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
    </div>
    <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1;background: #222; width:text-align: center;">
    <h2 style="color:white; margin: 0.5em 0;">${video.alt_title}</h2>
    Spawned ${video.date} - <a href="${video.source}" target="_blank" style="color:gray; text-decoration: none; font-size: 14px; margin-top: 8px;">Watch Original Here</a>
    <p style="color:white; padding-bottom: 0.5em; line-height: 1em">${video.description}</p>
    </div>
    `;
  };

  return (
    <>
    <div className="videos-header" style={{ color: 'black', fontSize: 24, margin: 0, overflow: 'hidden', display: 'flex', marginTop: -8, marginBottom: 16}}>
      <div style={{fontFamily: 'Pixeloid Sans', flexDirection: 'column', display: 'flex', borderBottom: '2px solid black', width: '40%', paddingRight: 30}}>
      <p className="videos-header-title" style={{ fontFamily: 'Pixeloid Sans Bold', fontSize: 32, marginLeft: 8}}>VIDEOS</p>
      <p className="videos-header-subtitle" style={{ fontSize: 14, width: '100%', lineHeight: 1, marginTop: -8, marginLeft: 12}}>I made a few of these here and there.. and you can watch em on here or <a href="https://youtube.com/ecksposting" target="_blank">YouTube!</a></p>
      </div>
      <div className="videos-featured"
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 1,
    padding: 6,
    borderRadius: 0,
    borderBottom: '2px solid black',
    maxWidth: 480,
    cursor: 'pointer',
    lineHeight: 1,
  }}
  onClick={() => openVideoWinBox(videos[0])}
>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={ft}
      alt={videos[0].alt_title}
      style={{
        width: 140,
        height: 120,
        objectFit: 'cover',
        marginRight: 8,
      }}
    />
    <span
      className="featured-video-title"
      style={{
        backgroundColor: 'red',
        color: 'white',
        fontSize: 24,
        lineHeight: 1,
        fontWeight: 'bold',
        display: 'block',
        padding: '4px 12px',
        borderRadius: 4,
      }}
    >
      <span>Featured Video - </span><span>{videos[0].alt_title}</span>
    </span>
  </div>
  <span
    style={{
      color: 'white',
      fontSize: 14,
      display: 'block',
      marginTop: 12,
      marginLeft: 2,
      lineHeight: 1,
    }}
  >
    {featured[0].description} Art done by <a href={featured[0].featuring_link} target="_blank">@{featured[0].featuring}</a>
  </span>
</div>
  </div>
  
  <div className="videos-grid" style={{ display: 'flex', flexWrap: 'wrap', width: '95%', textAlign: 'center', gap: '12px'}}>
  {videos
    .filter(video => video.id !== 8)
    .map((video) => (
      <div
        key={video.id}
        className="my-videos"
        style={{
          width: 180,
          border: '2px ridge #222',
          borderRadius: 1,
          height: '100%',
          margin: 'auto',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        title={video.title}
        onClick={() => openVideoWinBox(video)}
      >
        <img
          src={video.thumbnail}
          alt={video.alt_title}
          loading="lazy"
          style={{ width: '90%', height: '90%', display: 'block', border: '2px solid #222'}} />
        <span
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 10,
            textAlign: 'center',
            margin: 'auto',
            padding: '6px 4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '100%',
          }}
        >
      {video.alt_title}{video.isYouTube ? YouTubeIcon : ArrowIcon}
</span>
      </div>
    ))}
    

    
      </div>
      <span style={{ textAlign: 'center' }}>...</span>
      </>
    );
};

export default Videos;