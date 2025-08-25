const API_KEY =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 ; // Replace with your real key

async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><b>You:</b> ${userInput}</p>`;

  document.getElementById("user-input").value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userInput }]
    })
  });

  const data = await response.json();
  const botReply = data.choices[0].message.content;
  chatBox.innerHTML += `<p><b>AI:</b> ${botReply}</p>`;
}
