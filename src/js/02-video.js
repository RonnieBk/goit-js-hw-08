import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = throttle(data => {
  try {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}, 1000);

player.on('timeupdate', onPlay);

const storagedTime = localStorage.getItem('videoplayer-current-time');
const currentTime = JSON.parse(storagedTime);
const timeInSeconds = currentTime.seconds;
player.setCurrentTime(timeInSeconds);
