import { emojiList } from './emoji.js';

document.addEventListener('DOMContentLoaded', () => {
    const emoji_container = document.getElementById("emoji_container");
    const search_field = document.getElementById("search_field");
    const search_btn = document.getElementById("searchBtn");

    function displayEmoji(searchedValue = "") {
        emoji_container.innerHTML = ""; 

        let filteredEmojis = emojiList.filter(function(emoji) {
            return emoji.description.includes(searchedValue) || 
                   emoji.aliases.some(alias => alias.includes(searchedValue));
        });

        filteredEmojis.forEach(function(emoji) {
            let new_row = document.createElement("tr");
            let new_emoji = document.createElement("td");
            let new_aliases = document.createElement("td");
            let new_description = document.createElement("td");

            new_emoji.innerText = emoji.emoji;
            new_aliases.innerText = emoji.aliases.join(", ");
            new_description.innerText = emoji.description;

            new_row.appendChild(new_emoji);
            new_row.appendChild(new_aliases);
            new_row.appendChild(new_description);
            emoji_container.appendChild(new_row);
        });
    }

    function searchData() {
        let value = search_field.value.trim();
        displayEmoji(value);
    }

    displayEmoji(); 
    search_btn.addEventListener('click', searchData);
    // search_field.addEventListener('', searchData); // Optional: Enable real-time search
});
