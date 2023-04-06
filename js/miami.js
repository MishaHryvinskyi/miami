localStorage.setItem('my-data', JSON.stringify({ name: "Mango, age: 2" }));
console.log(localStorage.getItem("my-data"));

console.log(localStorage);

const savedData = localStorage.getItem('my-data');
const parsedData = JSON.parse(savedData);
console.log("parsedData:", parsedData);
console.log("sacedData:", savedData);