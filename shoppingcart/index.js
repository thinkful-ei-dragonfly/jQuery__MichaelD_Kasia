('use strict');
/*$*/


function itemIntput(){
    let item;
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        item = $('shopping-list-entry').val();
        $('shopping-list-entry').val('')
        
    })

    const html = generateItem(item);
    


    
}

console.log(itemIntput());








function generateItem(item) {
    return ` <li>
    <span class="shopping-item shopping-item__checked">${item}</span>
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
  console.log(generateItem('apples'));