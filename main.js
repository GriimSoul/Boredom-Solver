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

let topicsAndContent = {
    sing: ["Unlucky Morpheus", "Phemiec", "Blonde Redhead", "Guilty Gear", "Nashimoto-P", "Bear Ghost", "The Happy Fits"],
    draw: ["Orin Kaenbyou", "Yourself", "Hiyoko Saionji", "a Sonic Character", "Shoka Sakurane", "Sho Minamimoto", "Someone from Monogatari", "An object near you"],
    play: ["Rune Factory Tides of Destiny", "Thousand Arms", "The Sims 4", "League of Legends", "Minecraft", "Salt and Sacrifice", "Sword of Etheria", "Persona 3"],
    work: ["Game", "Full-Stack Course", "C# Course", "Singing", "Friendships", "Drawing Skill", "Acting", "Reaper Mixing", "Website"],
    watch: ["Game Grumps", "Sinow", "Minx", "Braw", "Fairly Odd Parents", "Lythero", "Detective Conan", "Lupin III"],
    clean: ["kitchen sink","house floor", "room", "bathroom"],
    //add Method that allows for an extension of the options within each topic
    _addTo(topic, addThis) {
        let keys = this.keys;
        for (let i = 0; i < topicsAndContent.length-1; i++) {
            if (topic === keys[i]) {
                this[keys[i]].push(addThis);
            }
        }
    }
}