import 'bootstrap';
import '../styles/main.scss';
import eat from './data/eat';
import play from './data/play';
import fight from './data/fight';
import sleep from './data/sleep';
import progress from './data/progress';

const init = () => {
  eat.createEatQuadrant();
  play.createPlayQuadrant();
  fight.createFightQuadrant();
  sleep.createSleepQuadrant();
  progress.createProgressQuadrant();
};

init();
