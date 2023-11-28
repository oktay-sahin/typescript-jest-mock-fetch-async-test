async function getTelegramData() {
  const response = await fetch(
    "https://api.telegram.org/bot5917573567:AAFvAdaSfPN8VldpyhJoihVfwS4WKzwEsPo/getMe"
  );
  const data = await response.json();

  return data;
}

// getTelegramData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export { getTelegramData };
