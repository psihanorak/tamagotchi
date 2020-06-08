import utils from '../utility/utils';

let strength = 100;

const createFightQuadrant = () => {
  let domString = '';

  domString += `<div>
                <h2>FIGHT</h2>
                <h4>Noble status: ${strength}</h4>
                <button id="runAway"><i class="runAway"></i></button>
                <button id="violence"><i class="violence"></i></button>
                </div>`;

  utils.printToDom('#fight', domString);
};

const runAway = () => {
  strength = Math.min(strength + 1, 100);
  createFightQuadrant();
};

const violence = () => {
  strength -= 10;
  if (strength < 0) strength = 0;
  createFightQuadrant();
};

$('body').on('click', '#runAway', runAway);
$('body').on('click', '#violence', violence);

const getStrength = () => `${strength}`;

export default { createFightQuadrant, getStrength };
