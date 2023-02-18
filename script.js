function getQuotes(){
	fetch("https://api.quotable.io/random")
	 .then((response) => response.json())
	 .then((response) => {
		quote.innerHTML = `"${response.content}"`
		author.innerHTML = `- ${response.author}`
	 });
}
const button = document.querySelector("button")
button.addEventListener("click",getQuotes)


