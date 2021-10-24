/* Question 1

const dog = {
    complain: "Meow!",
    dogMeow: function(){
        console.log(this.complain);
    }
};

dog.dogMeow();

*/

/* Question 2

const heading = document.querySelector("h3");

console.log(heading)

heading.innerHTML = "Updated header";


// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add('subheading');

*/

/* Question 5

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red"
}

*/

/* Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph </p>";
resultsContainer.style.backgroundColor = "yellow";

*/

/* Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function names(list) {
    for(let i = 0; i < cats.name.length; i++) {
       console.log(cats.name[i]);
    }

}
names();

// Could not make this work...
*/

// Question 8
// question 8 is a lot like question 7. I do not understand how to log name from a var/const without displaying the whole array.
