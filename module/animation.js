const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });
  const observer2 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });
  const observer3 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });
  const observer4 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });
  const observer5 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });
  const observer6 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });

  observer.observe(document.querySelector('.section-stages_list-item'));
  observer2.observe(document.querySelector('.section-stages_list-item2'));
  observer3.observe(document.querySelector('.section-stages_list-item3'));
  observer4.observe(document.querySelector('.section-stages_list-item4'));
  observer5.observe(document.querySelector('.section-stages_list-item5'));
  observer6.observe(document.querySelector('.section-stages_list-item6'));

  export { observer, observer2, observer3, observer4, observer5, observer6 }