function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};
   

      for (let line of input){
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (let worker of workersData){
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) { //проверяваме дали вече имаме името на ресторанта в обекта {}
               output[restaurantName] = {}; // ако фо няма, го създаваме
            }

            if (output.hasOwnProperty(restaurantName)) { // ако го има, слагаме заплатата в обекта
               output[restaurantName][name] = Number(salary);
            }
         }
      }
      
      let entries = Object.entries(output); // контрйрахме един обект
      
      for (let entry of entries) { // минаваме през ентритата на обекта
         let key = entry[0]; // име на ресторанта
         let values = Object.values(entry[1]); // заплатата

         for (let salary of values) { // смятаме сумата на всички заплати
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length; // смятаме средната заплата

         if (avgSalary > currAvgSalary) { // и проверяваме дали сегашната заплата е по-голяма от средната И ако е записваме следните данни:
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0; // накрая го нулираме
         }
      }

      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]); // сортираме хората според заплатата
      let print = '';

      result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]} `);

      // накрая правим всичко динамично
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;
   }
}