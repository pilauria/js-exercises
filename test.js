const directions = [
  'Starting point: Ironhack Madrid',
  '➔ Turn right toward P. de la Chopera',
  '← At the roundabout, take the 1st exit onto P. de la Chopera',
  '* Lune Creperie P. de la Chopera 33, Madrid',
];

function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(directions[step]);

      if (!directions[step]) reject('Instructions not found.');
      else resolve();
    }, 2000);
  });
}

obtainDirections(0)
  .then(() => obtainDirections(1))
  .then(() => obtainDirections(2))
  .then(() => obtainDirections(3))
  .then(() => console.log('You arrived at your destination!'))
  .catch(err => console.log(err));

////////////////////////////////////////////////
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log('error'));
