function humanReadable(seconds) {
  let hours = ('00' + Math.floor(seconds/3600)).slice(-2);
  let minutes = ('00' + Math.floor((seconds - (hours * 3600)) / 60)).slice(-2);
  let sec = ('00' + seconds % 60).slice(-2);
  return `${hours}:${minutes}:${sec}`;
}