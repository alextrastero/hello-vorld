import {useEffect, useState} from 'react';
import {getGreeting} from './util';
import {getImage} from './image';

/*
 * Implement the logic for fetching and displaying the daily Unsplash image.
 * Handle the logic for displaying and updating the link suggestions.
*/

export const App = () => {
  const [imageData, setImageData] = useState();
  const greeting = getGreeting();
  const name = process.env.REACT_APP_NAME;

  useEffect(() => {
    const loadImage = async () => {
      const data = await getImage();
      setImageData(data);
    };

    loadImage();
  }, []);

  if (!imageData) return null;

  return (
    <div style={{backgroundImage: `url(${imageData.url})`}}>
      <h1>{greeting}, {name}</h1>
    </div>
  );
};
