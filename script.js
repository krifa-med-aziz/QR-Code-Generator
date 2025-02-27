"use strict";

const qrBox = document.querySelector(".qr__Box");
const qrImg = document.querySelector("#qr__Code");
const btnGenerate = document.querySelector(".gen__btn");
const btnDelete = document.querySelector(".del__btn");
const input = document.querySelector("#input__value");
const qrDownload = document.querySelector(".qr__download");

const generateQrCode = () => {
  btnGenerate.addEventListener("click", function () {
    if (input.value) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
      btnDelete.classList.remove("hidden");
      btnGenerate.classList.add("hidden");
      qrBox.classList.remove("hidden");
    } else {
      input.classList.add("error");
      setTimeout(() => {
        input.classList.remove("error");
      }, 1000);
    }
  });
};
const deleteQRCode = () => {
  btnDelete.addEventListener("click", () => {
    qrImg.src = "";
    input.value = "";
    btnDelete.classList.add("hidden");
    btnGenerate.classList.remove("hidden");
    qrBox.classList.add("hidden");
  });
};
generateQrCode();
deleteQRCode();
