var main = function() {
  $('.more-btn').on('click', (event) => {
    $(event.currentTarget).siblings().toggleClass('more-menu')
  });
  $('.share').on('click', (event) => {
    $(event.currentTarget).next().toggleClass('share-menu')
  });
  $('.bell').on('click', (event) => {
    $(event.currentTarget).children().toggleClass('active');
  })
};

$(document).ready(main);