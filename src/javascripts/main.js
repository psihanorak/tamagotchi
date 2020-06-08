import 'bootstrap';
import '../styles/main.scss';
import eat from './data/eat';
import play from './data/play';

const init = () => {
  eat.createEatQuadrant();
  play.createPlayQuadrant();
};

init();
