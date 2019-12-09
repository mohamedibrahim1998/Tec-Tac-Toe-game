let cells = document.querySelectorAll('.row > div');
let resDiv = document.querySelector('#res');
let ind = 0;
let toggleX = true;
let c = 0;
let arrBool = [false, false, false, false, false, false, false, false, false];

cells.forEach(function(cell, index) {
  cell.addEventListener('click', function(e) {
    ind = index;
    make(e, ind + 1);
    checkWin();
  });
});

function make(e, i) {
  resDiv.textContent = '';
  if (c === 9) {
    reset();
  } else {
    if (toggleX && arrBool[i - 1] === false) {
      e.target.textContent = 'X';
      toggleX = false;
      ClickOneTimePerGame(i - 1);
      c++;
    } else if (arrBool[i - 1] === false) {
      e.target.textContent = 'O';
      toggleX = true;
      ClickOneTimePerGame(i - 1);
      c++;
    }
  }
}

function reset() {
  ind = 0;
  c = 0;
  arrBool = [false, false, false, false, false, false, false, false, false];
  toggleX = true;
  cells.forEach(function(cell) {
    cell.textContent = '';
  });
}

function checkWin() {
  if (
    (cells[0].textContent === 'X' &&
      cells[1].textContent === 'X' &&
      cells[2].textContent === 'X') ||
    (cells[3].textContent === 'X' &&
      cells[4].textContent === 'X' &&
      cells[5].textContent === 'X') ||
    (cells[6].textContent === 'X' &&
      cells[7].textContent === 'X' &&
      cells[8].textContent === 'X') ||
    (cells[0].textContent === 'X' &&
      cells[3].textContent === 'X' &&
      cells[6].textContent === 'X') ||
    (cells[1].textContent === 'X' &&
      cells[4].textContent === 'X' &&
      cells[7].textContent === 'X') ||
    (cells[2].textContent === 'X' &&
      cells[5].textContent === 'X' &&
      cells[8].textContent === 'X') ||
    (cells[0].textContent === 'X' &&
      cells[4].textContent === 'X' &&
      cells[8].textContent === 'X') ||
    (cells[2].textContent === 'X' &&
      cells[4].textContent === 'X' &&
      cells[6].textContent === 'X')
  ) {
    resDiv.innerHTML = 'X WIN';
    reset();
  } else if (
    (cells[0].textContent === 'O' &&
      cells[1].textContent === 'O' &&
      cells[2].textContent === 'O') ||
    (cells[3].textContent === 'O' &&
      cells[4].textContent === 'O' &&
      cells[5].textContent === 'O') ||
    (cells[6].textContent === 'O' &&
      cells[7].textContent === 'O' &&
      cells[8].textContent === 'O') ||
    (cells[0].textContent === 'O' &&
      cells[3].textContent === 'O' &&
      cells[6].textContent === 'O') ||
    (cells[1].textContent === 'O' &&
      cells[4].textContent === 'O' &&
      cells[7].textContent === 'O') ||
    (cells[2].textContent === 'O' &&
      cells[5].textContent === 'O' &&
      cells[8].textContent === 'O') ||
    (cells[0].textContent === 'O' &&
      cells[4].textContent === 'O' &&
      cells[8].textContent === 'O') ||
    (cells[2].textContent === 'O' &&
      cells[4].textContent === 'O' &&
      cells[6].textContent === 'O')
  ) {
    resDiv.innerHTML = 'O WIN';
    reset();
  } else if (c === 9) {
    resDiv.innerHTML = 'DRAW!';
    reset();
  }
}

function ClickOneTimePerGame(ind) {
  arrBool[ind] = true;
}


