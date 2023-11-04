let count = 0;
function display() {
    document.getElementById('h2').innerHTML = count;
}
function color() {
    if (count > 0) {
        document.getElementById('h2').style.color = 'green';
    } else if (count == 0) {
        document.getElementById('h2').style.color = 'black';
    } else {
        document.getElementById('h2').style.color = 'red';
    }
}
function counter(type) {
    if (type == '+') {
        count++;
    } else if (type == '-') {
        count--;
    } else {
        count = 0;
    }
    display();
    color();
}
// function decrement(){
//     count--;
//     display();
//     color();
// }
// function increment(){
//     count++;
//     display();
//     color();
// }
// function reset(){
//     count=0;
//     display();
//     color();
// }