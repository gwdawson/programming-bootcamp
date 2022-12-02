export default msToTime = (duration) => {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let time = ``;
  if (days > 0) time += `${days} days`;
  if (hours > 0) time += ` ${hours}h`;
  if (minutes > 0) time += ` ${minutes}m`;
  if (seconds > 0) time += ` ${seconds}s`;
  return time;
};
