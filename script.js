const headers = document.getElementsByClassName('display-heads');
const title = document.getElementById('ev-which');
const everyBit = [...headers, title];
const keyWhichDisplays = document.getElementsByClassName('which-display');
const keyCodeDisplay = document.getElementById('ev-codeV');
const keyKeyDisplay = document.getElementById('ev-keyV'); //various elements needed to read and/or change
document.addEventListener('keydown', (event) => {
  //listens for keypress event
  for (let i = 0; i < headers.length; i++) {
    //reveals the headers
    headers[i].style.visibility = 'visible';
  } //change the displays to the relevant key info
  for (let i = 0; i < keyWhichDisplays.length; i++) {
    keyWhichDisplays[i].innerHTML = event.which;
  }
  keyKeyDisplay.innerHTML = event.key;
  keyCodeDisplay.innerHTML = event.code;
  //does a zoomy animation if keypressed is 3 OR Shift3 (£ on my keyboard)
  if (event.key == 3) {
    keyCodeDisplay.animate(
      [
        { transform: 'skewX(10deg) translate(5px)', opacity: 1, offset: 0.2 },
        {
          transform: 'skewX(-20deg) translate(50vw)',
          opacity: 0,
          offset: 0.35,
        },
        {
          transform: 'skewX(-20deg) translate(-50vw)',
          opacity: 0,
          offset: 0.5,
        },
        {
          transform: 'skewX(-20deg) translate(-20vw)',
          opacity: 1,
          easing: 'ease-out',
          offset: 0.7,
        },
      ],
      3000
    );
  }
  //does a jump animation if key is a/A
  else if (event.code == 'KeyA') {
    console.log(title);
    headers[0].animate(
      [
        { transform: 'scale(1,1) translateY(0)', offset: 0 },
        { transform: 'scale(1.1, 0.9) translateY(0)', offset: 0.1 },
        { transform: 'scale(0.9, 1.1) translateY(-10vh)', offset: 0.3 },
        { transform: 'scale(1, 1) translateY(0)', offset: 0.5 },
        {
          transform: 'scale(1, 1) translateY(0)',
          easing: 'ease-out',
          offset: 1,
        },
      ],
      1000
    );
  }
  //breathing animation on key b/B
  else if (event.code == 'KeyB') {
    for (let i = 0; i < headers.length; i++) {
      breathing(headers[i]);
    }
  }
  //spinning animation only on S, not s
  else if (event.key == 'S') {
    for (let i = 0; i < everyBit.length; i++) {
      console.log(everyBit[i]);
      spinning(everyBit[i]);
    }
  }
});

const breathing = (ele) => {//breathing animation
  ele.animate(
    [
      { transform: 'scale(1, 1)', offset: 0.1 },
      { transform: 'scale(1.2, 1.2)', offset: 0.7 },
      { tranform: 'scale(1, 1)', offset: 1 },
    ],
    { duration: 1000, iterations: 3 }
  );
};

const spinning = (ele) => {//spinning animation
  ele.animate(
    [
      { transform: 'rotate(0deg)', offset: 0 },
      { transform: 'rotate(360deg)', offset: 1 },
    ],
    1000
  );
};
