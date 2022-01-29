button = document.getElementById('btn');
color = document.getElementById('color');

colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


button.addEventListener('click', colorFunc);

function colorFunc(){
    hexColor = '#'
    for(i = 0; i < 6; i++){
        randomValue = Math.floor(Math.random() * colors.length)
        hexColor += colors[randomValue]
    }
    color.innerHTML = hexColor
    document.body.style.backgroundColor = hexColor
}