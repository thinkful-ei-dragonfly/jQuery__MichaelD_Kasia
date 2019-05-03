('use strict');
/*$*/

<<<<<<< HEAD

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
=======
function generateItem(item) {
    return ` <li>
    <span class="shopping-item">${item}</span>
>>>>>>> 9574637c5be86069ebb457e0709eb7b19d5a21ee
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

<<<<<<< HEAD
$(function() {
  itemIntput();
  deleteItem();
  checkItem();


});
=======
function itemChecked() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function itemDeleted() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });
}

function itemInput(){
    let item;
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        item = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        const html = generateItem(item);
        $('.shopping-list').append(html);
    });
}

function bundleActions() {
    itemInput(),
    itemChecked(),
    itemDeleted()
}

$(bundleActions());
>>>>>>> 9574637c5be86069ebb457e0709eb7b19d5a21ee
