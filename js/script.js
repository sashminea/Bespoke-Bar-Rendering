document.addEventListener('DOMContentLoaded', function () {
  const barButton = document.getElementById('bar');
  const workspace = document.querySelector('.workspace');
  let nBarsCount = 0; 
  let nBars = document.getElementById('nBars');
  const limit = 7;
  const barStatus = document.getElementById('status');
  let barStatusColor = 0;

  function Sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function sleep(ms) {
      await Sleep(ms);
  }

  barButton.addEventListener('click', barCreation);

  function barCreation() {
    if(nBarsCount<limit){
      const newBar = document.createElement('div');
      newBar.className = "newBar";
      nBarsCount = nBarsCount + 1;

      workspace.appendChild(newBar);
      nBars.textContent = `No. of Bars: ${nBarsCount}`;
      newBar.addEventListener('click', barSelect);
    }

  }

  function barSelect(event) {
    const selectedBar = event.target;
    if (barStatusColor === 0) {
      selectedBar.classList.add('selected');
      barStatus.textContent = 'Selected';
      barStatusColor = 1;
    } else {
      selectedBar.classList.remove('selected');
      barStatus.textContent = 'Not Selected';
      barStatusColor = 0;
    }
  }
  

});