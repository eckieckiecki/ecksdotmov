import './ContactMe.css';
import icons from '../../assets/images.js';

const Contact = () => {
  return (
    <div style={{ color: 'black', fontSize: 20, overflow: 'hidden', marginLeft: 12, marginRight: 12, marginTop: 12, paddingBottom: 4, fontFamily: 'Sans Nouveaux', textRendering: 'optimizeLegibility'}}>
      <span style={{fontSize:14, marginTop: 16, marginBottom: 8}}>Email:</span>
        <a href="mailto:spam@3cks.net" target="_blank"><div className='email' style={{ display: 'flex',border: '2px solid #222', fontWeight: 'bold', textAlign: 'center', alignContent: 'center', paddingTop: 12, marginBottom: 16, paddingBottom: 16, marginTop: 8, lineHeight: 1}}>
          <span style={{margin: '0 auto'}}><img src={icons.desktop_contact} style={{ width: 24, height: 24, marginRight: 4}}/> - spam@3cks.net</span>
        </div></a>
        <span style={{fontSize:14, marginTop: 16}}>Socials:</span>
            <div style={{marginBottom: 32, alignContent: 'center', textAlign: 'center',display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(2, auto)', listStyleType: 'disc', margin: '8px auto', lineHeight: 1, fontSize: 14, border: '2px solid #222'}}>
            <span className='icon'><a href='https://youtube.com/ecksposting' target="_blank"><img src={icons.youtube} alt="YouTube" style={{ width: 48, height: 48}} /></a></span>
            <span className='icon'><a href='https://instagram.com/ecksposting' target="_blank"><img src={icons.instagram} alt="Instagram" style={{ width: 48, height: 48}} /></a></span>
            <span className='icon'><a href='https://twitter.com/ecksposting' target="_blank"><img src={icons.xitter} alt="Xitter" style={{ width: 48, height: 48}} /></a></span>
            <span className='icon'><a href='https://steamcommunity.com/ecksposting' target="_blank"><img src={icons.steam} alt="Steam" style={{ width: 48, height: 48}} /></a></span>
            <span className='icon'><a href='https://eckslol.newgrounds.com' target="_blank"><img src={icons.newgrounds} alt="Newgrounds" style={{ width: 48, height: 48}} /></a></span>
            </div>

            <span className="bottom-tag" style={{marginTop: 32}} >- your move. -</span>
    </div>
  );
};

export default Contact;