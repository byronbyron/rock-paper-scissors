const handOptions = {
    rock: '/assets/Rock.png',
    paper: '/assets/Paper.png',
    scissors: '/assets/Scissors.png'
}

const pickUserHand = (hand) => {
    const hands = document.querySelector('.hands');
    hands.style.display = 'none';

    const contest = document.querySelector('.contest');
    contest.style.display = 'flex';

    document.getElementById('UserHandImage').src = handOptions[hand];

    let computerHand = pickComputerHand();
    console.log(`User: ${hand}, Computer: ${computerHand}`);
}

const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors'];
    let computerHand = hands[Math.floor(Math.random() * hands.length)]; 

    document.getElementById('ComputerHandImage').src = handOptions[computerHand];

    return computerHand;
}