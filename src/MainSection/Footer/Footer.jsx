import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';
function Footer() {
  return (
    <footer className='footerAll'>
      <div className='footerContent'>

        <hr className='divider' />

        <div className='bottomSection'>
          <div className='listsBlock'>
            <ul className='list'>
              <li className='main'>Company</li>
              <li><a>About</a></li>
              <li><a>Jobs</a></li>
              <li><a>For the Record</a></li>
            </ul>

            <ul className='list'>
              <li className='main'>Communities</li>
              <li><a>For Artists</a></li>
              <li><a>Developers</a></li>
              <li><a>Advertising</a></li>
              <li><a>Investors</a></li>
              <li><a>Vendors</a></li>
            </ul>

            <ul className='list'>
              <li className='main'>Useful Links</li>
              <li><a>Support</a></li>
              <li><a>Free Mobile App</a></li>
              <li><a>Popular by Country</a></li>
            </ul>

            <ul className='list'>
              <li className='main'>Spotify Plans</li>
              <li><a>Premium Individual</a></li>
              <li><a>Premium Duo</a></li>
              <li><a>Premium Family</a></li>
              <li><a>Premium Student</a></li>
              <li><a>Spotify Free</a></li>
            </ul>
          </div>
          <div className='logosBlock'>
            <FontAwesomeIcon icon={faInstagram} 
            className="InstaLogo" 
            title="Instagram" />

            <FontAwesomeIcon icon={faTwitter} 
            className="TwitterLogo"
            title= "Twitter" />
            
            <FontAwesomeIcon icon={faFacebook} 
            className="FacebookLogo" 
            title="Facebook" />
          </div>
        </div>

        <hr className='divider' />
        <p className='CopyrightContent'>
            <FontAwesomeIcon icon= {faCopyright} className='CopyrightIcon' />
            2025 Spotify AB
        </p>
      </div>
    </footer>
  );
}

export default Footer;
