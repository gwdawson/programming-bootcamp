const { check, runTest, skipTest } = require("../../test-api");

// declare tallyHashtagsAndMentions here
function tallyHashtagsAndMentions(str) {
  if (typeof str !== "string") return {};
  const logs = { hashtags: 0, mentions: 0 };
  const words = str.split(" ");
  for (const word of words) {
    if (word.search(/#/) !== -1) {
      logs.hashtags += 1;
    } else if (word.search(/@/) !== -1) {
      logs.mentions += 1;
    }
  }
  return logs;
}

console.log("tallyHashtagsAndMentions");

runTest("returns an object", function () {
  check(typeof tallyHashtagsAndMentions()).isEqualTo("object");
});
runTest("returns {hashtags: 0, mentions: 0} if it finds none", function () {
  check(tallyHashtagsAndMentions("hello this is a tweet guaranteed to get very little engagement")).isEqualTo({
    hashtags: 0,
    mentions: 0,
  });
});
runTest("recognises no mentions", function () {
  check(tallyHashtagsAndMentions("#yolo")).isEqualTo({
    hashtags: 1,
    mentions: 0,
  });
});
runTest("recognises no hashtags", function () {
  check(tallyHashtagsAndMentions("@yobo")).isEqualTo({
    hashtags: 0,
    mentions: 1,
  });
});
runTest("finds multiple hashtags and mentions and returns that number", function () {
  check(tallyHashtagsAndMentions("#yolo @bolo #golo")).isEqualTo({
    hashtags: 2,
    mentions: 1,
  });
  check(tallyHashtagsAndMentions("@boyo #goyo @loyo #zoyo")).isEqualTo({
    hashtags: 2,
    mentions: 2,
  });
  check(
    tallyHashtagsAndMentions("So excited to start at @northcoders on Monday! #learntocode #codingbootcamp")
  ).isEqualTo({ hashtags: 2, mentions: 1 });
});
