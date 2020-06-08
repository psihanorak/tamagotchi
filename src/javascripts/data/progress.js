import utils from '../utility/utils';

/*
import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';

eat.getFull()
play.getFun()
fight.getStrength()
sleep.getEnergy()
*/

const createProgressQuadrant = () => {
  let domString = '';

  domString += `<div>
                <h2>OVERALL HEALTH</h2>
                <h4>Eevee's health: </h4>
                </div>`;

  utils.printToDom('#progress', domString);
};

export default { createProgressQuadrant };
