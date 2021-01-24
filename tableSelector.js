exports.tableSelector = () => {
  let viewContent = document.querySelector(".view-content-wrap ");
  let items = viewContent.querySelector(".item");
  let content = Array.from(items.children)[2].querySelector(".field-content");
  let link = content
    .querySelector(".field--name-field-icone-link")
    .querySelector(".field--name-field-icone")
    .querySelector("a")
    .getAttribute("href");
  return {
    data: { link },
  };
};
