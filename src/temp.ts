async function getTelegramData() {
  const botToken = "6012991797:AAGK-9Jzb_WdpBWD92F2b62BlqQEnm5FifE"; // my telegram test bot token

  const response = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
  const data = await response.json();

  return data;
}

// test

// getTelegramData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export { getTelegramData };
