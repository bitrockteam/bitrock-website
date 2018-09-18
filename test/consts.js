import test from 'ava';
import { API, PATHS } from './../src/consts';

test('API base url', t => {
  t.is(API, 'https://api.bitrock.it/wp-json/wp/v2/');
});

test('PATHS properties & methods', t => {
  const id = 42;
  const posts = 'posts?per_page=12&_embed=';
  const post = `posts/${id}?_embed=`;
  const page = `pages/${id}?_embed=`;

  t.is(PATHS.tags, 'tags');
  t.is(PATHS.menu, 'menus/nav');
  t.is(PATHS.pages, 'pages');
  t.true(PATHS.posts().indexOf(posts) > -1);
  t.true(PATHS.post(id).indexOf(post) > -1);
  t.true(PATHS.page(id).indexOf(page) > -1);
});