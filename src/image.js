import 'whatwg-fetch';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});

export const getImage = async() => {
  // unsplash.photos.getRandom({
  //   collectionIds: ['abc123'],
  //   topicIds: ['def456'],
  //   featured: true,
  //   username: 'naoufal',
  //   query: 'dog',
  //   count: 1,
  // });
  const result = await unsplash.photos.getRandom();
  if (result.errors) {
    // handle error here
    console.log('error occurred: ', result.errors[0]);
  } else {
    const feed = result.response;

    // extract total and results array from response
    const { urls, alt_description } = feed;

    return { url: urls.full, alt: alt_description };
  }
};
