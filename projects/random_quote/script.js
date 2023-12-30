const quotes = [
     { quote: "The only way to do a great job is to love what you are doing.", author: "Steve Jobs"},
     { quote: "If at first the idea seems absurd, then it's probably worth pursuing.", author: "unknown"},
     { quote: "I don’t want to be famous. I just want to make things that people love.", author: "unknown"},
     { quote: "Design is not about making something look good and easy; design is about making something work well and beautiful.", author: "unknown"},
     { quote:  "Design is not about making something look good and ugly; it’s about making something work.", author: "unknown"},
     { quote:  "You can have the best ideas in the world but if they aren’t executed well, they won’t amount to much.", author: "unknown"},
     { quote:  "A designer must always strive for perfection because there will never be enough time to get everything right.", author: "unknown"},
     { quote:  "It doesn’t matter how many times you fail as long as you learn from each failure.", author: "unknown"},
     { quote:  "A designer must always keep learning because design is an ever-evolving field.", author: "unknown"},
     { quote:  "Innovation distinguishes between a leader and a follower.", author: "unknown"},
     { quote:  "You become what you believe.", author: "Oprah Winfrey"},
     { quote:  "Don't watch the world go by. Make your own world.", author: "Jim Rohn"},
     { quote:  "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Unknown"},
     { quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan"},
     { quote: "Remember no one can make you feel inferior without your consent.", author: "Eleanor Roosevelt"},
     { quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", author: "Helen Keller"},
     { quote: "Life is 10% what happens to me and 90% of how I react to it.", author: "Charles Swindoll"},
     { quote: "Either you run the day, or the day runs you.", author: "Jim Rohn"},
     { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin"},
     { quote: "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.", author: "Zig Ziglar"},
     { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart"},
     { quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse"},
     { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford"},
     { quote: "Yes, I can", author: "Sulaiman Adejumo"},
     { quote: "In order to succeed, your desire for success should be greater than your fear of failure.", author: "Bill Cosby"},
     { quote: "Just do it", author: "Nike"},
     { quote: "Life shrinks or expands in proportion to one’s courage.", author: "Anais Nin"},
     { quote: "The mind is everything. What you think you become.", author: "Buddha"},
     { quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", author: "Ann Landers"},
     { quote: "Do what you can, where you are, with what you have.", author: "Teddy Roosevelt"}
];

const colors = [
    {main: "#F0A195", side: "#C87062" },
    {main: "#A075DD", side: "#6133A3" },
    {main: "#1E9082", side: "#53BAAE"},
    {main: "#3C5010", side: "#6C901E"},
    {main: "#5DADE2", side: "#4CA2DB"},
    {main: "#708090", side: "#555555"},
    {main: "#800000", side: "#4B0000"},
    {main: "#ADD8E6", side: "#87CEEB"},
    {main: "#FF00FF", side: "#EE82EE"},
    {main: "#FFA500", side: "#FF7F50"},
    {main: "#A3334F", side: "#D2617D"},
    {main: "#800080", side: "#6A0DAD"},
    {main: "#CD5C5C", side: "#DC143C"},
    {main: "#FA8072", side: "#FF6347"},
    {main: "#FFDAB9", side: "#FFA07A"},
    {main: "#4F0E1E", side: "#841631"},
    {main: "#263F08", side: "#3A610C"},
    {main: "#00FFFF", side: "#00BFFF"},
    {main: "#818906", side: "#5E6405"},
    {main: "#330564", side: "#59387C"},
    {main: "#600867", side: "#600867"},
    {main: "#36499F", side: "#2C3870"},
    {main: "#290F3C", side: "#531283"},
    {main: "#AD0E6C", side: "#651444"},
    {main: "#2C1523", side: "#883969"},
    {main: "#1B1060", side: "#4230AE"},
    {main: "#1D0F75", side: "#2B13C4"},
    {main: "#13ABC4", side: "#084853"},
    {main: "#033038", side: "#22383C"},
    {main: "#DCE820", side: "#8E9613"},
   
];


function quoteGenerator(){
       
    let randomQuote = Math.floor((Math.random() * quotes.length));
    let randomColor = Math.floor((Math.random() * colors.length));
        document.getElementById("text").innerHTML = "<i class='fas fa-quote-left'></i>"+quotes[randomQuote].quote;
        document.getElementById("author").innerHTML = "- "+quotes[randomQuote].author;
        document.documentElement.style.setProperty('--background-color',colors[randomColor].main);
        document.documentElement.style.setProperty('--link-hover',colors[randomColor].side);
    
       

}

