import Songs from './Songs/Songs.jsx';
import Artists from './Artists/Artists.jsx';
import Albums from './Albums/Albums.jsx';
import Radios from './Radio/Radio.jsx';
import Charts from './Charts/Charts.jsx';
import Footer from './Footer/Footer.jsx';

import './MainSection.css';

function MainSection(){
    return(
        <main className='MainFrame'>
            <Songs />
            <Artists />
            <Albums />
            <Radios />
            <Charts />
            <Footer />
        </main>
    );
};

export default MainSection;