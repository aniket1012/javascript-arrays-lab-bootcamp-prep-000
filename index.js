var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  var name = "Ralph"
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(kittens) {
  kittens.unshift();
  return kittens;
}