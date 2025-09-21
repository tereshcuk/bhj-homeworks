let wins = 0;
let losses = 0;
const holes = document.querySelectorAll('.hole');


holes.forEach(hole => {
  hole.addEventListener('click', handleClick);
  });

// Обработчик клика
function handleClick(event) {
  const clickedHole = event.target;
  if (clickedHole.classList.contains('hole_has-mole')) {
    wins++;     
    } else {
      losses++;      
      }
    updateScore();
    }


function updateScore() {
  document.getElementById('dead').textContent = wins;
  document.getElementById('lost').textContent = losses;
  if (wins === 10) {
    alert('Вы победили в конкурсе!');
    resetGame();
    }
  if (losses === 5) {
    alert('Вы проиграли в конкурсе!'); 
    resetGame(); 
    }
  }


function resetGame() {  
  wins = 0;
  losses = 0;
  updateScore(); 
  }

