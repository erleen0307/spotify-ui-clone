import './Albums.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import BornPink from '/src/assets/Albums/born-pink.jpg';
import KpopDH from '/src/assets/Albums/kpop-demon-hunters.jpg';
import PaintTheTownRed from '/src/assets/Albums/paint-the-town-red.jpg';
import Positions from '/src/assets/Albums/positions.jpg';
import Ruby from '/src/assets/Albums/ruby-jennie.jpg';
import HotPink from '/src/assets/Albums/hot-pink.jpg';

const albums = [
  {
    url: BornPink,
    name: "BORN PINK",
    info: "BLACKPINK",
  },
  {
    url: KpopDH,
    name: "Kpop Demon Hunters",
    info: "Kpop Demon Hunters",
  },
  {
    url: PaintTheTownRed,
    name: "Paint The Town Red",
    info: "Doja Cat",
  },
  {
    url: Positions,
    name: "Positions",
    info: "Ariana Grande",
  },
  {
    url: Ruby,
    name: "RUBY",
    info: "JENNIE",
  },
  {
    url: HotPink,
    name: "Hot Pink",
    info: "Doja Cat",
  },
];

function AlbumCard({ url, name, info }) {
  return (
    <div className="albumCardWrapper">
      <img
        src={url || "https://via.placeholder.com/150"}
        alt={name}
        className="albumImage"
      />
      <FontAwesomeIcon icon={faPlay} className="playButtonAlbum" />
      <h4 className="albumName">{name}</h4>
      <p className="albumInfo">{info}</p>
    </div>
  );
}

function Albums() {
  return (
    <section className="albumSection">
      <div className="Headline">
        <h2 className="Title">Popular albums and singles</h2>
        <a href="#" className="showAllLink">Show all</a>
      </div>

      <div className="albumGrid">
        {albums.map((album, index) => (
          <AlbumCard
            key={index}
            url={album.url}
            name={album.name}
            info={album.info}
          />
        ))}
      </div>
    </section>
  );
}

export default Albums;
