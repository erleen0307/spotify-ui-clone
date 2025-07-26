import Title from './Title.jsx';
import Playlist from './Playlist.jsx';
import Podcast from './Podcast.jsx';
import Footer from './Footer.jsx';
import './Library.css';

function Library(){
    return(
        <div className='mainLibraryFrame'>
            <Title />
            <Playlist />
            <Podcast />
            <Footer />
        </div>
    );
};

export default Library;