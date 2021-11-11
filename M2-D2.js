
/* 
MANDATORY JS EXERCISES (create a different file for this exercise)
    3) Cycle the array and create a list-item via JavaScript for every element
    4) Insert the genere as text in the list-item
    5) Append the list items in the unordered list
    6) Append the unordered list in the document. The list should appear in the page.
*/

      let genres = [
        "Comedy",
        "Drama",
        "Romance",
        "Horror",
        "Sci-Fi",
        "Documentary",
      ];
      const div = document.getElementById("list");
      const ul = document.createElement("ul");
      div.appendChild(ul);
      // 2) Create an unordered list using JavaScript and save it in a variable
      const createUnOrderedList = function () {
        const li = document.createElement("li");
        ul.appendChild(li);
      };

      createUnOrderedList();

      // 3) Cycle the array and create a list-item via JavaScript for every element

      for (let i = 0; i < genres.length; i++) {
        console.log(genres[i]);
        const li = document.createElement("li");
        li.innerText = genres[i];
        ul.appendChild(li);
      }
     