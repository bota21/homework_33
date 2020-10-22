$(() => {
  let addWrapper = (classWrapper, classLogo, title, text) => {
    $('<section>').appendTo('.third-block .container')
      .addClass(classWrapper).addClass('wrapper').html(`
    <div class="third-logo">
          <div class="${classLogo}"></div>
          <h2 class="third-title">${title}</h2>
        </div>
        <div class="third-text">${text}</div>
        <div class="plus"><a href="#" class="plus-one">+</a></div>
    `)
  };

  let text = `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of the type and scrambled it to make`;

  addWrapper('third-wrapper', 'first-third-logo', 'Seo Optimized', text);
  addWrapper('second-wrapper', 'second-third-logo', 'Responsive', text);
  addWrapper('third-wrapper', 'third-third-logo', 'Cloud Services', text)
});

