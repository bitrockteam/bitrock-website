export const post = () => new Object({
  id: Math.floor(Math.random() * 999),
  title: { rendered: 'sample title' },
  content: { rendered: '<p>some sample content</p><p>some sample content</p><p>some sample content</p>' },
  excerpt: { rendered: '<p>some sample content</p><p>some sample content</p>' },
  cover: 'https://via.placeholder.com/1200x400?text=Loading+data...',
  _embedded: {
    'wp:featuredmedia': [{
      media_details: {
        sizes: {
          full: {
            source_url: 'https://via.placeholder.com/1200x400?text=Loading+data...'
          }
        }
      }
    }]
  }
});