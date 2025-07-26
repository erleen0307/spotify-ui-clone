import './Artists.css';

import Adele from '/src/assets/Artists/adele.jpg';
import Doechii from '/src/assets/Artists/doechii.jpg';
import EdSheeran from '/src/assets/Artists/ed-sheeran.jpg';
import Jennie from '/src/assets/Artists/jennie.jpg';
import LadyGaga from '/src/assets/Artists/lady-gaga.jpg';
import Shakira from '/src/assets/Artists/shakira.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Artists() {
  const artists = [
    { url: Adele, name: 'Adele' },
    { url: Doechii, name: 'Doechii' },
    { url: EdSheeran, name: 'Ed Sheeran' },
    { url: Jennie, name: 'JENNIE' },
    { url: LadyGaga, name: 'Lady Gaga' },
    { url: Shakira, name: 'Shakira' },
  ];

  function Card({ url, name }) {
    return (
      <div className="artistCardWrapper">
        <img
          src={url || 'https://via.placeholder.com/150'}
          alt={name}
          className="artistImage"
        />
        <div className="playButtonArtist">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <h4 className="artistName">{name}</h4>
        <p className="artistInfo">Artist</p>
      </div>
    );
  }


  return (
    <section className="artistSection">
      <div className="Headline">
        <h2 className="Title">Popular Artists</h2>
        <a href="#" className="showAllLink">
          Show All
        </a>
      </div>

      <div className="artistsGrid">
        {artists.map((artist, index) => (
          <Card key={index} url={artist.url} name={artist.name} />
        ))}
      </div>
    </section>
  );
}

export default Artists;
