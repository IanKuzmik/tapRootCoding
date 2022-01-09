
const stickyHeader        = document.getElementById('js-sticky-header');
const headerProfilePic    = document.getElementById('js-header-profile-picture');
const profilePicContainer = document.querySelector('.profile-picture-container');
const profilePic          = document.getElementById('js-bio-profile-picture');
const quickBioText        = document.querySelector('.quick-bio-text');
const resumeExperience    = document.querySelector('.resume .experience');
const resumeInformation   = document.querySelector('.resume .information');

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


//responsive 
function isBreakPoint( breakPoint, specific = false, breakPoints = [576, 768, 992] ) {
  let screenWidth = window.innerWidth;
  if ( specific ) {
    let min, max;
    for ( i = 0; i < breakPoints.length; i++ ) {
      if ( breakPoints[i] == breakPoint ) {
        min = breakPoints[i-1] || 0;
        max = breakPoints[i];
        break;
      }
    }
    // returns 'true' if screenWidth is between breakPoint and the next smallest breakPoint
    return (screenWidth > min && screenWidth <= max);
  }
  // returns 'true' if screenWidth is less than breakPoint i.e. the breakPoint has been hit
  else return breakPoint >= screenWidth;
} 
function checkBreakpoints() {
  if ( isBreakPoint(768) ) {
    quickBioText.setAttribute( 'data-col', '10');
    profilePicContainer.setAttribute( 'data-col', '4');
    resumeExperience.setAttribute( 'data-col', '12');
    resumeInformation.setAttribute( 'data-col', '12');
  }
  else if ( isBreakPoint(992) ) {
    profilePicContainer.setAttribute( 'data-col', '3');
    quickBioText.setAttribute( 'data-col', '8');
    resumeExperience.setAttribute( 'data-col', '9');
    resumeInformation.setAttribute( 'data-col', '3');
  } else {
    profilePicContainer.setAttribute( 'data-col', '4');
    quickBioText.setAttribute( 'data-col', '6');
  }
}
checkBreakpoints(); 
window.addEventListener( 'resize', checkBreakpoints );
