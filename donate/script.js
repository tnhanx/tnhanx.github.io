// Sample data in JSON format
const donationData = [
    {
        accountNumber: "123456789",
        accountHolder: "John Doe",
        bankName: "Example Bank",
        qrCodeImage: "http://tnhan.dev/images/QR.png"
    },
    {
        accountNumber: "987654321",
        accountHolder: "Jane Smith",
        bankName: "Another Bank",
        qrCodeImage: "path_to_qr_image2.jpg"
    },
    // Add more donation information as needed
];

// Function to create QR code HTML dynamically
function createQRCodeElement(data) {
    const qrCodeElement = document.createElement("div");
    qrCodeElement.className = "qr-code";

    const qrCodeImage = document.createElement("img");
    qrCodeImage.src = data.qrCodeImage;
    qrCodeImage.alt = "QR Code";
    qrCodeElement.appendChild(qrCodeImage);

    const qrInfoElement = document.createElement("p");
    qrInfoElement.className = "qr-info";
    qrInfoElement.innerHTML = `STK: <span class="account-number" data-account="${data.accountNumber}">${data.accountNumber}</span><br>CTK: ${data.accountHolder}<br>Ngân hàng: ${data.bankName}`;
    qrCodeElement.appendChild(qrInfoElement);

    // Add click event only to the account number span
    const accountNumberElement = qrInfoElement.querySelector(".account-number");
    if (accountNumberElement) {
        accountNumberElement.addEventListener("click", function () {
            const accountNumber = this.getAttribute("data-account");
            copyToClipboard(accountNumber);
            alert("Account number copied to clipboard!");
        });
    }

    document.getElementById("qrCodesContainer").appendChild(qrCodeElement);
}

// Loop through donation data and create QR code elements
donationData.forEach(createQRCodeElement);

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}