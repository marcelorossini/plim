// Retorna a section atual
export const getSectionAtPosition = () => {
  const section = [...document.querySelectorAll("section")].filter((item) => {
    return (
      item.getBoundingClientRect().top <= 300 &&
      item.getBoundingClientRect().bottom >= 300
    );
  });

  return section[0].id || "";
};

export const fadeIn = (element) => {
    element.classList.remove("fadeOut");
    element.classList.add("fadeIn");
};

export const fadeOut = (element) => {
    element.classList.remove("fadeIn");
    element.classList.add("fadeOut");
};