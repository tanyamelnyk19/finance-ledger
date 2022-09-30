// import throttle from 'lodash.throttle';
// import refs from '../refs';

// let headerHeight;
// let addClass;

// const currentWidth = document.documentElement.clientWidth;
// if (currentWidth > 768) {
//   headerHeight = 70;
//   addedClass = 'baner--fake-header-desktop'
// } else {
//   headerHeight = 170;
//   addedClass = 'baner--fake-header-mobile';
// }

// const showFixedHeader = throttle(() => {
//   const currentScroll = window.scrollY;
//   if (currentScroll > headerHeight) {
//     refs.siteHeader.classList.add('header--fixed');
//     refs.baner.classList.add(addClass);
//   } else {
//     refs.siteHeader.classList.remove('header--fixed')
//     refs.baner.classList.remove(addClass);
//   }
// }, 100);

// export default showFixedHeader;

// window.onscroll = function() {myFunction()};

// const header = document.querySelector(".header");
// const sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("header--fixed");
//   } else {
//     header.classList.remove("header--fixed");
//   }
// }