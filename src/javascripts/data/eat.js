import utils from '../utility/utils';

let full = 100;

const createEatQuadrant = () => {
  let domString = '';

  domString += `<div>
                <h2>EAT</h2>
                <h4>Hunger status: ${full}</h4>
                <button id="healthy"><i class="healthy"></i></button>
                <button id="junk"><i class="unhealthy"></i></button>
                </div>`;

  utils.printToDom('#eat', domString);
};

const healthy = () => {
  full = Math.min(full + 10, 100);
  createEatQuadrant();
};

const junk = () => {
  full -= 3;
  if (full < 0) full = 0;
  createEatQuadrant();
};

$('body').on('click', '#healthy', healthy);
$('body').on('click', '#junk', junk);

export default { createEatQuadrant };
