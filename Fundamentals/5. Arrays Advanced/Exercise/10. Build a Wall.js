function buildAWall(heightOfSectionsAsArr) {
    heightOfSectionsAsArr = heightOfSectionsAsArr.map(Number);
    let concreteUsedForEverySingleDayAsArr = [];
    heightOfSectionsAsArr = heightOfSectionsAsArr.filter((x) => x != 30);

    while (heightOfSectionsAsArr.length > 0) {

        concreteUsedForEverySingleDayAsArr.push(heightOfSectionsAsArr.length * 195);

        heightOfSectionsAsArr = heightOfSectionsAsArr.map((x) => x + 1);

        heightOfSectionsAsArr = heightOfSectionsAsArr.filter((x) => x != 30);
    }
    let totalConcrete = concreteUsedForEverySingleDayAsArr.reduce((a, b) => a + b);
    let totalConcreteInPesos = totalConcrete * 1900;

    console.log(`${concreteUsedForEverySingleDayAsArr.join(', ')}\n${totalConcreteInPesos} pesos`);
}
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);