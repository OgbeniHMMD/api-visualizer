export const environment = {
  production: true,

  BASE_URL: 'https://jsonplaceholder.typicode.com',
  REQUESTS: [
    {
      verb: 'get',
      url: '/posts',
    },
    {
      verb: 'get',
      url: '/posts/1/comments',
    },
    {
      verb: 'get',
      url: '/comments',
    },
    {
      verb: 'get',
      url: '/comments',
      query: '?postId=1',
    },
  ],
};
