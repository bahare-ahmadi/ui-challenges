let fetchList = async () => {
  let booklist = "";
  let data = await fetch("https://freetestapi.com/api/v1/books");
  let result = await data.json();
  booklist = result.map((value) => {
    let genres = value.genre;

    let genreListHtmlArray = genres.map((g) => {
      return `<span class="genre">${g}</span>`;
    });
   
    return ` <div class="main-product">
        <div class="product-image">
            <div class="main-product-detail-image">
                <img src="https://fakeimg.pl/667x1000/cc6600" alt="not found">
            </div>
        </div>
        <div class="main-product-detail">
            <div class="main-product-detail-title">Title: ${value.title} </div>
            
            <div class="main-product-detail-author">Author:${value.author} </div>
            <div class="main-product-detail-publication_year">publication_year: ${value.publication_year} </div>
            <div class="main-product-detail-genre"> ${genreListHtmlArray.join(" ")}
            


            </div>

            <div class="main-product-detail-description"> Description: ${value.description}</div>

        </div>
    </div>`;
  });
  document.querySelector(".bahare").insertAdjacentHTML("afterbegin",booklist.join(""))
  
}

//   let people = [
//     {
//       name: "saeed",
//       family: "rahimi",
//       age: 34,
//       friends: [
//         {
//           name: "reza",
//           age: 40,
//         },
//         {
//           name: "babak",
//           age: 35,
//         },
//       ],
//     },
//     {
//       name: "bahare",
//       family: "ahmadi",
//       age: 30,
//       friends: [
//         {
//           name: "elnaz",
//           age: 37,
//         },
//       ],
//     },
//   ];

//   let peopleSpan = people.map((elem) => {
//     let friendsSpan = elem.friends.map((f) => {
//       return `<div>${f.name}</div>
//       <div>${f.age}</div>`;
//     });
//     return `
//         <div class="person">
//         <div>${elem.name}</div>
//         <div>${elem.family}</div>
//         <div>${elem.age}</div>
//         <div>friends: ${friendsSpan.join(",")}</div>

//         </div>
//         <hr>`;
//   });
//   console.log(peopleSpan);
//   let resultArray = peopleSpan.join("");
//   document.querySelector(".bahare").innerHTML = resultArray;
// };
fetchList();
