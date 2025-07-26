import './Radio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Diljit from '/src/assets/Radio/diljit.jpeg';
import HipHop from '/src/assets/Radio/hip-hop.jpeg';
import KaranAujla from '/src/assets/Radio/karan-aujla.jpeg';
import KDanceParty from '/src/assets/Radio/kpop-dance.jpeg';
import KDH from '/src/assets/Radio/kpop-demon-hunters.jpeg';
import Lofi from '/src/assets/Radio/lofi-loft.jpg';

function Radios() {
  const radios = [
    { url: Diljit, name: 'Diljit Dosanjh Radio' },
    { url: HipHop, name: 'Hip Hop Radio' },
    { url: KaranAujla, name: 'Best Of Karan Aujla' },
    { url: KDanceParty, name: 'Kpop Dance Party' },
    { url: KDH, name: 'Kpop Demon Hunters Radio' },
    { url: Lofi, name: 'Lofi Loft' },
  ];

  function Card({ url, name }) {
    return (
      <div className="radioCardWrapper">
        <img
          src={url || 'https://via.placeholder.com/150'}
          alt={name}
          className="radioImage"
        />
        <FontAwesomeIcon icon={faPlay} className="playButtonRadio" /> 
        <p className="radioName">{name}</p>
      </div>
    );
  }

  return (
    <section className="radioSection">
      <div className="Headline">
        <h2 className="Title">Popular radio</h2>
        <a href="#" className="showAllLink">
          Show All
        </a>
      </div>

      <div className="radiosGrid">
        {radios.map((radio, index) => (
          <Card key={index} url={radio.url} name={radio.name} />
        ))}
      </div>
    </section>
  );
}

export default Radios;
