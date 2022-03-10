// Please do not change the name of this function
function getTweetData(tweet) {
  const data = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 };
  if (tweet.length === 0) return data;

  const words = tweet.split(' ');
  tagsRegex = /#[\w]+/;
  mentionRegex = /@[\w]+/;
  data.length = tweet.length;

  for (const word of words) {
    if (tagsRegex.test(word)) {
      data.tags.push(word);
      data.tagCount++;
    }
    if (mentionRegex.test(word)) {
      data.mentions.push(word);
      data.mentionCount++;
    }
  }
  return data;
}

module.exports = { getTweetData };
