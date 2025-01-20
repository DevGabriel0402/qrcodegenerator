const btnGerar = document.getElementById("btnGerar");
const btnLimpar = document.getElementById("btnLimpar");
const inputUrl = document.getElementById("inputUrl");
const toast = document.getElementById("toast");
const qrCodeContainer = document.getElementById("qrcode");
qrcode = new QRCode(qrCodeContainer);

btnLimpar.onclick = () => {
    inputUrl.value = "";
    qrCodeContainer.classList.remove("active");
    qrCodeContainer.style.animation = "qrAnimateOut .5s forwards";
    inputUrl.focus()

    setTimeout(() => {
        qrCodeContainer.innerHTML = "";
        qrcode = new QRCode(qrCodeContainer);
    }, 900);
}

btnGerar.onclick = async () => {
    if (inputUrl.value === "") {
        toast.classList.add("toast-active");
        setTimeout(() => {
            inputUrl.focus();
            toast.classList.remove("toast-active")
            toast.style.animation = "fadeOut .5s forwards";

        }, 2000)

    } else {
        await qrcode.makeCode(inputUrl.value);
        qrCodeContainer.classList.add("active");
    }
}

inputUrl.onkeydown = (event) => {
    if (event.key === "Enter") {
        btnGerar.click()
    }
}

document.getElementById("creator").onclick = () => {
    const url = "https://www.instagram.com/eu.gabrielvieira/";
    window.open(url, "_blank")
}

