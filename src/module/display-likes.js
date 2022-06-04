const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/likes';

const getLikes = async () => {
  const response = await fetch(`${apiUrl}`);
  const data = await response.json();
  return Promise.all(data);
};

const getLike = (id, likes) => {
  if (likes.length > 0) {
    const result = likes.find((like) => like.item_id === id);
    return result ? result.likes : 0;
  }
  return 0;
};

export { getLikes, getLike };
