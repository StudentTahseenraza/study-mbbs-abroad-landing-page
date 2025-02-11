document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const country = document.querySelector('select').value;

    if (!name || !email || !phone || country === "Select Country Preference") {
        alert("Please fill all fields correctly.");
    } else {
        alert("Form submitted successfully!");
    }
});

const universityInfo = [
    "Study MBBS in Russia: Affordable tuition fees and world-class education.",
    "Study MBBS in Uzbekistan: Recognized by WHO and MCI.",
    "Study MBBS in Kazakhstan: English-medium programs and modern facilities.",
    "Study MBBS in the Philippines: Globally recognized degrees and tropical environment.",
    "Study MBBS in Georgia: European standard education at low costs.",
    "Study MBBS in Kyrgyzstan: No donation or capitation fees.",
    "Study MBBS in Egypt: Rich cultural heritage and affordable living costs."
];

let currentIndex = 0;
const textContainer = document.getElementById("university-text");

function changeText() {
    textContainer.textContent = universityInfo[currentIndex];
    currentIndex = (currentIndex + 1) % universityInfo.length;
}

setInterval(changeText, 5000);
changeText();