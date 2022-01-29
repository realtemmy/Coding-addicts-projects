button = document.getElementById('btn');
color = document.getElementById('color')

button.addEventListener('click', colorFunc);

colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'indigo', 'violet', 'crimson', 'olive', 'aqua', 'azure', 'bisque', 'skyblue', 'peru', 'pink', 'tomato', 'snow', 'sienna', 'silver', 'plum', 'orchid', 'khaki', 'ivory']

function colorFunc(){
    randomColor = Math.floor(Math.random()*colors.length)
    console.log(randomColor)
    color.innerText = colors[randomColor]
    document.body.style.backgroundColor = colors[randomColor]
}



