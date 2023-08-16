// Climbing the Leaderboard

// An arcade game player wants to climb to the top of the leaderboard and track
// their ranking. The game uses Dense Ranking, so its leaderboard works like
// this:

//   - The player with the highest score is ranked number 1 on the leaderboard.
//   - Players who have equal scores receive the same ranking number, and the
//     next player(s) receive the immediately following ranking number.

// ranked = [100, 90, 90, 80]
// player = [70, 80, 105]

// The ranked players will have ranks 1, 2, 2, and 3, respectively. If the
// player's scores are 70, 80 and 105, their rankings after each game are 4th,
// 3rd and 1st. Return [4, 3, 1].

// This version works as I thought it should, but it turns out the array with
// player scores represents the order the games are played, and the ranking
// standing is against the current ranked scores...

function climbingLeaderboard(ranked, player) {
  const playerScores = [...player];
  const playerRankings = [];
  let previousScore = ranked[ranked.length - 1];
  let currentPosition = 1;

  for (let i = 0; i < ranked.length; i++) {
    const currentPlayerScore = playerScores[playerScores.length - 1];
    const currentRankedScore = ranked[i];

    if (currentPlayerScore >= currentRankedScore) {
      if (currentPlayerScore < previousScore) currentPosition++;
      playerRankings.push(currentPosition);
      previousScore = currentPlayerScore;
      playerScores.pop();
      i--;
    } else {
      if (currentRankedScore < previousScore) currentPosition++;
      previousScore = currentRankedScore;
      if (i === ranked.length - 1) playerRankings.push(currentPosition + 1);
    }
  }

  return playerRankings.reverse();
}

// Intended version:

function climbingLeaderboard(ranked, player) {
  const scoreSet = new Set();

  for (let score of ranked) {
    scoreSet.add(score);
  }

  const playerScores = [...player].reverse();
  const playerRankings = [];
  let previousRankedScore = ranked[ranked.length - 1];
  let currentPosition = scoreSet.size;

  for (let i = ranked.length - 1; i >= 0; i--) {
    const currentPlayerScore = playerScores[playerScores.length - 1];
    const currentRankedScore = ranked[i];

    if (currentRankedScore > previousRankedScore) currentPosition--;

    if (currentPlayerScore <= currentRankedScore) {
      if (currentPlayerScore === currentRankedScore) currentPosition--;
      playerRankings.push(currentPosition + 1);
      playerScores.pop();
      i++;
    } else {
      previousRankedScore = currentRankedScore;
      if (i === 0) playerRankings.push(currentPosition + 1);
    }
  }

  return playerRankings;
}
