
const stickyHeader      = document.getElementById('js-sticky-header');
const headerProfilePic  = document.getElementById('js-header-profile-picture');
const profilePic        = document.getElementById('js-bio-profile-picture');
const cards             = document.querySelectorAll('.my-services .card');

//sticky header
document.addEventListener( 'scroll', function() {
  if ( window.pageYOffset > 300 ) {
    stickyHeader.classList.add('reveal');
  } else {
    stickyHeader.classList.remove('reveal');
  }
});

//profile pic header
window.addEventListener( 'scroll', function() {
  let ele = profilePic.getBoundingClientRect();
  if ( (ele.y + ele.height) < 0 ) {
    headerProfilePic.classList.add('reveal');
  } else {
    headerProfilePic.classList.remove('reveal');
  }
});

//card slide into view
const observerOptions = {
  threshold  : 0,
  rootMargin : '0px 0px -250px 0px'
};
const cardObserver = new IntersectionObserver( (entries, imgObserver) => {
  entries.forEach( entry => {
    if ( !entry.isIntersecting ) return;
    let list = entry.target.parentElement.querySelector('.list');
    entry.target.classList.add('slide-in');
    setTimeout( function() { list.style.opacity = 1; }, 800 );
    imgObserver.unobserve(entry.target);
  })
}, observerOptions );
cards.forEach( (image) => {
  cardObserver.observe(image);
});
