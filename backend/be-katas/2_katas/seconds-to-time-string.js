// Please do not change the name of this function
const secondsToTimeString = (seconds) => {
  if (seconds < 60) return `${seconds} seconds`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} days`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} weeks`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months`;
};

module.exports = { secondsToTimeString };
