const inputElement = document.getElementById("text-input");
const checkElement = document.getElementById("check-btn");
const resultElement = document.getElementById("result");
let inputValue = "";

function isAlphaNumeric(char) {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(char);
}

function filterText(text) {
  let filteredText = "";
  for (let char of text) {
    if (isAlphaNumeric(char)) filteredText += char;
  }
  return filteredText;
}

function reverseText(text) {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
}

function checkIsPalindrome(text) {
  const filteredText = filterText(text).toLowerCase();
  const reversedText = reverseText(filteredText);
  return filteredText === reversedText;
}

checkElement.addEventListener("click", () => {
  const inputValue = inputElement.value;
  let response = "";
  if (inputValue.length === 0) {
    alert("Please input a value");
  } else {
    if (checkIsPalindrome(inputValue))
      response = inputValue + " is a palindrome";
    else response = inputValue + " is not a palindrome";
  }
  resultElement.innerText = response;
});
