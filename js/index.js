// Model

var current = {
  num: 0,
  high: false,
  low: false
};

// View

function renderCount() {
//  $('#bigNumber').html('');
  if (current.num > 100) {
    current.high = true;
  } else {
    current.high = false;
  }
  if (current.num < 0) {
    current.low = true;
  } else {
    current.low = false;
  }

  var source = $("#count-template").html();
  var template = Handlebars.compile(source);

  var currentCount = template(current);
  $('#bigNumber').html(currentCount);

}

// Controller

function setup() {
  renderCount();
  $('#upButton').on('click', add);
  $('#downButton').on('click', subtract);
  $('#resetButton').on('click', reset);
}

function add() {
  current.num++;
  renderCount();
}

function subtract() {
  current.num--;
  renderCount();
}

function reset() {
  current.num = 0;
  renderCount();
}

 $(document).ready(setup);