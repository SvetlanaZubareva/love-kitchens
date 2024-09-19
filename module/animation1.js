const observer7 = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('div--flex-dorder');
        }
      });
  });
  const observer8 = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('div--flex-dorder');
        }
      });
  });
  const observer9 = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('div--flex-dorder');
        }
      });
  });
  const observer10 = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('div--flex-dorder');
        }
      });
  });
  const observer11 = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('div--flex-dorder');
        }
      });
  });

  observer7.observe(document.querySelector('.div--flex-dorder1'));
  observer8.observe(document.querySelector('.div--flex-dorder2'));
  observer9.observe(document.querySelector('.div--flex-dorder3'));
  observer10.observe(document.querySelector('.div--flex-dorder4'));
  observer11.observe(document.querySelector('.div--flex-dorder5'));
  

  export { observer7, observer8, observer9, observer10, observer11 }