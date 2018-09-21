
import get from 'lodash/get';

const sourceUrl = media => 
  get(media[0], 'media_details.sizes.medium.source_url', '');

const urlType = item => item.object === 'page' ? item.slug : item.url;

export const formatMenu = data => data
  .map(e => ({
    title: e.title,
    url: urlType(e),
    type: e.object,
    id: parseInt(e.object_id)
  }));

export const getFeatImage = embeds => embeds['wp:featuredmedia'] ?
  sourceUrl(embeds['wp:featuredmedia']) : false;

export const getCategory = embeds => 
  get(embeds, '["wp:term"][0][0].name', '');

export const getCategorySlug = embeds =>
  get(embeds, '["wp:term"][0][0].slug', '');