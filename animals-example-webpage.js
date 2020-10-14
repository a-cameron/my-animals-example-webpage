const listItems = document.querySelectorAll('.main li');
const allimages = document.querySelectorAll('.main .container-fluid .images');

let filterSearch = document.querySelector('input[name="filter"]');              

let filterButton = document.querySelector('.filter-button'); 

function toggleActiveClass( active ){
    listItems.forEach( function( item ) {
      item.classList.remove('active');
    })
    active.classList.add('active');
}

function toggleimages( dataClass ){                 // This is why the data class is so important, we can use it as a selector
  
    if( dataClass === 'All'){                       // if the data-class is equal to all (The button All is selected)
        allimages.forEach( function( image ) {
          image.style.display = 'block';
        });
      
    } else { 
        allimages.forEach( image => {image.dataset.class === dataClass ? image.style.display = 'block' : image.style.display = 'none'; });

        window.location.href = "error-page-animals-example-webpage.html";
    }
}

listItems.forEach( function( item ) {
  
  item.addEventListener( 'click', () => {                   //There are limitations to the arrow feature
    toggleActiveClass( item );
    toggleimages( item.dataset.class );
  });
  
});

filterButton.addEventListener('click', () => { // listen out for when the filter button is pressed "filterButton.addEventListener('click', function() {" (is the original), to the left is a shorthand way of writing that
  
  let inputValue = filterSearch.value;              
  let searchItem = inputValue.toLowerCase();        
  
  toggleimages( searchItem );                       
  
  listItems.forEach( ( item ) => {  
    let dataClass = item.getAttribute('data-class'); 
   
    dataClass === searchItem ? item.classList.add('active') : item.classList.remove('remove');
        
        filterSearch.value = ''; 
      });
  
});
