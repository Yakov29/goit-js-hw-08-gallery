const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },

  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryListRef = document.querySelector(".js-gallery");
const boxRef = document.querySelector(".js-lightbox");
const bigImgRef = document.querySelector(".lightbox__image");
const closeButtonRef = document.querySelector("[data-action=close-lightbox]");
const overlayRef = document.querySelector(".lightbox__overlay");

let currentIdx = 0;

function closeModal() {
  boxRef.classList.remove("is-open");
  bigImgRef.src = "";
}

function openModal(index) {
  boxRef.classList.add("is-open");
  bigImgRef.src = galleryItems[index].original;
  currentIdx = index;
}

galleryItems.forEach((elem, index) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const linkItem = document.createElement("a");
  linkItem.classList.add("gallery__link");

  const imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.src = elem.preview;
  imgItem.setAttribute("data-source", elem.original);
  imgItem.alt = elem.description;

  linkItem.appendChild(imgItem);
  listItem.appendChild(linkItem);
  galleryListRef.appendChild(listItem);

  imgItem.addEventListener("click", () => openModal(index));
});

closeButtonRef.addEventListener("click", closeModal);
overlayRef.addEventListener("click", closeModal);

document.addEventListener("keydown", (evt) => {
  if (!boxRef.classList.contains("is-open")) return;

  switch (evt.code) {
    case "Escape":
      closeModal();
      break;
    case "ArrowLeft":
      currentIdx = (currentIdx - 1 + galleryItems.length) % galleryItems.length;
      bigImgRef.src = galleryItems[currentIdx].original;
      break;
    case "ArrowRight":
      currentIdx = (currentIdx + 1) % galleryItems.length;
      bigImgRef.src = galleryItems[currentIdx].original;
      break;
    default:
      break;
  }
});
