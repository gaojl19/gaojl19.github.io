const header = document.querySelector("[data-header]");
const newsToggle = document.querySelector("[data-news-toggle]");
const earlierNews = document.querySelector(".news-extra");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

newsToggle?.addEventListener("click", () => {
  const willExpand = newsToggle.getAttribute("aria-expanded") !== "true";
  newsToggle.setAttribute("aria-expanded", String(willExpand));
  newsToggle.textContent = willExpand ? "Hide earlier updates" : "Show earlier updates";

  if (earlierNews) {
    earlierNews.hidden = !willExpand;
  }
});
