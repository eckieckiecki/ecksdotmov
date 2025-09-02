import './AboutMe.css';
import '../../assets/images.js'; 


  const Credits = () => {
  return (
    <>
      <div className='notepad' style={{ fontSize: 8, fontFamily: 'Sans Nouveaux', overflow: 'hidden', paddingLeft: 16, paddingRight: 16, textRendering: 'optimizeLegibility', lineHeight: 1.4}}>

        <p>
        <span className="notepad-header">ADMIN</span>
        <br />
        <span>
        Like most of what you see on here, this website was designed and built by the homeboy who's running it! He couldn't do it, however, without the help of:
        </span>
        </p>

        <p className="links" style={{ fontSize: 8, lineHeight: 1.5}}>
        <span className="notepad-header">CODE</span>
        <span>
        <br />
        - <a href="https://nextapps-de.github.io/winbox/" target="_blank">Winbox.js</a> | Window manager 
        <br />
        - <a href="https://github.com/react95-io/React95" target="_blank">React95</a> | UI component library
        <br />
        - <a href="https://jdan.github.io/98.css/" target="_blank">98.css</a> | CSS for additional UI
        <br />
        - <a href="https://animate.style/" target="_blank">animate.css</a> | CSS animations
        <br />
        - <a href="https://oudkee.neocities.org/tutorials/tutcrt" target="_blank">@oudkee</a> | CRT Effect
        </span>
        </p>
        <span className="notepad-header">ART</span>
        <br />
        <span>
        - Loading screen art by <a href="https://x.com/luvbappy" target="_blank">@luvbappy</a>
        <br />
        - "About Me" illustration by <a href="https://www.instagram.com/coledawg2001/" target="_blank">@ColeDawg</a>
        </span>
        
        <p>
        <span className="notepad-header">SPECIAL THANKS</span>
        <br />
        - Friends of the site: 
        <span>
        <br />
        <a href="https://lucke.neocities.org" target="_blank">lucke.neocities.org</a>, <a href="https://4nx4e.lol" target="_blank">4nx4e.lol</a>
        </span>
        <br />
        <span>
        - YOU! (Yes, you!) for being here!
        </span>
        <br />
        </p>

      </div>
    </>
  );
};

export default Credits;