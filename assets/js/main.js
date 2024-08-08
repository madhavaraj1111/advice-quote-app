// https://api.adviceslip.com/advice

const url = `https://api.adviceslip.com/advice?${new Date().getTime()}`;
const quoteEl = document.querySelector("#quote");
const btnEl = document.querySelector("#buttonQuote");
const divEl = document.querySelector("quoteDiv");

btnEl.addEventListener("click", () => {
  if (quoteEl.innerText) {
    location.reload();
  }
});

async function adviceData() {
  try {
    const apiFetch = await fetch(url);
    const jsonData = await apiFetch.json();
    return jsonData;
  } catch (error) {
    console.log("Error caused !!!!", error);
  }
}

adviceData().then((data) => {
  if (data && data.slip) {
    quoteEl.innerText = data.slip.advice;
    console.log(data.slip.advice);
  } else {
    console.error("No advice found in the response.");
  }
});
