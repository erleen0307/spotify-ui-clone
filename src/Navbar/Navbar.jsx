import './Navbar.css';
import Logo from '../assets/logo.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'; 
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'; 

function Navbar(){

    return(
        <nav className='navbar'>
            {/* LEFT SIDE */}
            <img className='spotifyLogo' src={Logo} alt="Logo" />

            <FontAwesomeIcon icon={faHouse} className='homeIcon' title="Home" />
            <div className='searchBar'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='glassIcon' title="Search" />
                <input type="text" className='inputField'
                placeholder='What do you want to play?' />
                <p>|</p>
                <FontAwesomeIcon icon={faWindowRestore} className='browseIcon' title="Browse" />
            </div>

            {/* RIGHT SIDE ICONS */}
            <a href='#'> Premium </a>
            <a href='#'> Support </a>
            <a href='#'> Download </a>
            <h4>|</h4>
            <a href='#'> <FontAwesomeIcon icon={faCircleDown} /> Install App </a>
            <a href='#'> Sign Up </a>

            <button className='logInBtn'> Log In </button>
        </nav>
    );
};

export default Navbar;