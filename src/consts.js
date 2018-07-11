const protocol = 'https';
const domain = 'api.bitrock.it';
const wp_rest = 'wp-json/wp/v2';
const random = () => (Math.random() * 1);

export const API = `${protocol}://${domain}/${wp_rest}/`;
export const PATHS = {
  tags: 'tags',
  menu: 'menus/nav',
  pages: 'pages',
  posts: 'posts?_embed=' + random(),
  page: id => `pages/${id}?_embed=${random()}`,
  post: id => `posts/${id}?_embed=${random()}`
}