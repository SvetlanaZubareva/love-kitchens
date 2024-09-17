// наблюдатель для начала анимации текста

// Создать наблюдателя
const observer = new IntersectionObserver(entries => {

    // перебор записей
    entries.forEach(entry => {
      debugger
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });

  observer.observe(document.querySelector('.section-stages_list-item--block'));;

  export { observer }