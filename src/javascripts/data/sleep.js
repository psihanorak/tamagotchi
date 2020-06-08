import utils from '../utility/utils';

let energy = 50;

const createSleepQuadrant = () => {
  let domString = '';

  domString += `<div>
                <h2>SLEEP</h2>
                <h4>Energy status: ${energy}</h4>
                <button id="nap"><i class="nap"></i></button>
                <button id="slumber"><i class="slumber"></i></button>
                </div>`;

  utils.printToDom('#sleep', domString);
};

const nap = () => {
  energy = Math.min(energy + 50, 100);
  createSleepQuadrant();
};

const slumber = () => {
  energy = Math.min(energy + 60, 100);
  createSleepQuadrant();
};

$('body').on('click', '#nap', nap);
$('body').on('click', '#slumber', slumber);

const getEnergy = () => `${energy}`;

export default { createSleepQuadrant, getEnergy };
