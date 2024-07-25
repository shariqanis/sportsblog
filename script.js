document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var refreshButton = document.getElementById('refreshScores');

    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            var scores = [
                { team1: 'Real Madrid', score1: Math.floor(Math.random() * 5), team2: 'Borussia Dortmund', score2: Math.floor(Math.random() * 5) },
                { team1: 'Barcelona', score1: Math.floor(Math.random() * 5), team2: 'Manchester United', score2: Math.floor(Math.random() * 5) },
                { team1: 'Juventus', score1: Math.floor(Math.random() * 5), team2: 'PSG', score2: Math.floor(Math.random() * 5) },
                { team1: 'Chelsea', score1: Math.floor(Math.random() * 5), team2: 'Bayern Munich', score2: Math.floor(Math.random() * 5) }
            ];

            var scoreboardElements = document.querySelectorAll('.scoreboard');
            scoreboardElements.forEach((element, index) => {
                if (scores[index]) {
                    var team1 = element.querySelector('.team.left h2');
                    var score1 = element.querySelector('.team.left .score');
                    var team2 = element.querySelector('.team.right h2');
                    var score2 = element.querySelector('.team.right .score');

                    team1.textContent = scores[index].team1;
                    score1.textContent = scores[index].score1;
                    team2.textContent = scores[index].team2;
                    score2.textContent = scores[index].score2;
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var matches = document.querySelectorAll('.hoverboard');

    matches.forEach(function(match) {
        match.addEventListener('click', function(event) {
            event.preventDefault();
            var details = document.getElementById('matchDetails');
            details.textContent = `Details for ${this.textContent}`; 
            details.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    var matchItems = document.querySelectorAll('.match-item');

    matchItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var details = this.querySelector('.match-details');
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });

    var scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

