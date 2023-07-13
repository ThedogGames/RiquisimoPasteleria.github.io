function scrollToSection(id) {
    const element = document.querySelector(id);
    const offset = 98;
  
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}
  