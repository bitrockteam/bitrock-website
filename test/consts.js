import test from 'ava';
import { API, PATHS } from './../src/consts';

test('API base url', t => {
  t.is(API, 'https://api.bitrock.it/wp-json/wp/v2/');
});

test('PATHS properties & methods', t => {
  const slug = 'example';
  const posts = 'posts?per_page=12';
  const post = `posts?slug=${slug}&_embed=`;
  const page = `pages?slug=${slug}&_embed=`;

  t.is(PATHS.tags, 'tags');
  t.is(PATHS.menu, 'menus/nav');
  t.is(PATHS.pages, 'pages');
  t.true(PATHS.posts().indexOf(posts) > -1);
  t.true(PATHS.post(slug).indexOf(post) > -1);
  t.true(PATHS.page(slug).indexOf(page) > -1);
});