const markIn = document.querySelector("#editor");
const htmlOut = document.querySelector("#preview");

let placeholderText = `

# This is a Header<br><br>


## This is a subHeader<br><br>


#### This Header is even tinier!<br><br>


Here. Have a lolcat:<br><br>


[![Lolcats](http://www.csun.edu/~jkn55089/page7/files/page7_2.jpg)](https://icanhas.cheezburger.com/)<br><br>


Why do I like lolcats?<br><br>

* They're cool<br>
* Cats are cool<br>
* Cats do funny things<br>
* 1 + 1 = 2<br><br>

A blockquote about cats in **bold** and *italics* woah:<br><br>

> "*Time with cats is never wasted*" - **Sigmund Freud**<br><br>

Let's go back to business with some in-line code:<br><br>

\`This is in-line code\` <br><br>- It's code, but in-line. <br><br>

Do you like code blocks better? I also have those:<br><br>

\`\`\`
// This is a comment about an awesome function
stayAwesome = () => {
    let msg = "Stay awesome"
    return msg
};
\`\`\`
<br><br>

## **Allright, time for you to write your own mark-up. Have fun!**
`;

window.onload = function () {
  markIn.innerHTML = placeholderText;
  htmlOut.innerHTML = marked(markIn.value)
};

markIn.addEventListener("input", function () {
  htmlOut.innerHTML = marked(markIn.value);
  htmlOut.innerHTML = marked(markIn.value);
});
