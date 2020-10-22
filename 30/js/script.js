$(() => {
  $('.modal').hide();
  let text = {
    advantagesFirst: `Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and`,
    advantagesSecond: `Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups.`,
    advantagesThird: `Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration.`,
    promoFirst: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`,
    promoSecond: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
  i ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`
  };
  let classes = ['resources', 'training', 'connect', 'explore', 'browse', 'connection', 'promo_first', 'promos_item_first_wrapper', 'promos_item_text_first', 'promo_second', 'promos_item_second_wrapper'];
  let titles = ['Resources', 'Training & Funding', 'Connect', 'track your', 'lifestyle', 'summer of fun'];
  let linksAndImg = ['Explore more', 'Browse training', 'Connect now', 'upload/fitness-1.jpg', 'upload/fitness-2.jpg', 'img/ic-case.png', 'img/ic-clock.png', 'img/ic-cloud.png'];

  let addAdvantagesBlock = (classWrapper, url, classLink, title, text, link) => {
    $('<div>').appendTo('.advantages').addClass('advantages_item').addClass(classWrapper)
    .css({background: `url(${url}) no-repeat`})
      .html(`<h3 class="advantages_item_title">${title}</h3>
              <p class="advantages_item_text">${text}</p>
              <a href="#" class="advantages_item_link ${classLink}">${link}
              <div class="advantages_item_link_array"></div>
              </a>`);
  };

  addAdvantagesBlock(classes[0], linksAndImg[5], classes[3], titles[0], text.advantagesFirst, linksAndImg[0]);
  addAdvantagesBlock(classes[1], linksAndImg[6], classes[4], titles[1], text.advantagesSecond, linksAndImg[1]);
  addAdvantagesBlock(classes[2], linksAndImg[7], classes[5], titles[2], text.advantagesThird, linksAndImg[2]);

  let addPromoBlock = (classWrapper, srcImg, classItem, title1, title2, classText, text) => {
    $('<div>').appendTo('.promos').addClass('promos_item').addClass(classWrapper)
      .html(`<img src="${srcImg}" alt="Fitness_1">
       <div class="${classItem}">
         <h3 class="promos_item_title">${title1}</h3>
         <h2 class="promos_item_title_main">${title2}</h2>
         <p class="promos_item_text ${classText}">${text}</p>`)
  };
  addPromoBlock(classes[6], linksAndImg[3], classes[7], titles[3], titles[4], classes[8], text.promoFirst);
  addPromoBlock(classes[9], linksAndImg[4], classes[10], '', titles[5], '', text.promoSecond);

  let showModalWindow = (title, text) => {
    $('<div>').appendTo('body').addClass('modal').html(`
    <div class="modal_window">
    <div class="close_window"></div>
    <h2 class="modal_window_title">${title}</h2>
    <p class="modal_window_text">${text}</p>
    <div class="modal_buttons">
      <a href="#" class="modal_buttons_item">Okay</a>
      <a href="#" class="modal_buttons_item">Cancel</a>
      </div>
  </div>
    `)
  };

  $('.explore').on('click', () => {
    showModalWindow('Resources', 'You want to see more information?');
  });
  $('.browse').on('click', () => {
    showModalWindow('Training & Funding', 'You want to see more information?')
  });
  $('.connection').on('click', () => {
    showModalWindow('Connect', 'You want to see more information?')
  });

  $(document).on('click', '.modal_buttons_item', (e) => {
    e.preventDefault();
    $('.modal').hide();
  });
  $(document).on('click', '.close_window', () => {
    $('.modal').hide();
  });

});


