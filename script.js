function fullUrl(arr) {
  const url = 'https://wind-bow.glitch.me/twitch-api/users/';
  return arr.map(arr => (url + arr));
}

function allIds(arr) {
  arr = fullUrl(arr);
  Promise.all(arr.map(link => fetch(link)
    .then(link => link.json()))) //end .map
    .then(links => iterator.next(links));
}

function *apiCalls() {
  let userIds = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
  "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  const users = yield allIds(userIds);
  console.log(users);


}

const iterator = apiCalls();
iterator.next();
