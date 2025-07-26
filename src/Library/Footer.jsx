import './Library.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 

function Footer(){
    return(
    <section>
        <div className='EmptyDiv'>space</div>
        <div className='linksDiv'>
            <a href='#'>Legal</a>
            <a href='#'>Safety & Privacy Center</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Cookies</a>
            <a href='#'>About Ads</a>
            <a href='#'>Accessibility</a>
        </div>
        <div className='Misc'>
            <a href='#' className='cookieLink'>Cookies</a>
            <button className='LanguageBtn'>
                <FontAwesomeIcon icon={faGlobe} className='globeIcon'/> 
                English
            </button>
        </div>
    </section>
    );
};

export default Footer;
