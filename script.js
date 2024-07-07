'use strict';

let yes = document.getElementById('yes');
let no = document.getElementById('no');
let goodbye = document.getElementById('goodbye');
let message = document.getElementById('message');

const messageList = [
  `Everything is awesome`,
  `You're beautiful`,
  `Don't stop believing`,
  `There's no one like you`,
  `Have a nice day`,
  `Be the change in the world`,
  `Follow your dreams`,
  `You can do it`,
  `Smile :)`,
  `What a wonderful world`,
  `Believe in yourself`,
  `Life is worth living`,
  `Be the best version of you`,
  `I'm here for you`,
  `Respect yourself`,
  `Respect each other`,
  `Welcome home`,
  `The best things in life are free`,
  `You've got a friend in me`,
  `I'll be there for you`,
  `I see a rainbow rising`,
  `Give the best of you`,
  `Listen to your heart`,
  `You are strong`,
  `You are not alone`,
  `Make earth a paradise to all`,
  `Imperfections are perfect`,
  `Make time for yourself`,
]

const negMessageList = [
  `Don't worry, try again`,
  `It's okay, one more time`,
  `You can do it, I believe`,
  `All of it matters`,
  `Don't give up`,
  `Take a deep breath`,
  `Tomorrow will be a better day`,
  `After rain comes a rainbow`,
  `It's okay to be vulnerable`,
]

yes.addEventListener('click', function() {
  var randomMessage = messageList[Math.floor(Math.random() * messageList.length)];
  message.textContent = randomMessage;
  message.classList.remove('ba')
})

no.addEventListener('click', function() {
  var randomMessage = negMessageList[Math.floor(Math.random() * negMessageList.length)];
  message.textContent = randomMessage;
  message.classList.remove('ba')
})

goodbye.addEventListener('click', function() {
  goodbye.textContent = 'SEE YOU SOON!';
  setTimeout(() => {
    close()
  }, 1000);
})