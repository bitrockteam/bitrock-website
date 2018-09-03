
const sourceUrl = media => media[0].media_details.sizes.full.source_url;
const kebabify = str => str.replace(/ +/g, '-').toLowerCase();
const urlType = item => item.object === 'page' ? item.slug : item.url;

export const formatMenu = data => data
  .map(e => {
    return {
      title: e.title,
      url: urlType(e),
      type: e.object,
      id: parseInt(e.object_id)
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
      path: '/' + e.slug,
      custom: { id: parseInt(e.object_id) }
    }
  });

export const getFeatImage = embeds => embeds['wp:featuredmedia'] ?
  sourceUrl(embeds['wp:featuredmedia']) : false;

export const getCategory = embeds => embeds['wp:term'] ?
  embeds['wp:term'][0][0].name : '';

export const getCategorySlug = embeds => embeds['wp:term'] ?
  embeds['wp:term'][0][0].slug : '';