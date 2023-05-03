


// const value1 = document.querySelector("#value1");
// const value2 = document.querySelector("#value2");

// const input = document.querySelector("#pi_input");
// value1.textContent = input.value;
// value2.textContent = input.value;




// input.addEventListener("input", (event) => {
//   value1.textContent = event.target.value;
//   value2.textContent = event.target.value;
//   value3.textContent = event.target.value;
// })



for (let i = 0; i < 16; i++){
  for(let j = 0; j < 16; j++){
    const mainBlock = document.getElementById("board");
    const oneBlock = document.createElement("div");
    oneBlock.classList.add("one-block")
    mainBlock.appendChild(oneBlock);
    oneBlock.addEventListener('click', function (e) {
      e.target.style.background = 'blue';

    });



  }

};
