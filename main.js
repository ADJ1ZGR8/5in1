//color flipper

const inputs = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    // alert(value);
    const reverse = reverseString(value)
    // alert(reverse)

    if(value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("not a palindrome!")
    }
    input.value = "";
}

//palindrome
const body = document.getElementsByTagName("body")[0]

function setColor(name) {
body.style.backgroundColor = name;
}
// setColor("name");

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}

//quotes

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Believe you can and you're halfway there.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.",
    "Don’t limit your challenges. Challenge your limits.",
    "Dream big and dare to fail.",
    "Life is tough, but so are you.",
    "The biggest risk is not taking any risk. In a world that’s changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "It’s not about how bad you want it. It’s about how hard you’re willing to work for it.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don’t wait. The time will never be just right.",
    "You are never too old to set another goal or to dream a new dream.",
    "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
    "The only person you are destined to become is the person you decide to be.",
    "Start where you are. Use what you have. Do what you can.",
    "Dreaming is free, so why not dream big?",
    "Don’t watch the clock; do what it does. Keep going.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Your attitude, not your aptitude, will determine your altitude.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Don’t be afraid to give up the good to go for the great.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The secret of getting ahead is getting started.",
    "Don’t be pushed by your problems. Be led by your dreams.",
    "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    "Opportunities don’t happen, you create them.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "It’s never too late to be what you might have been.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not in what you have, but who you are.",
    "Don’t wait for the opportunity. Create it.",
    "Success is not just about making money. It's about making a difference.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "It always seems impossible until it’s done.",
    "If you want to achieve greatness, stop asking for permission.",
    "The key to success is to focus on goals, not obstacles.",
    "Don’t let yesterday take up too much of today.",
    "Success is not the absence of failure; it’s the persistence through failure.",
    "The only way to do great work is to love what you do.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Success is not just about the destination, it’s about the journey.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It’s hard to beat a person who never gives up.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not in what you have, but who you are.",
    "Don’t wait for the opportunity. Create it.",
    "Success is not just about making money. It's about making a difference.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "It always seems impossible until it’s done.",
    "If you want to achieve greatness, stop asking for permission.",
    "The key to success is to focus on goals, not obstacles.",
    "Don’t let yesterday take up too much of today.",
    "Success is not the absence of failure; it’s the persistence through failure.",
    "The only way to do great work is to love what you do.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Success is not just about the destination, it’s about the journey.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It’s hard to beat a person who never gives up.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only place where success comes before work is in the dictionary."]

    const usedIndexes = new Set()
    const quoteElement = document.getElementById("quote")

    function genQuote() {
        if(usedIndexes.size >=quotes.length) {
            usedIndexes.clear()
        }
        
        while(true) {
            const randomIdx = Math.floor(Math.random() * quotes.length)   
            if (usedIndexes.has(randomIdx)) continue
            const quote = quotes[randomIdx]
            quoteElement.innerHTML= quote;
            usedIndexes.add(randomIdx)
            break;
        }
                 
           
        }


            //stopwatch
        let elapsedSeconds = 0;
        let interval = null;
        const time = document.getElementById("time") 

        function padStart(value) {
        return String(value).padStart(2, "0")}



    function setTime() {
        const minutes = Math.floor(elapsedSeconds/60)
        const seconds = elapsedSeconds % 60
        time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
    }


    function timer() {
        elapsedSeconds++;
        setTime()
    }

    function startClock() {
        if (interval) stopClock()
        // if (interval) resetClock()
        interval = setInterval(timer, 1000)
    }


    function stopClock () {
        clearInterval(interval)
    }


    function resetClock () {
        stopClock()
        elapsedSeconds=0;
        setTime()
    }

    //todo

let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        // container.style.marginBottom = "10px"
        // container.style.marginTop = "10px"
        // container.style.border="groove"
        container.style.alignItems="center"
        container.style.backgroundColor = "lightgrey"
        container.style.fontFamily = "cursive"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.lineBreak="anywhere"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.style.marginLeft = "45%"
        button.style.display="block"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)
        
        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}


function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)