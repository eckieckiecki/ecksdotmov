import './AboutMe.css';

import AboutMeImage from '../../assets/aboutem.gif';

const AboutMe = () => {
  return (
    
    <>
    <div style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
    <div className="about-me" style={{ display: 'flex', margin: '0px 10px', }}>
      <div className="about-me-border" style={{lineHeight: 1}}>
        <p>
        <span className='ECKS-NAME' style={{marginRight: 8}}>
          ECKS 
        </span>
        <span className="ECKS-BIO">
        is a self-driven creative powerhouse which prospers through 86 degrees of <span className='bigdeal'>visuals</span>, <span className='bigdeal'>audio</span>, and <span className='bigdeal'>wisdom.</span> Everything you see here is formed from a collection of flickering synapses and questionable judgment.</span>
        </p>
        <p>
        <span className="ECKS-BIO">Some of my work can be seen at <a href="https://tornada/net" target="_blank"><span className='bigdeal'>Tornada</span></a> - an animation supergroup with an all-star lineup of me and my relatives.</span>
        </p>
        <span className="ECKS-BIO">I spend my waking hours dabbling in:</span>

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, auto)',
            gap: '8px 24px',
            listStyleType: 'disc',
            margin: '16px 0',
            paddingLeft: '16px',
            maxWidth: 500,
            lineHeight: 1,
            fontSize: 11,
            textRendering: 'optimizeLegibility'
          }}
        >
          <li>After Effects</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere</li>
          <li>VEGAS Pro</li>
          <li>Blender</li>
          <li>OBS</li>
          <li>FL Studio</li>
          <li>Avidemux</li>
          <li>Tux Paint</li>
          <li>and a dream!</li>
        </ul>
        <span className="ECKS-BIO">
          <p>
          Anyone looking to get in touch (or just say hi) can hit me via the links below or on the <span className='bigdeal'>contact</span> page.
          </p>        
        </span>
      </div>
      <img src={AboutMeImage} style={{marginLeft: 24, marginTop: 16, width: 128, height: 128}}/>
    </div>
    </div>
    </>
  );
};

export default AboutMe;