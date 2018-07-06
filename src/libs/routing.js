
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';
import listenersPlugin from 'router5/plugins/listeners';

export const routes = [
  { name: 'home-page', path: '/' },
  { name: 'post', path: '/post/' },
  { name: 'post.single', path: '/:slug' },
];

export const router = createRouter(routes)
  .usePlugin(browserPlugin({
    useHash: true,
    defaultRoute: '/',
  }), listenersPlugin())
  // .usePlugin(listenersPlugin())
  .start(routes[0].path);


if(process.env.NODE_ENV === 'development'){
  window.router = router;
}