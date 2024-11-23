const emojiMap = {
    hello: "👋",
    world: "🌍",
    love: "❤️",
    smile: "😊"
}
function convertIntoEmoji(){
    const input = document.getElementById("txt_emoji").value;
    const words = input.split(" ");
    const convertedText = words.map(word => emojiMap[word.toLowerCase()] || word).join(" ")
    document.getElementById("output").innerText = convertedText;

    
}