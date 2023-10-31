const tabItem = document.querySelectorAll('.tab-item')
const tabContentItem = document.querySelectorAll('.tab-content-item')

function selectItem(e){
    removeShow()
    removeBorder()
    this.classList.add('tab-border')

    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItem.forEach(item => item.classList.remove('tab-border'))
                                                      
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('tab-border'))
}
tabItem.forEach(item => item.addEventListener('click',selectItem))