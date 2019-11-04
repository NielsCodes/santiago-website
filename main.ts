const scrollToEl = (el) => {
  document.getElementById(el).scrollIntoView({ 
    behavior: 'smooth' 
  });
}

const countdown = (date) => {
  
  let days, hours, minutes, seconds;

  // Turn end date into time into milliseconds for comparison
  const endDate : number = new Date(date).getTime();

  // Recalculate every second
  setInterval(calculate, 1000);
  
  function calculate() {
    let startDate : any = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      
      seconds = parseInt(timeRemaining);
      
      days = parseInt(days, 10);
      hours = ("0" + hours).slice(-2);
      minutes = ("0" + minutes).slice(-2);
      seconds = ("0" + seconds).slice(-2);

      document.getElementById('elevation-countdown').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

    } else {
      return;
    }
  }
}

countdown('januari 1 2019');