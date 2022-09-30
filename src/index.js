import throttle from 'lodash.throttle';
import refs from './js/refs';

let headerHeight;
// let addClass;

const currentWidth = document.documentElement.clientWidth;
if (currentWidth >= 768) {
  headerHeight = 70;
} else {
  headerHeight = 170;
}

const showFixedHeader = throttle(() => {
  const currentScroll = window.scrollY;
  if (currentScroll > headerHeight) {
    refs.header.classList.add('header--fixed');
    // refs.baner.classList.add(addClass);
  } else {
    refs.header.classList.remove('header--fixed')
    // refs.baner.classList.remove(addClass);
  }
}, 100);

window.addEventListener('scroll', showFixedHeader);