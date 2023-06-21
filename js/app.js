const accordion = () => {
  const items = document.querySelectorAll(".faq-accordion__item");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.toggle("faq-accordion__item--active");
    });
  });
};

const tabs = () => {
  const tabs = document.querySelector(".where-tabs");
  const items = document.querySelectorAll(".where-tabs__item");
  const btns = document.querySelectorAll(".where-navigation__btn");
  const btnActiveClass = "where-navigation__btn--active";

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      tabs.innerHTML = "";

      const elements = [...items].filter((item) => {
        return item.dataset.item === e.target.dataset.btn;
      });

      btns.forEach((item) => item.classList.remove(btnActiveClass));

      btn.classList.add(btnActiveClass);

      elements.forEach((el) => {
        tabs.insertAdjacentElement("beforeend", el);
      });
    });
  });

  btns[0].click();
};

accordion();
tabs();
