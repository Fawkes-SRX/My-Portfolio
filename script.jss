document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
  
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const offsetTop = target.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
});
