const btnLeft = document.querySelector('.btnLeft'),
    btnRight = document.querySelector('.btnRight'),
    slider = document.querySelector('#slider'),
    sliderDiv = document.querySelectorAll('.slider-div');

btnRight.addEventListener('click', e => moveToRight());
btnLeft.addEventListener('click', e => moveToLeft());

setInterval(() => {
    moveToRight();
}, 4000);

let index = 0,
    slide = 0;

function moveToRight() {
    if (slide >= sliderDiv.length - 1) {
        index = 0;
        slide = 0;
        slider.style.transform = `translate(-${index}%)`;
        slider.style.transition = 'none';
    } else {
        slide++;
        index = index + 100;
        slider.style.transform = `translate(-${index}%)`;
        slider.style.transition = `all ease .6s`;
        // console.log('index ', index);
        // console.log('slide ', slide);
    }

}

function moveToLeft() {
    slide--;
    if (slide < 0) {
        index = (sliderDiv.length - 1) * 100;
        slide = sliderDiv.length - 1;
        slider.style.transform = `translate(-${index}%)`;
        slider.style.transition = 'none';
    } else {
        index = index - 100;
        slider.style.transform = `translate(-${index}%)`;
        slider.style.transition = `all ease .6s`;
    }
}
