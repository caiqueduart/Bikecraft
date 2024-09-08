(
    () => {
        const params = new URLSearchParams(window.location.search);
        const inputItemType = document.querySelector(`#${params.get('tipo-item')}`);
        let inputItem;

        if(inputItemType.id == 'bikecraft') {
            inputItem = document.querySelector(`#${params.get('tipo-bikecraft')}`);
        } else {
            inputItem = document.querySelector(`#${params.get('plan')}`);
        }

        inputItemType.setAttribute('checked', 'true');
        inputItem.setAttribute('checked', 'true');
    }
)();