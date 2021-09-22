"use strict";

const images = [
    "imagem-0",
    "imagem-1",
    "imagem-2",
    "imagem-3",
    "imagem-4",
    "imagem-5",
    "imagem-6",
    "imagem-7",
];

const createItem = (image) => {
    const galeryContainer = document.querySelector(".galery-container");
    const imageUrl = `./public/images/${image}.jpg`;

    let galeryItem = document.createElement("a");
    galeryItem.href = imageUrl;
    galeryItem.classList.add("galery-item");
    galeryItem.innerHTML = `<img src="${imageUrl}" alt="${image}">`;

    galeryContainer.appendChild(galeryItem);
};

const loadImages = () => images.forEach(createItem);

loadImages();