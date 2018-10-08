const protocol = 'https';
const domain = 'api.bitrock.it';
const wp_rest = 'wp-json/wp/v2';
const random = () => (Math.random() * 1);

export const API = `${protocol}://${domain}/${wp_rest}/`;
export const PATHS = {
  tags: 'tags',
  menu: 'menus/nav',
  pages: 'pages',
  posts: (p = 1) => `posts?per_page=12&_embed=1&page=${p}`,
  page: slug => `pages?slug=${slug}&_embed=1`,
  post: slug => `posts?slug=${slug}&_embed=1`
  // posts: (p = 1) => `posts?per_page=12&_embed=${random()}&page=${p}`,
  // page: slug => `pages?slug=${slug}&_embed=${random()}`,
  // post: slug => `posts?slug=${slug}&_embed=${random()}`
}
