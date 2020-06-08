import 'bootstrap';
import '../styles/main.scss';
import eat from './data/eat';
import play from './data/play';
import fight from './data/fight';
import sleep from './data/sleep';

const init = () => {
  eat.createEatQuadrant();
  play.createPlayQuadrant();
  fight.createFightQuadrant();
  sleep.createSleepQuadrant();
};

init();
