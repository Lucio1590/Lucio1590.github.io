document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.querySelector('.timeline');

  function isResumeSectionInViewport() {
    const resumeSection = document.getElementById("resume");
    const resumeSectionScroll = resumeSection.getBoundingClientRect().top + window.scrollY;
    const resumeSectionHeight = document
      .getElementById("resume")
      .getBoundingClientRect().height;
    const scrollPos = window.scrollY;

    return (
      scrollPos > resumeSectionScroll  
    );
  }

  function onScroll() {
    console.log('scrolling');
    if (isResumeSectionInViewport(timeline)) {
      console.log('in view');
      timeline.classList.add('timeline-in-view');
      window.removeEventListener('scroll', onScroll);
    }
  }
  
  window.addEventListener('scroll', onScroll);
  
  onScroll();
});


