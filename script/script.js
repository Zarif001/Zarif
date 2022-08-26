const sortPop = document.querySelectorAll('.main__works-sortPop'),
    sortList = document.querySelectorAll('.main__works-list'),
    sortArrow = document.querySelectorAll('.main__works-arrow')
let index = 0

sortPop.forEach((item, i) => {
    item.addEventListener('click', () => {
        chooseText(i)
    })
})
function chooseText(index) {
    if (sortList[index].classList.contains('active')) {
        sortList[index].classList.remove('active')
        sortArrow[index].classList.remove('active')
    } else {
        sortList[index].classList.add('active')
        sortArrow[index].classList.add('active')
    }
}


// Time 
function clock() {
    const time = new Date()
    const hoursNumber = document.querySelector('.main__time-hours')
    const minutesNumber = document.querySelector('.main__time-minutes')
    const secNumber = document.querySelector('.main__time-sec')
    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    secNumber.innerHTML = time.getSeconds()

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()


// Game 

const startBtn = document.querySelector('.main__game-start'),
    screens = document.querySelectorAll('.main__game-screen'),
    timeContent = document.querySelector('.main__game-time'),
    timeList = document.querySelector('.main__game-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.main__game-board'),
    timeClose = document.querySelector('.main__game-close'),
    timeDes = document.querySelector('.main__game-describtion'),
    gameScroll = document.querySelector('#gameScroll')

let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    timeContent.style.height = `100vh`
    timeContent.style.transition = `1s`
    gameScroll.scrollIntoView()
})



timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('main__game-btn')) {
        screens[0].classList.add('up')
        screens[0].classList.add('up')
        let elAttr = e.target.getAttribute('data-time');
        time = parseInt(elAttr)
        startGame()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('main__game-hide');
        board.innerHTML = `Ваш счет: ${score}!`
        closeWindow()
        timeDes.style.cssText = `
            height: 150px;
            opacity: 1;
        `


    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }

        timeEl.innerHTML = `00:${currentTime}`;
    }
}

function createRandomCircle() {
    const circle = document.createElement('div');

    circle.classList.add('main__game-circle');

    let { width, height } = board.getBoundingClientRect()

    let size = randomNumber(25, 50)


    let x = randomNumber(0, width - size)
    let y = randomNumber(0, height - size)

    circle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background:${randomColor()}
    `
    board.appendChild(circle)
}
let colors = ['red', 'white', 'purple', 'pink', 'yellow', 'green', 'purple', 'blue', 'brown', 'orange']

function randomColor() {
    let color = Math.floor(Math.random() * colors.length)
    return colors[color]
}

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('main__game-circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function closeWindow() {
    timeClose.addEventListener('click', () => {
        timeContent.style.height = `0`
    })
}

// View Animation

const viewAn = document.querySelector('.view')
const viewText = document.querySelector('.view__content-text')
const viewTitle = document.querySelector('.view__content-title')
const viewHeader = document.querySelector('.header')
const viewMain = document.querySelector('.main')
const viewFooter = document.querySelector('.footer')
const body = document.querySelector('body')

function view() {
    setTimeout(() => {
        viewAn.style.cssText = `
        height:0vh;
        opacity:0;
        `
        viewHeader.style.cssText = `
        opacity:1;
        `
        viewMain.style.cssText = `
        opacity:1;
        `
        viewFooter.style.cssText = `
        opacity:1;
        `


    }, 9000);
    setTimeout(() => {
        viewTitle.classList.add('active')
    }, 3000);

    setTimeout(() => {
        viewText.style.cssText = `
                display:block;
        `
    }, 5000);
    setTimeout(() => {
        viewAn.style.cssText = `
        display:none;
        `
        body.classList.remove('active')
    }, 11000);

}
view()

const animItems = document.querySelectorAll('.anim')

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll)
    function animScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffset - animPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active')
            } else {
                if (!animItem.classList.contains('anim-no')) {
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animScroll()
    }, 9500);

}


// Hire Me Message 

function messageHire() {
    const hireMe = document.querySelectorAll('.hire__me-btn')
    const hireMessage = document.querySelector('.message')
    const hireCross = document.querySelector('.message__content-img')
    const hireAlert = document.querySelectorAll('.alert')


    hireMe.forEach(item => {
        item.addEventListener('click', (e) => {
            hireMessage.style.display = `flex`
            e.preventDefault()
        })
    })

    hireCross.addEventListener('click', () => {
        hireMessage.style.display = `none`
        hireAlert[1].style.display = `none`
    })
}
messageHire()


const changeAction = () =>{

    const sortMain = document.querySelectorAll('.main__works-link')
  
    let index = 0

    let intervall = setInterval((block) => {
        block[index].classList.remove('active')
        index = (index + 1) % block.length
        block[index].classList.add('active')
    }, 8000, document.querySelectorAll('.tab-pane'));

    sortMain.forEach(sort =>{
        sort.addEventListener('click', () =>{
            if(true){
                clearInterval(intervall) 
                
            } 
        })
    })



}
changeAction()