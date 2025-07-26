import './Songs.css';

import ShapeOfYou from '/src/assets/Songs/shape-of-you.jpg';
import WhatItIs from '/src/assets/Songs/what-it-is.jpg';
import WannaBeYours from '/src/assets/Songs/wanna-be-yours.jpg';
import Dmd from '/src/assets/Songs/diet-mountain-dew.jpg';
import Smile from '/src/assets/Songs/die-with-a-smile.jpg';
import SeoulCity from '/src/assets/Songs/seoul-city.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function Songs() {
  const songs = [
    {
      url: ShapeOfYou,
      name: "Shape Of You",
      info: "Ed Sheeran",
    },
    {
      url: WhatItIs,
      name: "What It Is (Solo Version)",
      info: "Doechii",
    },
    {
      url: WannaBeYours,
      name: "I Wanna Be Yours",
      info: "Arctic Monkeys",
    },
    {
      url: Dmd,
      name: "Diet Mountain Dew",
      info: "Lana Del Ray",
    },
    {
      url: Smile,
      name: "Die With A Smile",
      info: "Bruno Mars, Lady Gaga",
    },
    {
      url: SeoulCity,
      name: "Seoul City",
      info: "JENNIE",
    },
  ];

  function Card({ url, name, info }) {
  return (
    <div className="songCardWrapper">
      <img
        src={url || "https://via.placeholder.com/150"}
        alt={name}
        className="songImage"
      />
      <div className="playButtonSong">
        <FontAwesomeIcon icon={faPlay} />
      </div>
      <h4 className="songName">{name}</h4>
      <p className="songInfo">{info}</p>
    </div>
  );
}


  return (
    <section className="songsSection">
      <div className="Headline">
        <h2 className='Title'>Trending Songs</h2>
        <a href="#" className='showAllLink'>Show all</a>
      </div>

      <div className="songGrid">
        {songs.map((song, index) => (
          <Card
            key={index}
            url={song.url}
            name={song.name}
            info={song.info}
          />
        ))}
      </div>
    </section>
  );
}

export default Songs;
