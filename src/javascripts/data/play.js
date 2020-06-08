import utils from '../utility/utils';

let fun = 50;

const createPlayQuadrant = () => {
  let domString = '';

  domString += `<div>
                <h2>PLAY</h2>
                <h4>Fun status: ${fun}</h4>
                <button id="superFun"><i class="superFun"></i></button>
                <button id="slightFun"><i class="slightFun"></i></button>
                </div>`;

  utils.printToDom('#play', domString);
};

const superFun = () => {
  fun = Math.min(fun + 50, 100);
  createPlayQuadrant();
};

const slightFun = () => {
  fun = Math.min(fun + 2, 100);
  createPlayQuadrant();
};

$('body').on('click', '#superFun', superFun);
$('body').on('click', '#slightFun', slightFun);

export default { createPlayQuadrant };
