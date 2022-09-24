const leftSplit = document.querySelector('.split-left')
const rightSplit = document.querySelector('.split-right');

leftSplit.addEventListener('click', () => expandSplit(leftSplit));
rightSplit.addEventListener('click', () => expandSplit(rightSplit));

function expandSplit(split) {
    console.log(split);
    leftSplit.classList.remove('active');
    rightSplit.classList.remove('active');
    split.classList.add('active');
}