import React, { useState } from 'react';
import './App.css';

const wordsList = ['Amelia, an adventurous soul drawn to the mysteries of an ancient forest. As she enters the enchanted woodland, she encounters a world filled with magic and wonders. Guided by the melodies of bird songs and whispers of forgotten tales, Amelia discovers a hidden waterfall, a mystical stone archway, and a luminous glade inhabited by jovial spirits. The forest becomes a transformative journey for Amelia, revealing not only the secrets of the natural world but also her own inner magic.Amelias connection with the enchanted realm deepens as she befriends magical beings and becomes a guardian of the forest. Nights are spent under the starry canopy, sharing stories, while days bring new revelations and enchantments. The forest, with its ancient wisdom, shapes Amelias destiny, turning her into a steward of its magic and mysteries. The story is a celebration of the extraordinary adventures that unfold when one embraces the unknown and explores the realms beyond the familiar.',
  'Bhavya, a determined girl with a passion for painting, faces opposition from her conservative family. Undeterred, she secretly enters an art competition in the nearby city, creating a masterpiece that captures the beauty of rural life. Despite feeling like an outsider among city artists, Bhavyas painting wins first place, earning her the recognition she craved.The news of Bhavyas success spreads throughout the town, transforming her familys disapproval into pride. Her journey becomes an inspiration for the townsfolk, encouraging them to pursue their dreams despite societal expectations. Bhavyas story serves as a powerful reminder that, with determination and courage, small-town aspirations can illuminate the broader canvas of life, leaving an indelible mark on the world.',
  'cozy village of Cloverdale, Clara, a curious cat, stumbled upon an ancient chest while exploring the enchanted forest. The chest bore a mysterious lock adorned with the letter C. Intrigued, Clara enlisted the help of her friends—Chester, the clever squirrel, and Cleo, the chirpy bluebird—to unlock the secrets hidden within.Together, they embarked on a captivating journey, encountering charming creatures like the Crystal Butterfly and the Caramel Caterpillar. Each encounter provided a clue leading them closer to solving the puzzle. As they ventured deeper into the forest, the trio discovered a hidden cave covered in colorful vines. Inside, they found a Crystal Key, perfectly shaped like the letter C.Excitement filled the air as Clara used the Crystal Key to unlock the ancient chest. To their astonishment, it revealed a map leading to the fabled Candy Cove, rumored to be filled with sugary delights. With hearts pounding with anticipation, Clara, Chester, and Cleo set off on a new adventure, eager to explore the wonders that awaited them in Candy Cove. Little did they know that their journey would not only satisfy their sweet cravings but also strengthen their bond as true friends in the charming village of Cloverdale.',
  'date', 'grape', 'kiwi', 'orange'];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);

  const handleSearch = () => {
    const filtered = wordsList.filter(word => word.toLowerCase().startsWith(searchTerm.toLowerCase()));
    setFilteredWords(filtered);
  };

  const handleUpperClick = (index) => {
    const updatedWords = [...filteredWords];
    updatedWords[index] = updatedWords[index].toUpperCase();
    setFilteredWords(updatedWords);
  };

  const handleLowerClick = (index) => {
    const updatedWords = [...filteredWords];
    updatedWords[index] = updatedWords[index].toLowerCase();
    setFilteredWords(updatedWords);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const handleFirstUpperClick = (index) => {
    const updatedWords = [...filteredWords];
    updatedWords[index] = capitalizeFirstLetter(updatedWords[index]);
    setFilteredWords(updatedWords);
  };


  return (
    <div className="App">
      <h1>Word Search App</h1>
      <input
        type="text"
        placeholder="Enter a letter"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} disabled={!searchTerm} className='li-btn'>Search</button>

      <ul>
        <div className='liDiv'>
          {filteredWords.map((word, index) => (
            <li key={index} className='list-style'>{word}
              <div className='button-container'>
                <button onClick={() => handleUpperClick(index)}> Upper</button>
                <button onClick={() => handleLowerClick(index)}> Lower</button>
                <button onClick={() => handleFirstUpperClick(index)}>F Upper</button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default App;
