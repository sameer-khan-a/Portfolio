document.querySelector('.hero').addEventListener('mouseover', () => {
    typeWriter();
})
// document.querySelector('.hero').addEventListener('mouseout', () => {
//   document.querySelector('.about-me').innerText = '';
// })
var text = 'I am an aspiring Full Stack Developer with a strong passion for web development. My skills include building dynamic and high-performing web applications while optimizing project workflows through effective problem-solving and teamwork. I am eager to contribute and grow in an innovative environment where I can apply my technical and soft skills.';
var index = 0;
var speed = 10;
function typeWriter() {
    if(index < text.length) {
        document.querySelector('.about-me').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

document.querySelector('.content1').style.display = 'none';
document.querySelector('.content2').style.display = 'none';
document.querySelector('.content3').style.display = 'none';

function displayHandler(container, content) {
    document.querySelector(container).addEventListener('mouseover', () => {
        document.querySelector(content).style.display = 'block';
    })
    document.querySelector(container).addEventListener('mouseout', () => {
        document.querySelector(content).style.display = 'none';
    })
}
displayHandler('.s1', '.content1');
displayHandler('.s2', '.content2');
displayHandler('.s3', '.content3');

function hoverHandler(container) {
    document.querySelector(container).addEventListener('mouseover', () => {
        document.querySelector(container).style.boxShadow = "10px 10px 10px 10px grey";
        document.querySelector(container).style.borderRadius = "15%";
    })
    document.querySelector(container).addEventListener('mouseout', () => {
        document.querySelector(container).style.boxShadow = "none";
    })
}
hoverHandler('.project1');
hoverHandler('.project2');
hoverHandler('.project3');