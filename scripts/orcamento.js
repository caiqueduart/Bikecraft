function itemSelector() {
    const params = new URLSearchParams(window.location.search);
    const inputItemType = document.getElementById(params.get('tipo-item'));
    let inputItem;
    
    if(inputItemType.id == 'bikecraft') {
        inputItem = document.getElementById(params.get('tipo-bikecraft'));
    } else {
        inputItem = document.getElementById(params.get('plan'));
    }
    
    inputItemType.setAttribute('checked', 'true');
    inputItem.setAttribute('checked', 'true');
}

itemSelector();