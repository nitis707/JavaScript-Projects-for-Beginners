const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector(".qrImg");
const qrText = document.querySelector(".qrText");
const btn = document.querySelector(".btn");
const error = document.querySelector("#error");


btn.addEventListener("click", () => {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=g" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
});