function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => result(result));
  });
}

storage(bigOak, 'enemies').then(value => console.log('Got', value));
