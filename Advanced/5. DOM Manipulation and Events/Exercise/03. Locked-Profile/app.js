function lockedProfile() {
    
    // взимаме всички бутони "show more" в клaс profile     И    ги правим на масив
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick)); // след това към всеки бутон (елемент в масива), направо слагаме eventListener, който да следи дали се натиска бутона

    // създаваме функцията, която изпълнява нещо, ако горе eventListener-a засече действие (кликане на бутон)
    function onClick(ev){
        let profile = ev.target.parentElement;  // взимаме целия бутон/профил
        let isActive = profile.querySelector('input[value="unlock"]').checked // взимаме стойността на locked/unlocked , за да видим дали property-то им е checked
        if(isActive){
            let info = Array.from(profile.querySelectorAll('div'))
            .find( p => p.id.includes('HiddenFields'));

        // проверка какво пише на бутона, за да го сменя
            if(ev.target.textContent === 'Show more'){
                ev.target.textContent = 'Hide it'
                info.style.display = 'block'
            } else {
                ev.target.textContent = 'Show more'
                info.style.display = 'none'
            }
        } 
    }
}