function radicalMarketing(inputCommands) {
    let peopleSubscribers = new Map()

    inputCommands.forEach(function(command) {
        if (command.indexOf('-') === -1) {
            if (!peopleSubscribers.has(command)) {
                peopleSubscribers.set(command, [])
            }
        } else {
            [firstPerson, secondPerson] = command.split('-')
            if (peopleSubscribers.has(firstPerson) && peopleSubscribers.has(secondPerson)) { //Cannot suscribe if no in map
                let secondPersonSubscribers = peopleSubscribers.get(secondPerson)
                if (firstPerson !== secondPerson && //Cannot be suscribet to self and to already subscribed
                    secondPersonSubscribers.indexOf(firstPerson) === -1) {
                    peopleSubscribers.get(secondPerson).push(firstPerson)
                }
            }
        }
    }, this);

    let peopleSubscribersArrray = Array.from(peopleSubscribers)

    peopleSubscribersArrray = peopleSubscribersArrray.sort((a, b) => {
        let returnCode = b[1].length - a[1].length
        if (returnCode === 0) {
            return compareBySuscriberOfMore(a, b)
        } else {
            return returnCode
        }
    })

    function compareBySuscriberOfMore(a, b) {
        let firstPersonSubscribed = 0
        peopleSubscribersArrray.forEach(function(entry) {
            entry[1].forEach(function(element) {
                if (element === a[0]) {
                    firstPersonSubscribed++
                }
            }, this);
        }, this);

        let secondPersonSubscribed = 0;
        peopleSubscribersArrray.forEach(function(entry) {
            entry[1].forEach(function(element) {
                if (element === b[0]) {
                    secondPersonSubscribed++
                }
            }, this);
        }, this);

        let codeResult = secondPersonSubscribed - firstPersonSubscribed

        return codeResult
    }
    // console.log(peopleSubscribersArrray)

    let winner = peopleSubscribersArrray[0]
    console.log(winner[0])
    for (var index = 0; index < winner[1].length; index++) {
        var element = winner[1][index];
        console.log(`${index + 1}. ${element}`)

    }
}

radicalMarketing(['A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A',
    'D-C',
    'F',
    'F-D'
])