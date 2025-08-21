import './Videos.css';
import WinBox from '../winbox/winbox.min.jsx';
import icons from '../../assets/images.js'; 
import featured_vhs from '../../assets/Featured-VHS.gif'; 

const featured = [
  {
  title: 'THE COLOR BROTHERS',
  description: 'Four colorful boys and their dad.',
  featuring: 'ColeDawg',
  featuring_link: 'https://www.instagram.com/coledawg2001/',
  }
];

const videos = [
  {
    id: 0,
    title: 'BAKLAFA',
    window_title: 'BAKLAVA-IS-FUCKING-AWESOME',
    alt_title: 'BAKLAVA is FUCKING AWESOME',
    url: 'https://iframe.mediadelivery.net/embed/393622/23432bf3-b371-4a99-b45f-988a094e0d38?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    date: '06-2025',
    description: 'Fresh hot two-pack of some commissions I did in June 2025... \n First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.',
    thumbnail: './thumbnails/baklafa.jpg',
    isYouTube: false,
  },
  {
    id: 1,
    title: 'THE COLOR BROTHERS',
    window_title: 'THE-COLOR-BROTHERS',
    alt_title: 'COLOR BROTHERS',
    url: 'https://iframe.mediadelivery.net/embed/393622/b01f3be6-5a68-445e-9a39-a4f59d2ec845?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: 'https://www.youtube.com/watch?v=KAqmREHqTmg',
    date: '03-23-2025',
    description: ' Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.',
    thumbnail: './thumbnails/colorbros.jpg',
    isYouTube: false,
  },
  {
    id: 2,
    title: 'HOT THEM SUMMER!',
    window_title: 'HOT-THEM-SUMMER',
    alt_title: 'HOT THEM SUMMER!',
    url: 'https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: '',
    date: '11-24-2022',
    description: 'Lyric video I did for my homegirl Lambs. Peace to bluvelv who is on the song as well.',
    thumbnail: './thumbnails/lambs.jpg',
    isYouTube: false,
  },
  {
    id: 3,
    title: 'KNOWLEDGEGOD!',
    window_title: 'KNOWLEDGE-GOD',
    alt_title: 'KNOWLEDEGOD!',
    url: 'https://iframe.mediadelivery.net/embed/393622/5d9bc1aa-9bc8-42f8-bce1-931d46f8ba8c?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: 'https://www.youtube.com/watch?v=sziewA2jzEY',
    date: '12-31-2022',
    description: 'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',
    thumbnail: './thumbnails/knowledgegod.jpg',
    isYouTube: false,
  },
    {
    id: 4,
    title: 'RIDETOSEVENELEVEN',
    window_title: 'MC-RIDE-GOES-TO-THE-STORE',
    alt_title: 'MC RIDE GOES TO THE STORE',
    url: 'https://www.youtube.com/embed/DKDvPdll1D4',
    date: '11-24-2019',
    description: 'A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.',
    thumbnail: './thumbnails/ride.jpg',
    isYouTube: true,
  },
  {
    id: 5,
    title: 'FED UP! (IN VR)',
    window_title: 'FED-UP-IN-VR',
    alt_title: 'FEDUP!INVR!',
    url: 'https://www.youtube.com/embed/9m8US6X9gWs',
    date: '08-31-2021',
    description: 'This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.',
    thumbnail: './thumbnails/stride.jpg',
    isYouTube: true,
  },
  {
    id: 6,
    title: 'CHOPPA WEDNESDAY!',
    window_title: 'CHOPPA-WEDNESDAY',
    alt_title: 'CHOPPA WEDNESDAY',
    url: 'https://www.youtube.com/embed/G6ik_SLRulQ',
    date: '10-07-2020',
    description: 'Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol',
    thumbnail: './thumbnails/choppa.jpg',
    isYouTube: true,
  },
  {
    id: 7,
    title: 'SAGGY AND SOGGY',
    window_title: 'SAGGY-AND-SOGGY-SODIUM-CONNECTIONS',
    alt_title: 'SAGGY AND SOGGY - SODIUM CONNECTIONS',
    url: 'https://www.youtube.com/embed/RnXMoazSLo4',
    date: '05-15-2020',
    description: 'This ones pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend where we were discussing what a funny name for a cartoon would be and we decided on "Saggy and Soggy." I wanted to write something I wasnt used to writing before, an actual cartoon longer than 30 seconds. Looking at it now my writing was debatably as goofy as it is now but for different reasons. I had cutaway gags in this mix at some point. During a perfect time, Tornada just so happened to also form at this time and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed a lot more love to this project than I had originally and this is ultimately what led to his extended involvement. He finished the script and animated most of it while I offered a music video segment which was my first time using After Effects if you couldnt already tell along with lending some quick lines.', 
    thumbnail: './thumbnails/sagsog.jpg',
    isYouTube: true,
  },
  {
    id: 8,
    title: 'RIDETOSEVENELEVEN',
    window_title: 'RIDETOSEVENELEVEN',
    alt_title: 'MC RIDE GOES TO THE STORE',
    url: 'https://www.youtube.com/embed/DKDvPdll1D4',
    date: '11-24-2019',
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
      title: `~/X/${video.window_title}`,
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
    <div style="position:relative; padding-top:56.25%; border-bottom: 3px solid #FDFDFD"><iframe src="${video.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
    </div>
    <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1; background: #141414; width:text-align: center;">
    <h2 style="color: #FDFDFD; margin: 0.3em 0;">${video.alt_title}</h2>
    ${video.date} - <a href="${video.source}" target="_blank" style="color: #505050; text-decoration: none; font-size: 14px; margin-top: 8px;">Watch Original Here</a>
    
    <p style="color: #FDFDFD; padding-bottom: 0.5em;>Description:</p>
    <p style="color: #FDFDFD; whiteSpace: 'pre-line'; padding-bottom: 0.5em; line-height: 1em; border: 2px solid #FDFDFD;">${video.description}</p>
    </div>
    `;
  };

  return (
    <>
    <div className="videos-header" style={{ color: '#FDFDFD', fontSize: 24, margin: 0, overflowX: 'visible', overflowY: 'hidden', display: 'flex', marginTop: -8, whiteSpace: 'nowrap', marginBottom: 16}}>
      <div style={{fontFamily: 'Pixeloid Sans', flexDirection: 'column', display: 'flex', minWidth: 128, borderBottom: '2px solid black', width: '40%', paddingRight: 30}}>
      <p className="videos-header-title" style={{ width: '100px', fontFamily: 'Pixeloid Sans Bold', fontSize: 40, marginLeft: 8}}>VIDEOS</p>
      <p className="videos-header-subtitle" style={{ fontSize: 14, width: '168px', lineHeight: 1, marginTop: -8, marginLeft: 12, marginRight: 8, textWrap: 'wrap'}}>I made a few of these here and there.. and you can watch em on here or <a href="https://youtube.com/ecksposting" target="_blank">YouTube!</a></p>
      </div>
      <div className="videos-featured"
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 1,
    padding: 4,
    borderRadius: 0,
    borderBottom: '2px solid black',
    maxWidth: 480,
    cursor: 'pointer',
    lineHeight: 1,
  }}
  onClick={() => openVideoWinBox(videos[1])}
>
  <div style={{ display: 'flex', alignItems: 'center', }}>
    <img
      src={featured_vhs}
      alt={featured[0].title}
      style={{
        width: 120,
        height: 140,
        objectFit: 'contain',
        paddingRight: 8,
        marginTop: 4,
      }}
    />
    <span
      className="featured-video-title"
      style={{
        paddingLeft: 4,
        paddingRight: 16,
        color: 'white',
        fontSize: 26,
        lineHeight: 1.25,
        fontWeight: 'bold',
        display: 'block',
        width: '280px',
        textWrap: 'wrap',
      }}
    >
      <span>-  FEATURED </span>
      <br></br><span>{featured[0].title}</span>
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
          width: 180, border: '2px ridge #222', borderRadius: 1, height: '100%', margin: 'auto', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflow: 'hidden',
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
      {video.title}{video.isYouTube ? YouTubeIcon : ArrowIcon}
</span>
      </div>
      
    ))}
    

    
      </div>
      <span className="bottom-tag" style={{marginTop: 16, fontFamily: 'Sans Nouveaux'}}  >- press play. trust the process. -</span>
      <span style={{ textAlign: 'center' }}>...</span>
      </>
    );
};

export default Videos;