import Home from 'components/Home/home';
// import Posts from 'components/Posts/posts';
// import Post from 'components/Posts/post';
// import CreatePost from 'components/Posts/createPost';
// import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
