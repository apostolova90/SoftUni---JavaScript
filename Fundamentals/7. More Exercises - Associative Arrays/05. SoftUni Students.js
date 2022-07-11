// Another

function softUniStudents(arr) {

    let courses = {};
    let places = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes(":")) {
            let tokens = arr[i].split(': ');
            let courseName = tokens[0];
            let capacity = tokens[1];

            if (!places.includes(courseName)) {
                courses[courseName] = {};
                places.push(courseName);
                places.push(Number(capacity));
            } else if (places.includes(courseName)) {
                places[places.indexOf(courseName) + 1] += Number(capacity);
            }
        
        } else if (arr[i].includes("@")){
            let firstSplit = arr[i].split('['); // 'user1', '25] with email user1@user.com joins C#Basics'
            let user = firstSplit.shift(); // 'user1'
            let secondSplit = firstSplit[0].split(']'); //// '25', 'with email user1@user.com joins C#Basics'
            let credits = Number(secondSplit.shift()); // 25
            let thirdSplit = secondSplit[0].split(' '); // '', 'with', 'email', 'user1@user.com', 'joins', 'C#Basics'
            let email = thirdSplit[3]; //user1@user.com
            let courseName = thirdSplit[5]; //C#Basics

            if (places[places.indexOf(courseName) + 1] !== 0) {
                if (courses.hasOwnProperty(courseName)) {
                    courses[courseName][credits] = `${user}, ${email}`;
                    places[places.indexOf(courseName) + 1] -= 1;
                }
            }
        }
    }

    let sortedCourses = Object.entries(courses).sort(([keyA, valueA], [keyB, valueB]) => Object.keys(courses[keyB]).length - Object.keys(courses[keyA]).length);

    for (let course of sortedCourses) {
        let name = course[0];
        let placesLeft = places[places.indexOf(name) + 1];
        let students = course[1];
        console.log(`${name}: ${placesLeft} places left`);
        let sortedStudents = Object.entries(students).sort(([keyA, valueA], [keyB, valueB]) => keyB - keyA);
        for (let student of sortedStudents) {
            let credits = student[0];
            let name = student[1];
            console.log(`--- ${credits}: ${name}`);
        }
    }
}
softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics', 
    'C#Advanced: 3', 
    'JSCore: 4', 
    'user2[30] with email user2@user.com joins C#Basics', 
    'user13[50] with email user13@user.com joins JSCore', 
    'user1[25] with email user1@user.com joins JSCore', 
    'user8[18] with email user8@user.com joins C#Advanced', 
    'user6[85] with email user6@user.com joins JSCore', 
    'JSCore: 2', 
    'user11[3] with email user11@user.com joins JavaBasics', 
    'user45[105] with email user45@user.com joins JSCore', 
    'user007[20] with email user007@user.com joins JSCore', 
    'user700[29] with email user700@user.com joins JSCore', 
    'user900[88] with email user900@user.com joins JSCore']);
    
    
softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'])