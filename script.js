const getHouse = new Promise(async (resolve) => {
  const response = await fetch("https://anapioficeandfire.com/api/houses/378");
  const data = await response.json();
  resolve(data);
});

getHouse.then((data) => {
  let currentLordUrl = "";
  currentLordUrl = data.currentLord;
  console.log(data.currentLord);

  return new Promise(async (resolve) => {
    const response = await fetch(currentLordUrl);
    const data = await response.json();
    resolve(data);
  }).then((lord) => {
    console.log(lord.name);
  });
});


  