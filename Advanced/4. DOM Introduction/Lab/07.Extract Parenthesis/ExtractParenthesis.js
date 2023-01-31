function extract(id) {
    const text = document.getElementById(id).textContent;
    const regex = /\((?<name>[^\)]+)\)/g;
    const allMatches = text.matchAll(regex);
    let result = [];
    for (const match of allMatches) {
        result.push(match.groups.name);
    }
   return result.join('; ');
}