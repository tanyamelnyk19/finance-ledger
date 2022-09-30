import refs from './refs';

const headerHeight = refs.header.offsetHeight;

export default function addFixedHeader () {
  const currentScroll = window.scrollY;

  if (currentScroll > headerHeight) {
    refs.header.classList.add('header--fixed');
  } else {
    refs.header.classList.remove('header--fixed')
  }
};
