let adjective = prompt('enter an adjective:')
let noun = prompt('enter a noun:')
let adverb = prompt ('enter an adverb:')
let verb = prompt ('enter a noun:')


let story = `Once upon a time, on a ${colorful adjective} Christmas Eve, all the little ${animals} were tucked into their cozy ${noun}. They dreamed of magical ${plural noun} and giggled about the ${adjective} surprises Santa would leave under the ${noun}.

Suddenly, Santa's reindeer started ${verb} on the rooftop, making a ${adjective} noise. The children jumped out of bed and peeked through the ${noun} to catch a glimpse of Santa in his ${colorful adjective} suit.

To their surprise, Santa was doing the ${silly action} dance with his elves! They were all wearing ${silly clothing} and singing ${silly song lyrics}.

Giggling, the kids joined the festive fun, and Santa handed each of them a special ${noun} filled with ${favorite treat}. It turned out, Santa loved a good ${favorite silly activity} just as much as the little ones.

With hearts full of ${happy emotion}, the children and Santa danced into the night, creating the most ${adjective} holiday memories ever. And so, every Christmas, they looked forward to another round of silliness with Santa and his magical crew.`





`



let madLibOutputDiv = document.getElementById('madLibOutput')
console.log(story)


madLibOutputDiv.innerHTML = `<p>${story}</p>`

