exports.contentSelector = () => {
  let viewContent = document.querySelector(".view-content-wrap ");
  let items = viewContent.querySelector(".item");
  let content = Array.from(items.children)[1].querySelector(".field-content");
  let details = Array.from(content.children)
    .map((content) => {
      return content.textContent;
    })
    .filter((e) => e != "");
  let data = {};
  let elements = ["PUBLICATION DATE", "OBJECT", "BIDDING DATE"];
  for (let i = 0; i < details.length; i++) {
    let tmpdata = details[i].split(": ");
    let tmpstr = "";
    if (tmpdata.length > 1) {
      tmpstr = tmpdata[1];
    } else {
      if (i + 1 != details.length) {
        tmpstr = details[i + 1];
        i++;
      } else {
        tmpstr = tmpdata[1];
      }
    }
    tmpdata[0] = tmpdata[0].includes(":")
      ? tmpdata[0].split(":")[0]
      : tmpdata[0];
    if (elements.includes(tmpdata[0])) {
      data[tmpdata[0]] = tmpstr;
    }
  }
  return {
    data,
  };
};
