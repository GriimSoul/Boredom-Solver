/* Boredom Solution, Activity Provider
 * Author: GriimSoul
 * Version: 1.0
*/

// Define initial Wording set

let firstComment = ["Are you bored? ",
                    "Don't know what to do? ",
                    "Oh shut up and ",
                    "Drop everything and ",
                    "Computing options... ",
                    "Do I look like an idea factory to you!? Oh alright, let's see... how about this, ",
                    "...I've got it! You should ",
                    "You haven't finished it yet! Go and ",
                    "Alone in a friday night? God you're pathetic. ",
                    "In order to keep yourself sane "];

// Define Topic of activity and options for topic

    //initialize tryThis to have it be global

let topicsAndContent = {
    sing: ["Unlucky Morpheus", "Phemiec", "Blonde Redhead", "Guilty Gear", "Nashimoto-P", "Bear Ghost", "The Happy Fits"],
    draw: ["Orin Kaenbyou", "yourself", "Hiyoko Saionji", "a Sonic Character", "Shoka Sakurane", "Sho Minamimoto", "someone from Monogatari", "an object near you"],
    play: ["Rune Factory Tides of Destiny", "Thousand Arms", "The Sims 4", "League of Legends", "Minecraft", "Salt and Sacrifice", "Sword of Etheria", "Persona 3"],
    work: ["game", "Full-Stack Course", "C# Course", "singing", "friendships", "drawing skill", "acting", "Reaper mixing", "website"],
    watch: ["Game Grumps", "Sinow", "Minx", "Braw", "Fairly Odd Parents", "Lythero", "Detective Conan", "Lupin III"],
    clean: ["kitchen","house floor", "entirety of your room", "bathroom", "dishes"],
    //add Method that allows for an extension of the options within each topic
    _addTo(topic, addThis) {
        tryThis = Object.keys(this);
        topic = topic.toLowerCase();
        for (let key in this) {
            // Checks if the topic inputted is in the object
            if (topic === key) {
                this[key].push(addThis);
            }
            // Add exception for topic values that aren't within the object
            else if (!tryThis.includes(topic) || topic === "_addTo") {
                console.log(`That isn't a valid topic! Valid options: sing , draw , play , work , watch , clean.`);
            }
        }
    }
};

let tryThis = Object.keys(topicsAndContent);
//if you're gonna add a new topic content, do it below this


// Last message Array Declaration Section

    // A element Array (modifiable)
        let part1 = ["Invite", "Read", "Go"];
    // Optional Person Array (modifiable)
        let optional = ["Sami", "Shiku", "Brandon", "Selena", "Aiyena"];
    //B element Arrays (modifiable, may take some thinking)
        let part2 = [["to play something!", "out on a date~", "to watch something!", "to hangout"],
                    ["Moby Dick", "the Bakemonogatari manga", "Vast Error, you gotta catch up"],
                    ["out on a walk", "buy something cool", "look for a job"]];

// Declare function that generates topic content of a single message

function aMessage() {
    let random2 = Math.floor(Math.random()*(tryThis.length-1));
    let random3 = Math.floor(Math.random()*topicsAndContent[tryThis[random2]].length);
    function connector(array) {
        return Math.floor(Math.random()*array.length);

    }
        //handle each topic with a different connector structure, and return a message string
    switch (tryThis[random2]) {
        case "sing": {
            const connect = [`a song from ${topicsAndContent[tryThis[random2]][random3]}.`,`a/an ${topicsAndContent[tryThis[random2]][random3]} song!`, `the last ${topicsAndContent[tryThis[random2]][random3]} song you listened to.`, `the newest song from ${topicsAndContent[tryThis[random2]][random3]}.`];
            return `${tryThis[random2]} ${connect[connector(connect)]}`;
        }
        case "draw": {
            const connect = [`a heavenly image of ${topicsAndContent[tryThis[random2]][random3]}.`, `${topicsAndContent[tryThis[random2]][random3]} with a facial expression you like.`, `${topicsAndContent[tryThis[random2]][random3]} dresses like another character.`, `a portrait of ${topicsAndContent[tryThis[random2]][random3]}.`];
            return `${tryThis[random2]} ${connect[connector(connect)]}`;
        }
        case "play": {
            const connect =  [`${topicsAndContent[tryThis[random2]][random3]} for a while.`, `${topicsAndContent[tryThis[random2]][random3]} until something else comes up.`, `${topicsAndContent[tryThis[random2]][random3]}, you've left it on standby for a while now.`, `${topicsAndContent[tryThis[random2]][random3]}, you seem like you need to unwind.`];
            return `${tryThis[random2]} ${connect[connector(connect)]}`;
        }
        case "work": {
            const connect = [`on your ${topicsAndContent[tryThis[random2]][random3]}, that way you can stop beating yourself over it.`, `for a while on your ${topicsAndContent[tryThis[random2]][random3]}, steady work will do wonders.`, `yourself to the bone on your ${topicsAndContent[tryThis[random2]][random3]}, you've slacked enough already.`, `on your ${topicsAndContent[tryThis[random2]][random3]}! I won't hear any excuses!`];
            return `${tryThis[random2]} ${connect[connector(connect)]}`;
        }
        case "watch": {
            const connect = [`a couple of episodes of ${topicsAndContent[tryThis[random2]][random3]}.` , `${topicsAndContent[tryThis[random2]][random3]} while eating something, chill.`, `${topicsAndContent[tryThis[random2]][random3]}, you've got a lot catching up to do!`, `${topicsAndContent[tryThis[random2]][random3]} with someone!`, `${topicsAndContent[tryThis[random2]][random3]}, grab some popcorn, a mug of tea, and enjoy.`];
            return `${tryThis[random2]} ${connect[connector(connect)]}`;
        }
        case "clean": {
            const connect = [`the ${topicsAndContent[tryThis[random2]][random3]}, it looks filthy.`, `the ${topicsAndContent[tryThis[random2]][random3]}, you've put it off for long enough.`, `the ${topicsAndContent[tryThis[random2]][random3]}, what if someone comes over!?`, `the ${topicsAndContent[tryThis[random2]][random3]}, it won't clean itself.`];
            return `${tryThis[random2]} ${connect[connector(connect)]}`;
        }
        default: {
            return `ERROR: ${tryThis[random2]} isn't reading well, or maybe ${random2} is messing things up`;
        }
    } 
};
