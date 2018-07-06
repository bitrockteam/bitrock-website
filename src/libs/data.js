
export const formatMenu = data => data
  .map(e => {
    return {
      title: e.title,
      url: e.slug
    }
  });

export const filterTags = data => data
  .sort((a,b) => a.count < b.count)
  .filter((e,i) => i < 3)
  .map(e => {
    return {
      id: e.id,
      name: e.name,
      slug: e.slug
    }
  });

export const pagesToRoutes = data => data
  .map(e => {
    return {
      name: kebabify(e.title),
      path: '/' + e.slug
    }
  });

export const getFeatImage = embeds => embeds['wp:featuredmedia'] ?
  sourceUrl(embeds['wp:featuredmedia']) : '';

const sourceUrl = media => media[0].media_details.sizes.full.source_url;

const kebabify = str => str.replace(/ +/g, '-').toLowerCase();