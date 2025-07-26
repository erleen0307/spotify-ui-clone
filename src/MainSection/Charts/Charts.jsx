import './Charts.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Image1 from '/src/assets/Charts/top-songs-global.png';
import Image2 from '/src/assets/Charts/top-songs-india.png';
import Image3 from '/src/assets/Charts/top-50-global.png';
import Image4 from '/src/assets/Charts/top-50-india.png';
import Image5 from '/src/assets/Charts/viral-50-global.png';
import Image6 from '/src/assets/Charts/viral-50-india.png';

function Charts() {
  const charts = [
    { url: Image1, name: "Top Songs Global" },
    { url: Image2, name: "Top Songs India" },
    { url: Image3, name: "Top 50 Global" },
    { url: Image4, name: "Top 50 India" },
    { url: Image5, name: "Viral 50 Global" },
    { url: Image6, name: "Viral 50 India" },
  ];

  function Card({ url, name }) {
    return (
      <div className="chartCardWrapper">
        <div className="chartCard">
          <img
            src={url || 'https://via.placeholder.com/150'}
            alt={name}
            className="chartImage"
          />
          <div className="playButtonChart">
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <p className="chartName">{name}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="chartSection">
      <div className="Headline">
        <h2 className="Title">Featured Charts</h2>
        <a href="#" className="showAllLink">
          Show All
        </a>
      </div>

      <div className="chartsGrid">
        {charts.map((chart, index) => (
          <Card key={index} url={chart.url} name={chart.name} />
        ))}
      </div>
    </section>
  );
}

export default Charts;
