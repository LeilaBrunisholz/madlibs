let colorfulAdjective = prompt('enter a colorful adjective')
let animals = prompt('enter an animal')
let noun = prompt('enter an noun')
let pluralNoun = prompt('enter a plural noun:')
let adjective = prompt('enter an adjective')
let noun2 = prompt('enter a noun:')
let verb = prompt('enter a verb:')
let adjective2 = prompt('enter a adjective:')
let noun3 = prompt('enter a noun:')
let colorfulAdjective2 = prompt('enter a colorful adjective:')
let sillyAction = prompt('enter a silly action:')
let sillyClothing = prompt('enter a silly clothing:')
let sillySongLyrics = prompt('enter silly song lyrics:')
let noun4 = prompt('enter a noun:')
let favoriteTreat = prompt('enter your favorite treat:')
let favoriteSillyActivity = prompt('enter a silly activity:')
let happyEmotion = prompt('enter a happy emotion')
let adjective3 = prompt('enter an adjective')





let story = `Once upon a time, on a <b>${colorfulAdjective}</b> Christmas Eve, all the little <b>${animals}</b> were tucked into their cozy <b>${noun}</b>. They dreamed of magical <b>${pluralNoun}</b> and giggled about the <b>${adjective}</b> surprises Santa would leave under the <b>${noun2}</b>.

Suddenly, Santa's reindeer started <b>${verb}</b> on the rooftop, making a <b>${adjective2}</b> noise. The children jumped out of bed and peeked through the <b>${noun3}</b> to catch a glimpse of Santa in his <b>${colorfulAdjective2}</b> suit.

To their surprise, Santa was doing the <b>${sillyAction}</b> dance with his elves! They were all wearing <b>${sillyClothing}</b> and singing <b>${sillySongLyrics}</b>.

Giggling, the kids joined the festive fun, and Santa handed each of them a special <b>${noun4}</b> filled with <b>${favoriteTreat}</b>. It turned out, Santa loved a good <b>${favoriteSillyActivity}</b> just as much as the little ones.

With hearts full of <b>${happyEmotion}</b>, the children and Santa danced into the night, creating the most <b>${adjective3}</b> holiday memories ever. And so, every Christmas, they looked forward to another round of silliness with Santa and his magical crew.`



let madLibOutputDiv = document.getElementById('madLibOutput')
console.log(story)


madLibOutputDiv.innerHTML = `<p>${story}</p>`



