// check if given matrix is magic square or not.

// TODO: Implement this method
function checkMagicSquare(N, mat) {
  var sumd1 = 0,
    sumd2 = 0;
  for (var i = 0; i < N; i++) {
    sumd1 = sumd1 + mat[i][i];
    sumd2 = sumd2 + mat[i][N - 1 - i];
  }

  if (sumd1 != sumd2) return false;

  for (var i = 0; i < N; i++) {
    var colSum = 0;
    var rowSum = 0;
    for (var j = 0; j < N; j++) {
      rowSum += mat[i][j];
      colSum += mat[j][i];
    }
    if (rowSum != colSum || colSum != sumd1) return false;
  }
  return true;
}
