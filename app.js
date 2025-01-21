const btnGerar = document.getElementById("btnGerar");
const btnLimpar = document.getElementById("btnLimpar");
const inputUrl = document.getElementById("inputUrl");
const toast = document.getElementById("toast");
const loadIn = document.getElementById("load");
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
    }, 1000);
}

btnGerar.onclick = async () => {
    if (inputUrl.value === "") {
        toast.classList.add("toast-active");
        loadIn.classList.add("toast-carregamento")
        setTimeout(() => {
            inputUrl.focus();
            toast.classList.remove("toast-active")
            loadIn.classList.remove("toast-carregamento")
            toast.style.animation = "fadeOut .5s forwards";
            toast.style.display = "flex"


        }, 2500)

        setTimeout(() => {
            toast.style.display = "none"
        }, 3000)


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

