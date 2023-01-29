function editElement(reference, match, replacer){
    let regex = new RegExp(match, 'g');
    reference.textContent = reference.textContent.replace(regex, replacer);
}