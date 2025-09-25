
const dropdowns = document.querySelectorAll('.dropdown');

function handleDropdownClick(event) {
    event.preventDefault(); 

    const dropdown = this.closest('.dropdown'); 
    const list = dropdown.querySelector('.dropdown__list');
    const value = dropdown.querySelector('.dropdown__value');
    
    if (this.classList.contains('dropdown__link')) {
        value.textContent = this.textContent.trim(); 
        list.classList.remove('dropdown__list_active'); 
    } else {        
        list.classList.add('dropdown__list_active');
    }
}

dropdowns.forEach(dropdown => {    
    Array.from(dropdown.querySelectorAll('.dropdown__value, .dropdown__link')).forEach(element => {
        element.addEventListener('click', handleDropdownClick.bind(element));
    });
});

   

