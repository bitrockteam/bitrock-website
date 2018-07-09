const protocol = 'https';
const domain = 'api.bitrock.it';
const wp_rest = 'wp-json/wp/v2';

export const API = `${protocol}://${domain}/${wp_rest}/`;
export const PATHS = {
  tags: 'tags',
  menu: 'menus/nav',
  posts: 'posts?_embed=' + (Math.random() * 1)
}