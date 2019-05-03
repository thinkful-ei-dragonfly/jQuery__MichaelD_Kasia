/* eslint-disable no-undef */
/* eslint-disable no-console */
('use strict');
/*$*/

function itemIntput() {
  let item;
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    item = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    console.log(item);
    const html = generateItem(item);
    $('.shopping-list').append(html);
  });
}

function deleteItem() {
  $('body').on('click', '.shopping-item-delete', event => {
    let target = event.currentTarget;
    target = $(target)
    let li = target.parent().parent();
    li.remove();

  });
}

function checkItem() {
  $('body').on('click', '.shopping-item-toggle', event => {
    let target = event.currentTarget;
    target = $(target);
    let span = target.parent().parent().find('.shopping-item');
    span.toggleClass('shopping-item__checked');
    console.log(span);
    
  });
}


function generateItem(item) {
  return ` <li>
    <span class="shopping-item ">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}

$(function() {
  itemIntput();
  deleteItem();
  checkItem();
});