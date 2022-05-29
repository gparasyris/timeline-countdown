export const smoothScrollTo = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  element.scrollIntoView({
    block: "start",
    behavior: "smooth", // smooth scroll
  });
};
