import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getPause, 1000));
function getPause({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

const startTime = localStorage.getItem('videoplayer-current-time');

if (startTime) {
    player.setCurrentTime(startTime);
}