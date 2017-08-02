/**
 * [fullUrl description]
 * @param  {Strings} arr [Array of users names]
 * @return {String}      [String including url]
 */
function fullUrl(arr) {
  const url = 'https://wind-bow.glitch.me/twitch-api/users/';
  return arr.map(user => (url + user));
}


/**
 * Return fetched json to var inside generator
 * @param  {Array} arr [Usernames including URK]
 * @return {Object}     [Implicit return object arrays]
 */
function allIds(arr) {
  Promise.all(arr.map(link => fetch(link)
    .then(data => data.json()))) // end .map
    .then(links => iterator.next(links));
}

/**
 * Generator
 * @return {Generator} [description]
 */
function* apiCalls() {
  let userIds = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp',
    'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'];
  userIds = fullUrl(userIds);

  const users = yield allIds(userIds);
  console.log(users);
}

const iterator = apiCalls();
iterator.next();
