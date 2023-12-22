let colorfulAdjective = prompt('enter a colorful adjective')
let animals = prompt ('enter an animal')
let noun = prompt ('enter an noun')
let pluralNoun = prompt('enter a plural noun:')
let adjective = prompt ('enter an adjective')
let noun2 = prompt ('enter a noun:')
let verb = prompt ('enter a verb:')
let adjective2 = prompt ('enter a adjective:')
let noun3 = prompt ('enter a noun:')
let colorfulAdjective2 = prompt ('enter a colorful adjective:')
let sillyAction = prompt ('enter a silly action:')
let sillyClothing = prompt ('enter a silly clothing:')
let sillySongLyrics = prompt ('enter silly song lyrics:')
let noun4 = prompt ('enter a noun:')
let favoriteTreat = prompt ('enter your favorite treat:')
let favoriteSillyActivity = prompt ('enter a silly activity:')
let happyEmotion = prompt ('enter a happy emotion')
let adjective3 = prompt ('enter an adjective')





let story = `Once upon a time, on a ${colorfulAdjective} Christmas Eve, all the little ${animals} were tucked into their cozy ${noun}. They dreamed of magical ${pluralNoun} and giggled about the ${adjective} surprises Santa would leave under the ${noun2}.

Suddenly, Santa's reindeer started ${verb} on the rooftop, making a ${adjective2} noise. The children jumped out of bed and peeked through the ${noun3} to catch a glimpse of Santa in his ${colorfulAdjective2} suit.

To their surprise, Santa was doing the ${sillyAction} dance with his elves! They were all wearing ${sillyClothing} and singing ${sillySongLyrics}.

Giggling, the kids joined the festive fun, and Santa handed each of them a special ${noun4} filled with ${favoriteTreat}. It turned out, Santa loved a good ${favoriteSillyActivity} just as much as the little ones.

With hearts full of ${happyEmotion}, the children and Santa danced into the night, creating the most ${adjective3} holiday memories ever. And so, every Christmas, they looked forward to another round of silliness with Santa and his magical crew.`



let madLibOutputDiv = document.getElementById('madLibOutput')
console.log(story)


madLibOutputDiv.innerHTML = `<p>${story}</p>`



