function ajax(url) {
  setTimeout(() => url, Math.random() * 5000);
}

const data = ajax('http://someurl.com');

console.log(data);
