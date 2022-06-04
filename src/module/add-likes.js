import { getLike, getLikes } from './display-likes.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/likes';

export const addLike = async (item) => {
  const response = await fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: item,
    }),
  });
  return response;
};

export async function updateLikes(itemName) {
  const data = await getLikes();
  const like = await getLike(itemName, data);
  const likeContainer = document.querySelector(`.${itemName}-likes`);
  likeContainer.innerHTML = `${like + 1} likes`;
}