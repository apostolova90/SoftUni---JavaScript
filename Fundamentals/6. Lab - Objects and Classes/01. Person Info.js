function objectCreator(fn, ln, a){

    let person = {
        firstName: fn,
        lastName: ln,
        age: a
    }
    return person
}

objectCreator("Peter", "Pan", 20)