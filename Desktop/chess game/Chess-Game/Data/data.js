export function Square(color, id, piece) {
  return {
    color,
    id,
    piece,
  };
}

function SquareRow(rowId) {
  const squareRow = [];
  const abcd = ["a", "b", "c", "d", "e", "f", "g", "i"];

  if(rowId % 2 ==0){
    abcd.forEach((element, idx) => {
      if (idx % 2 == 0) {
        squareRow.push(Square("white", element + rowId, null));
      } else {
        squareRow.push(Square("black", element + rowId, null));
      }
    });
  }
  else{
    abcd.forEach((element, idx) => {
      if (idx % 2 == 0) {
        squareRow.push(Square("black", element + rowId, null));
      } else {
        squareRow.push(Square("white", element + rowId, null));
      }
    });
  }
  console.log(squareRow);

  return squareRow;
}

export function initGame() {
  return [
    SquareRow(8),
    SquareRow(7),
    SquareRow(6),
    SquareRow(5),
    SquareRow(4),
    SquareRow(3),
    SquareRow(2),
    SquareRow(1),
  ];
}
