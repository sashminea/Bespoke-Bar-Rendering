document.addEventListener('DOMContentLoaded', function () {
  const barButton = document.getElementById('bar');
  const workspace = document.querySelector('.workspace');
  var nBarsCount = 0; 
  var nBars = document.getElementById('nBars');

  function Sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function sleep(ms) {
      await Sleep(ms);
  }

  barButton.addEventListener('click', barCreation);

  function barCreation() {

      const newBar = document.createElement('div');
      newBar.className = "newBar";
      nBarsCount = nBarsCount + 1;

      workspace.appendChild(newBar);
      nBars.textContent = `${nBarsCount}`;
  }
});