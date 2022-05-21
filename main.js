const questionsData = [
		{
			question: "Kako se zoves?"
			options: ["Stef","Jura","Leon"]
			answer: "Leon"
		},
		{
			question:"Kako se prezivas?"
			options:["Repalust", "Novak", "Horvat"]
			answer: "Repalust"
		}
]

questionsData.forEach((q) => {
	const div = document.createElement("div");
	div.setAttribute("class", "question");
	document.body.append(div);
	const h2 = document.createElement("h2");
	h2.innerHTML = q.question;
	div.append(h2);

	q.options.forEach((option) => {
		const button = document.createElement("button");
		button.setAttribute("class","option");
		button.innerHTML = option;
		div.append(button);

	})
})