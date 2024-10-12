const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
const button = document.querySelector('button');


button.addEventListener('click',() =>{


    if (input.value.trim() !== ''){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();
    
    

        deleteButton.addEventListener('click', () =>{
            list.removeChild(li);
        
        });
} else {
    input.focus();
}
});
