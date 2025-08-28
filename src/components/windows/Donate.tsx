import './Donate.css';
import icons from '../../assets/images.js'; 

const Donate = () => {
  return (
    <><div style={{ color: 'black', fontSize: 24, overflow: 'hidden', margin: 12, paddingBottom: 4, fontFamily: 'Sans Nouveaux'}}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <img
          src={icons.moneyspin}
          alt="Donate"
          style={{ width: 96, height: 128, objectFit: 'contain', marginTop: 8 }} />
        <div style={{ flex: 1, lineHeight: 1, fontSize: 12, marginBottom: 8 }}>
          <span>Paypal:</span>
          <a href="https://paypal.me/ecksposting" target="_blank">
          <div className='paypal-button' style={{display: 'flex', border: '3px ridge #222', fontWeight: 'bold', textAlign: 'center', alignItems: 'center', padding: 8, marginBottom: 8,marginTop: 8, lineHeight: 1, fontSize: 12}}>
          <span style={{ margin: '0 auto' }}>/ecksposting</span>
          </div>
          </a>
          <span>Cashapp:</span>
          <a href="https://cash.app/$eckslol" target="_blank">
          <div className='cashapp-button' style={{
            display: 'flex',
            border: '3px ridge #222',
            fontWeight: 'bold',
            textAlign: 'center',
            alignItems: 'center',
            padding: 8,
            marginBottom: 24,
            marginTop: 8,
            lineHeight: 1,
            fontSize: 12
          }}>
            
              <span style={{ margin: '0 auto' }}>$eckslol</span>
            
          </div>
          </a>
        </div>
      </div>
      <span className="bottom-tag" >- preciate it boss. -</span>
    </div></>
  );
};

export default Donate;