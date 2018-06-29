
export const pagesToMenu = data => data
  .sort((a,b) => a.menu_order - b.menu_order)
  .map(e => {
    return {
      title: e.title.rendered,
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
      name: kebabify(e.title.rendered),
      path: '/' + e.slug
    }
  });

const kebabify = str => str.replace(/ +/g, '-').toLowerCase();