// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/.,~";

// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-button");
const copyBtn = document.getElementById("copy-button");
const toast = document.getElementById("toast");

// Generate password
function generatePassword() {
  const length = +lengthEl.value;
  let chars = "";

  if (lowercaseEl.checked) chars += lowercaseChars;
  if (uppercaseEl.checked) chars += uppercaseChars;
  if (numbersEl.checked) chars += numberChars;
  if (symbolsEl.checked) chars += symbolChars;

  if (!chars) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// Event listeners
generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  if (!password) {
    showToast("Select at least one option!");
    return;
  }
  resultEl.value = password;
});

copyBtn.addEventListener("click", () => {
  if (!resultEl.value) return;
  navigator.clipboard.writeText(resultEl.value);
  showToast("Password copied!");
});

// Toast function
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}
