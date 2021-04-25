// let page: any = "1";
// let pageNumbers = page as string;

const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement ", someElement.value);

someElement.addEventListener("blue", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});
