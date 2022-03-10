/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(usernames) {
  const regex = /^[a-z0-9_]+$/;
  if (usernames.length < 1) return false;
  return usernames.every((username) => {
    if (username.length >= 5 && username.length <= 20 && regex.test(username)) {
      return true;
    } else {
      return false;
    }
  });
}

module.exports = checkUsernames;
