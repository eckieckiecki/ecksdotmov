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

export const videos = [
  {
    id: 0,
    title: 'BAKLAFA',
    window_title: 'BAKLAVA-IS-FUCKING-AWESOME',
    alt_title: 'BAKLAVA is FUCKING AWESOME',
    url: 'https://iframe.mediadelivery.net/embed/393622/72c5d760-6c3d-4f7f-b01f-4c0586212526?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: 'https://3cks.net/watch/baklava-is-fucking-awesome',
    date: '06-2025',
    description: 'Fresh hot two-pack of some commissions I did in June 2025... \n First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/baklafa.jpg',
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
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/colorbros.jpg',
    isYouTube: false,
  },
  {
    id: 2,
    title: 'HOT THEM SUMMER!',
    window_title: 'HOT-THEM-SUMMER',
    alt_title: 'HOT THEM SUMMER!',
    url: 'https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
    source: 'https://3cks.net/watch/hot-them-summer',
    date: '11-24-2022',
    description: 'Lyric video I did for my homegirl Lambs. Threw this together in about a day, just in time for the album she had just released back then. Peace to bluvelv who is on the song as well.',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/lambs.jpg',
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
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/knowledgegod.jpg',
    isYouTube: false,
  },
    {
    id: 4,
    title: 'RIDETOSEVENELEVEN',
    window_title: 'MC-RIDE-GOES-TO-THE-STORE',
    alt_title: 'MC RIDE GOES TO THE STORE',
    url: 'https://www.youtube.com/embed/DKDvPdll1D4',
    source: 'https://youtu.be/DKDvPdll1D4',
    date: '11-24-2019',
    description: 'A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/ride.jpg',
    isYouTube: true,
  },
  {
    id: 5,
    title: 'FED UP! (IN VR)',
    window_title: 'FED-UP-IN-VR',
    alt_title: 'FEDUP!INVR!',
    url: 'https://www.youtube.com/embed/9m8US6X9gWs',
    source: 'https://www.youtube.com/watch?v=9m8US6X9gWs',
    date: '08-31-2021',
    description: 'This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/stride.jpg',
    isYouTube: true,
  },
  {
    id: 6,
    title: 'CHOPPA WEDNESDAY!',
    window_title: 'CHOPPA-WEDNESDAY',
    alt_title: 'CHOPPA WEDNESDAY',
    url: 'https://www.youtube.com/embed/G6ik_SLRulQ',
    source: 'https://www.youtube.com/watch?v=G6ik_SLRulQ',
    date: '10-07-2020',
    description: 'Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/choppa.jpg',
    isYouTube: true,
  },
  {
    id: 7,
    title: 'BALD! (TF2)',
    window_title: 'BALD',
    alt_title: 'BALD! (TF2)',
    url: 'https://www.youtube.com/embed/K3XvXyNBrHA',
    source: 'https://www.youtube.com/watch?v=K3XvXyNBrHA',
    date: '06-10-2020',
    description: 'This one came to me in a dream. It would ultimately serve as the beginning of a short series that kept me occupied during a weird time in my life. Most of my days were being eaten up by stress that I would channel into learning Source Filmmaker in the only way I knew how: by making quick lil videos that were asking to get several effects thrown on in post. Wouldn’t say it’s anywhere near my best work nowadays but I got some fond memories and met some cool people through it. Shoutout to anyone who remembers when I would promote this on TF2 trading sites.',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/bald.jpg',
    isYouTube: true,
  },
  {
    id: 8,
    title: 'SAGGY AND SOGGY',
    window_title: 'SAGGY-AND-SOGGY',
    alt_title: 'SAGGY AND SOGGY - SODIUM CONNECTIONS',
    url: 'https://www.youtube.com/embed/RnXMoazSLo4',
    source: 'https://www.youtube.com/watch?vRnXMoazSLo4',
    date: '05-15-2020',
    description: 'This one’s pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend. We were discussing what a funny name for a kids cartoon would be and landed on "Saggy and Soggy." That name stuck with me and would come up the next time I was in my studio. I wanted to write something I wasn’t used to, which at the time, was a cartoon longer than 30 seconds. Looking at it now, my writing was debatably as goofy as it is now, but for different reasons. While I was tryna get this up on the site, I came across the first draft again and was surprised at what got cut out. Mostly just random lines like Saggy saying "God and his son, Curious George" along with even having cutaway gags in the mix at some point. At the perfect time, Tornada just so happened to form, and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed (and has continued to show) a lotta love to this project, honestly more than what I had originally. That’s what ultimately led to his extended involvement: he wrote the second half of the script and ended up animating most of it. From my end, I offered a music video segment which was my first time using After Effects if you could not already tell..', 
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/sagsog.jpg',
    isYouTube: true,
  },
  {
    id: 9,
    title: 'RIDETOSEVENELEVEN',
    window_title: 'RIDETOSEVENELEVEN',
    alt_title: 'MC RIDE GOES TO THE STORE',
    url: 'https://www.youtube.com/embed/DKDvPdll1D4',
    source: 'https://youtu.be/DKDvPdll1D4',
    date: '11-24-2019',
    description: 'A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.',
    thumbnail: 'https://3cks.b-cdn.net/thumbnails/ride.jpg',
    isYouTube: true,
  },
];

export function openVideoWinBox(video: typeof videos[0]) {
  const videoContainer = document.createElement('div');
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
      videoContainer.remove();
    },
  });

  videoContainer.innerHTML = `
  <div>
  <div style="position:relative; padding-top:56.25%; border-bottom: 2px solid #FDFDFD"><iframe src="${video.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
  </div>
  <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1; background: linear-gradient(0deg,rgb(62, 62, 62) 0%, rgb(16, 16, 16) 86%); width:text-align: center;">
  <h2 style="color: #FDFDFD; margin: 0.3em 0;">${video.alt_title}</h2>
  ${video.date} - <a href="${video.source}" target="_blank" style="color:rgb(255, 0, 0); text-decoration: none; font-size: 14px; margin-top: 10px;">Watch Original Here</a>
  <button id="share-btn" class="share-btn" style="margin-left:10px;background:#222;color:#fff;border:'2px rigid #222';padding:2px 10px;border-radius:4px;cursor:pointer;font-size:13px;">Share</button>
  <p style="color: #FDFDFD; margin-top: 24px; white-space: pre-wrap; font-size: 16px; font-weight: bold;">Description / Notes:</p>
  <div class="description-border" style="font-size: 10pt;padding: 6px; line-height: 1.25em; background-color:rgba(0, 0, 0, 0.4); border: 2px solid #FDFDFD;">
  ${video.description}
  </div>
  </div>
  `;

  setTimeout(() => {
    const shareBtn = videoContainer.querySelector('#share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const shareUrl = `https://3cks.net/watch/${video.window_title.toLowerCase()}`;
        if (navigator.share) {
          navigator.share({
            title: video.title,
            url: shareUrl,
          });
        } else {
          const shareBox = document.createElement('div');
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
              console.log('Window closed');
              shareBox.remove(); 
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
          `;
          ;

          setTimeout(() => {
            const copyBtn = shareBox.querySelector('#copy-share-link');
            if (copyBtn) {
              copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(shareUrl);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => (copyBtn.textContent = 'Copy'), 1200);
              });
            }
          }, 0);
        }
      });
    }
  }, 0);
}

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
  return (
    <>
    <div className="videos-header" style={{ color: '#FDFDFD', fontSize: 24, margin: 0, overflowX: 'visible', overflowY: 'hidden', display: 'flex', marginTop: -8, whiteSpace: 'nowrap', marginBottom: 16}}>
      <div style={{fontFamily: 'Pixeloid Sans', flexDirection: 'column', display: 'flex', minWidth: 128, borderBottom: '2px solid black', width: '40%', paddingRight: 30}}>
      <p className="videos-header-title" style={{ width: '100px', fontFamily: 'Pixeloid Sans Bold', fontSize: 40, marginLeft: 8}}>VIDEOS</p>
      <p className="videos-header-subtitle" style={{ fontSize: 14, width: '168px', lineHeight: 1, marginTop: -8, marginLeft: 12, marginRight: 8, textWrap: 'wrap'}}>I made a few of these here and there.. and you can watch em on here or <a href="https://youtube.com/ecksposting" target="_blank">YouTube!</a></p>
      </div>
      <div className="videos-featured"
  style={{
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: 1, padding: 4, borderRadius: 0, borderBottom: '2px solid black', maxWidth: 480, cursor: 'pointer', lineHeight: 1,
  }}
  onClick={() => openVideoWinBox(videos[1])}
>
  <div style={{ display: 'flex', alignItems: 'center', }}>
    <img
      src={featured_vhs}
      alt={featured[0].title}
      style={{
        width: 120, height: 140, objectFit: 'contain', paddingRight: 8, marginTop: 4,
      }}
    />
    <span
      className="featured-video-title"
      style={{
        paddingLeft: 4, paddingRight: 16, color: 'white', fontSize: 26, lineHeight: 1.25, fontWeight: 'bold', display: 'block', width: '280px', textWrap: 'wrap',
      }}
    >
      <span>-  FEATURED </span>
      <br></br><span>{featured[0].title}</span>
    </span>
  </div>
  <span style={{ color: 'white', fontSize: 14, display: 'block', marginTop: 12, marginLeft: 2, lineHeight: 1,}}>
    {featured[0].description} Art done by <a href={featured[0].featuring_link} target="_blank">@{featured[0].featuring}</a>
  </span>
</div>
  </div>
  
  <div className="videos-grid" style={{ display: 'flex', flexWrap: 'wrap', width: '95%', textAlign: 'center', gap: '12px'}}>
  {videos
    .filter(video => video.id !== 9)
    .map((video) => (
      <button
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
      </button>
      
    ))}
    

    
      </div>
      <span className="bottom-tag" style={{marginTop: 16, fontFamily: 'Sans Nouveaux'}}  >- press play. trust the process. -</span>
      <span style={{ textAlign: 'center' }}>...</span>
      </>
    );
};

export default Videos;