const initializeBoard = () => {
  return [[], [], [], [], [], [], [], [], [], []]
}

let board = initializeBoard();

getOneOrZero = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max)).map(index => {
  console.log(index)
  if (index == 1) {
    return '*';
  } if (index == 0) {
    return ' ';
  }
});

randomBoard = board.map(index => {
  return getOneOrZero(10, 1)
})

module.exports = { initializeBoard, getOneOrZero };
