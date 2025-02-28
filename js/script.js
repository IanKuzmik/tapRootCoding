
const stickyHeader              = document.getElementById('js-sticky-header');
const headerProfilePic          = document.getElementById('js-header-profile-picture');
const profilePicContainer       = document.querySelector('.profile-picture-container');
const profilePic                = document.getElementById('js-bio-profile-picture');
const quickBioText              = document.querySelector('.quick-bio-text');
const oldPortfolio              = document.querySelector('.old-portfolio');
const oldPortfolioBar           = document.querySelector('.old-portfolio-title-bar');
const oldPortfolioBarArrowOpen  = document.querySelector('.old-portfolio-title-bar-arrow-open');
const oldPortfolioBarArrowClose = document.querySelector('.old-portfolio-title-bar-arrow-close');
const oldPortfolioMql4Link      = document.getElementById('old-portfolio-mql4-link');
const oldPortfolioMql4Ele       = document.getElementById('old-portfolio-mql4-div');
const resumeExperience          = document.querySelector('.resume .experience');
const resumeInformation         = document.querySelector('.resume .information');

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

//old portfolio
function toggleOldPortfolio() {
  if (oldPortfolio.classList.contains('old-portfolio--open')) {
    oldPortfolio.classList.remove('old-portfolio--open');
    oldPortfolioBarArrowOpen.classList.remove('hide');
    oldPortfolioBarArrowClose.classList.add('hide');
  } else {
    oldPortfolio.classList.add('old-portfolio--open');
    oldPortfolioBarArrowOpen.classList.add('hide');
    oldPortfolioBarArrowClose.classList.remove('hide');
  }
}

oldPortfolioBar.onclick = toggleOldPortfolio;

oldPortfolioMql4Link.onclick = function() {

  if (oldPortfolio.classList.contains('old-portfolio--open')) {
    oldPortfolioMql4Ele.scrollIntoView({alignToTop: true});
  } else {
    toggleOldPortfolio();
    setTimeout(function () {
      oldPortfolioMql4Ele.scrollIntoView({alignToTop: true});
    }, 300);
  }

}

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
