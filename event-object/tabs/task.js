
const tabsGroups = document.querySelectorAll('.tabs');

tabsGroups.forEach(group => {
    
    const tabs = group.querySelectorAll('.tab');
    const contents = group.querySelectorAll('.tab__content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(tab => tab.classList.remove('tab_active'));
            contents.forEach(content => content.classList.remove('tab__content_active'));
            
            const index = Array.from(tabs).indexOf(this);
            
            tabs[index].classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        });
    });
});