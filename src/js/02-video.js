// const Player = require('@vimeo/player');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
// var _ = require('lodash.throttle');

const onPlay = data => {
  try {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log(localStorage.getItem('videoplayer-current-time'));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

player.on(
  'timeupdate',
  _.throttle(data => onPlay(data), 1000)
);

const storagedTime = localStorage.getItem('videoplayer-current-time');
const currentTime = JSON.parse(storagedTime);
const timeInSeconds = currentTime.seconds;
player.setCurrentTime(timeInSeconds);
