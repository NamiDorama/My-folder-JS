// 1)
// получить список постов и посчитать, сколько у каждого юзера постов [{ user: 1, posts: 999}, ...]
// https://jsonplaceholder.typicode.com/posts
//
//
//   2)
// получить два массива
// https://jsonplaceholder.typicode.com/posts
//   https://jsonplaceholder.typicode.com/comments
//
//     из этих двух массивов собрать массив postsWithComments, который будет содержать список уникальных постов, у
// которых есть поле comments, содержащее все комментарии, относящиеся к данному посту
//   [
//   { post: 1, comments: [ {...}, {...}, ... ] },
//     { post: 2, comments: [ {...}, {...}, ... ] },
// ...
// ]
//
// В каждом комменте есть поле "postId", которое указывает, к какому посту относится коммент


const postsCounter = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  const users = [];
  const usersObj = {};
  let count = 0;

  posts.forEach( ({userId}) => {

    if (usersObj[userId]) {

      const user = users[userId];

      user.user = userId;
      user.posts += count;

    } else {

      users[userId] = {
        users: userId,
        posts: count++
      };
    }
  });

  const data = [...users];

  console.log(posts);
  console.log(data);

};

postsCounter();