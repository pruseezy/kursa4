fetch("../news.xml")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");

    const items = xml.querySelectorAll("item");
    const elements = document.querySelectorAll(".swiper-slide.element");

    elements.forEach((element, index) => {
      const item = items[index];
      const imagine = item.querySelector("imagine").textContent;
      const title = item.querySelector("title").textContent;
      const description = item.querySelector("description").textContent;
      const image = element.querySelector(".t-image");
      const subtitle = element.querySelector(".slide-subtitle");
      const paragraph = element.querySelector(".tours__paragraph");

      image.src = imagine;
      subtitle.textContent = title;
      paragraph.textContent = description;
    });
  });
