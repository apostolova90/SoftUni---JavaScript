
// с Радо в Телеграм

function browserHistory(obj, arr) {

    // разделяме всеки елемнт от първия масив под нова променлива:
    let browser = obj["Browser Name"];
    let openTabs = obj["Open Tabs"];
    let recentlyClosed = obj["Recently Closed"];
    let browserLogs = obj["Browser Logs"];
   
    // минаваме през всички елементи във втория масив (["Close Facebook", "Open StackOverFlow", "Open Google"])
    // и ги сплитваме на отделни части и записвам под нови променливи - command = "close" и tab = "Facebook"
    arr.forEach(element => {
      let [command, tab] = element.split(' ');
   
      switch (command) {
        case 'Open': // при тази команда 
          openTabs.push(tab); // пушвам tab-a във вече отворените табове - openTabs
          browserLogs.push(element); // пушвам и целия елемент (преди сплита горе), в browserLogs
          break;
        case 'Close': // при тази команда 
          if (openTabs.includes(tab)) { // проверяваме дали някой от елементите в openTabs съдържа израза под tab
            let index = openTabs.indexOf(tab); // ако да, записвам индекса му (позицията му в глвния масив openTabs)
            let removedTab = openTabs.splice(index, 1).toString(); // махаме браузъра от openTabs
            recentlyClosed.push(removedTab); // добавяме браузъра в recentlyClosed
            browserLogs.push(element); // добавяме браузъра в browserLogs
          }
          break;
        default: // ако ни се падне "Clear History and Cache", трябва да изтрием масивите:
          openTabs = [];
          recentlyClosed = [];
          browserLogs = [];
          break;
      }
    });
   
    console.log(browser);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);

  }
  browserHistory({
      "Browser Name": "Google Chrome",
      "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
      "Recently Closed": ["Yahoo", "Gmail"],
      "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
   
   
  browserHistory({
      "Browser Name": "Mozilla Firefox",
      "Open Tabs": ["YouTube"],
      "Recently Closed": ["Gmail", "Dropbox"],
      "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube",
        "Close Dropbox"
      ]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
