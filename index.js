var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(kittens) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(kittens) {
  kittens.unshift();
  return kittens;
}