function bookShelf(arr) {
  let shelfs = {};
  let genres = [];

  for (let i = 0; i < arr.length; i++) { // минаваме през всеки отделен елемент в масива

    if (arr[i].includes("->")) { 
      let tokens = arr[i].split(" -> ");
      let id = tokens[0];
      let genre = tokens[1];
      if (!shelfs.hasOwnProperty(id)) {
        shelfs[id] = [genre]; // записваме и дадените в началото жанрове, към съответните ids
        genres.push(genre);      //   записваме данните и в масив genres    -----  genres   =    ['mystery']
        genres.push(id);     //    записваме и останалите данни и в масив genres    ------  genres   =    ['mystery', '1']
      }

    } else if (arr[i].includes(":")) { // разделяме останалите елементи по специфичен знак
      let tokens = arr[i].split(", ");
      let book = tokens[0];      // 'Effect of the Void: Shay B'
      let genre = tokens[1];    // 'romance'
      if (genres.includes(genre)) { // ако жанрът, се съдържа в масива с име genres
        let id = genres[genres.indexOf(genre) + 1]; // създаваме променлива и добавяме единица към нея
        shelfs[id].push(book); // и добавяме книгата към съответния рафт, който е под формата на масив
        // накрая рафотовете изглеждат така:
        // (3) ['sci-fi', 'Losing Dreams: Gail Starr', 'Name of Earth: Jo Bell']
        // (2) ['mystery', 'Child of Silver: Bruce Rich']
      }
    }
  }


  let sortedShelfs = Object.entries(shelfs).sort(   // отделяме двойките         ключове   ---- '2' и '1'          и стойности  ---------  ['sci-fi', 'Losing Dreams: Gail Starr', 'Name of Earth: Jo Bell']    и    ['mystery', 'Child of Silver: Bruce Rich']) 
([keyA, valueA], [keyB, valueB]) => shelfs[keyB].length - shelfs[keyA].length); // сортираме рафтовете по броя на книгите, намиращи се на тях


  for (let el of sortedShelfs) { // въртим през сортираните рафтове и разделяме елементите, 
    // които съдържат стринг и масив ------   ['2', [sci-fi', 'Losing Dreams: Gail Starr', 'Name of Earth: Jo Bell']]  и   ['1', ['mystery', 'Child of Silver: Bruce Rich']]

    
    let id = el.shift();         // '2'
    let shelf = el.shift();      // ['sci-fi', 'Losing Dreams: Gail Starr', 'Name of Earth: Jo Bell']
    let genre = shelf.shift();   // 'sci-fi'      (като в genre ще остане само ['Losing Dreams: Gail Starr', 'Name of Earth: Jo Bell'])
    let numberOfBooks = shelf.length; // отбелявзаме броя на книги на рафта   ----  2 ----- 'Losing Dreams: Gail Starr'  +  'Name of Earth: Jo Bell'
    shelf.sort((a, b) => a.localeCompare[b]); // сортираме ги по азбучен ред
    console.log(`${id} ${genre}: ${numberOfBooks}`);
    for (let book of shelf) {
      console.log(`--> ${book}`);
    }
  }
}

bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",]);

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",]);
