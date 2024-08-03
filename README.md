# The Boredom solver

## What does it do?

Have you ever been bored, or been caught overwhelmed by the possibilities of "What to do"?
Well, this string will narrow down those possibilities for you, and give you 4 randomly selected suggestions of what to do from a vast variety of possibilities.
**The suggestions that the script outputs are logged onto the console, so in order to read them you'll need to check in a debugger.**

There's also the possibility of expanding these to accomodate for your own hobbies and responsabilites.

## How does it work?

The script takes has plenty of arrays and a single object, each comprising a different section of information that will eventually make it's way into the final message.
For a simple way of adding options to a topic, you can utilize the method topicsAndContent._addTo(string1, string2).
This method takes two arguments, the first string should be the topic that you're trying to add content to (for the list of topics scroll down), and the second string
should be the content that you're trying to add to the topic.

#### Example
```topicsAndContent._addTo("sing", "Infected Mushroom");```
    This adds the band Infected Mushroom to the sing topic.

### List of topics
* **Sing**
* **Draw**
* **Play**
* **Work**
* **Watch**
* **Clean**

### Usage of each topic
* **Sing**: Must contain names of bands that have songs with vocals.
* **Draw**: Must contain names of characters or objects that are drawable.
* **Play**: Must contain the names of games
* **Work**: Must contain name of skill, course, or type of project that you have. Ex. *if you have an art commision to finish* "commission" *works*.
* **Watch**: Must contain the name of either a series, movie, or youtube channel that you watch.
* **Clean**: Must contain the name of the area without a possesive pronoun, or the name of an object. Ex. *if you need to clean your car* "car" *works*
                                                                                                      Ex. 2 *if to need to clean your bedroom* "bedroom" *works*

## Conditions of usage

You may utilize and modify this code as you need!
If you plan on applying it for any sort of commercial or otherwise non-private / non-personal use, I only ask that you credit me as the author. 
