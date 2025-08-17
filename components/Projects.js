export default function Projects() {
  const section = document.createElement("section");
  section.id = "projects";
  section.className = "projects animated";
  section.innerHTML = `
    <h2 style ="font-size:1.5rem">Projects</h2>
    <div class="games-grid">
      <!-- Tic Tac Toe Card -->
      <div class="game-card">
        <div class="game-image">
          <img src="./images/Tic-Tae-Toe.png" alt="Tic Tac Toe">
        </div>
        <div class="game-content">
          <h3 class="game-title">🧠 Tic Tac Toe</h3>
          <p class="game-description">
            The classic strategy game where you try to get three in a row. Play against the computer with different difficulty levels. 
            Features score tracking and animated moves.
          </p>
          <a href="https://keshavk1.github.io/Mini_games/" class="play-btn">Play Now</a>
        </div>
      </div>

      <!-- Sudoku Card -->
      <div class="game-card">
        <div class="game-image">
          <img src="./images/sudoku.png" alt="Sudoku">
        </div>
        <div class="game-content">
          <h3 class="game-title">🔢 Sudoku Solver</h3>
          <p class="game-description">
            Challenge your logic with this number puzzle game. Enter your puzzle and let the solver find the solution, 
            or play interactively with hints and error checking.
          </p>
          <a href="https://keshavk1.github.io/Mini_games/" class="play-btn">Solve Puzzle</a>
        </div>
      </div>

      <!-- Rock Paper Scissors Card -->
      <div class="game-card">
        <div class="game-image">
          <img src="./images/RPS.png" alt="Rock Paper Scissors">
        </div>
        <div class="game-content">
          <h3 class="game-title">✊✋✌️ Rock Paper Scissors</h3>
          <p class="game-description">
            The timeless hand game with a modern twist. Play against the computer with animated gestures, 
            score tracking, and special "extreme" mode with additional options.
          </p>
          <a href="https://keshavk1.github.io/Mini_games/" class="play-btn">Challenge AI</a>
        </div>
      </div>
    </div>
  `;
  return section;
}
