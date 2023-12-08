const colorBoxes = document.querySelectorAll('.color-box');
colorBoxes.forEach(box => {
  box.addEventListener('click', function () {
    this.style.backgroundColor = 'black';
  });
});


document.addEventListener('keydown', function (event) {
  const keyDiv = document.getElementById('key');
  if (event.key === 'a') {
    keyDiv.style.backgroundColor = 'pink';
  } else if (event.key === 's') {
    keyDiv.style.backgroundColor = 'orange';
  } else if (event.key === 'd') {
    keyDiv.style.backgroundColor = 'lightblue';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
    const newColorBox = document.createElement('div');
    newColorBox.className = 'color-box';
    newColorBox.style.width = '200px';
    newColorBox.style.height = '200px';
    newColorBox.style.margin = '10px';

    switch (event.key) {
      case 'q':
        newColorBox.style.backgroundColor = 'purple';
        break;
      case 'w':
        newColorBox.style.backgroundColor = 'gray';
        break;
      case 'e':
        newColorBox.style.backgroundColor = 'brown';
        break;
    }

    document.body.appendChild(newColorBox);
  }
});