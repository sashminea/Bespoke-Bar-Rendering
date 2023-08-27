document.addEventListener('DOMContentLoaded', function () {

const navbar = document.querySelector('nav');

function Sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(ms) {
  await Sleep(ms);
}

});