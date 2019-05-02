('use strict');
/*$*/

function generateItem(item) {
    return ` <li>
    <span class="shopping-item">${item}</span>
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
