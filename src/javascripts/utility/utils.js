
const printToDom = (selector, printToText) => {
  $(selector).html(printToText);
};

export default { printToDom };
