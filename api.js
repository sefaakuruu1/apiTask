const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
//?_limit=10 deyince 10 tane gelmesini sagladık

const getResult = () => {
  let query = `${url}`;

  fetch(query)
    .then((response) => {
      return response.json(); //promise yapısında kullanıldıgı için direkt kullanamıyoruz.
    })
    .then(displayResult);
};

getResult();
function displayResult(response) {
  let body = document.querySelector("body");
  response.forEach((data) => {
    //first container
    let first = document.createElement("div");
    first.classList.add("first");
    //first in cocugu righti olustur
    let right = document.createElement("div");
    right.classList.add("right");
    //right in cocugu title olusturduk
    let h2 = document.createElement("h2"); //olusturmak istedigin elamanı veriyoruz
    h2.classList.add("title");
    let title1 = data.title.length;
    console.log(title1);
    console.log(data.title.slice(0, 20));
    if (title1 > 19) {
      let sefa = data.title.slice(0, 19);
      h2.innerText = `${sefa} ...`;
    } else {
      h2.innerText = data.title;
    }
    //classın adı buraya verilir
    right.appendChild(h2); //bagımsız olmasın diyeparentları ve cocukları yazdık
    body.appendChild(first);
    let p = document.createElement("p");
    p.classList.add("parg");
    let description = data.body.split(" ");
    console.log(description.length);
    console.log(`${description} ...`);
    if (description.length > 20) {
      let paragraph = data.body.split(" ").slice(0, 19).join(" ");
      p.innerText = `${paragraph} ...`;
    } else {
      let paragrap = data.body.split(" ").slice(0, 19).join(" ");
      p.innerText = paragrap;
    }
    //slice nerde başlayıp nerde biteceğini ister
    right.appendChild(p);
    let left = document.createElement("div");
    left.classList.add("left");
    first.appendChild(left);
    first.appendChild(right);
    let leftTwo=document.createElement("div");
    leftTwo.classList.add("leftTwo");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    left.appendChild(leftTwo);
    left.appendChild(checkbox);
    
  });
}