const gestures = document.querySelectorAll('.gameplay img');
const textResult = document.querySelector('.text-result');
const playerOneScore = document.querySelector('.p1 .score');
const playerTwoScore = document.querySelector('.p2 .score');

let score1 = 0;
let score2 = 0;

gestures.forEach(gesture => {
    gesture.addEventListener('click', playGame);
})

function playGame(e) {

    // p1r is player result
    let p1r = document.querySelector('.p1r img');
    let p2r = document.querySelector('.p2r img');
    let gestureArray = ['paper.png', 'rock.png', 'scissors.png']

    p1r.setAttribute('src', e.target.getAttribute('src'))
    p2r.setAttribute('src', gestureArray[Math.floor(Math.random() * 3)])

    if(p1r.getAttribute('src') === p2r.getAttribute('src')) {  
        textResult.textContent = 'Same choice, its a draw';
        setTimeout(() => {
            textResult.textContent = 'Try to beat the computer';
        }, 2000);

    } else if (p1r.getAttribute('src')+p2r.getAttribute('src') === 'paper.pngrock.png'
              || p1r.getAttribute('src')+p2r.getAttribute('src') === 'rock.pngscissors.png'
              || p1r.getAttribute('src')+p2r.getAttribute('src') === 'scissors.pngpaper.png') {

                textResult.textContent = `Player 2 chose ${p2r.getAttribute('src').slice(0, p2r.getAttribute('src').indexOf('.'))}, You win`;
                setTimeout(() => {
                    textResult.textContent = 'Try to beat the computer';
                    score1 ++;
                    playerOneScore.textContent = score1;
        }, 2000);

    } else {
                textResult.textContent = `Player 2 chose ${p2r.getAttribute('src').slice(0, p2r.getAttribute('src').indexOf('.'))}, You lose`;
                setTimeout(() => {
                    textResult.textContent = 'Try to beat the computer';
                    score2 ++;
                    playerTwoScore.textContent = score2;
        }, 2000);
    }
}

// class Game {
//     constructor() {
//         this.gestures = document.querySelectorAll('.gameplay img');
//         this.textResult = document.querySelector('.text-result');
//         this.playerOneScore = document.querySelector('.p1 .score');
//         this.playerTwoScore = document.querySelector('.p2 .score'); 
//         this.playerOneResult = document.querySelector('.p1r img');
//         this.playerTwoResult = document.querySelector('.p2r img'); 
//         this.gestureArray = ['paper.png', 'rock.png', 'scissors.png']

//     }
//     play() {
//         this.playerOneResult.setAttribute('src', e.target.getAttribute('src'))
//         this.playerTwoResult.setAttribute('src', this.gestureArray[Math.floor(Math.random() * 3)])

//     }
// }

