
export const pagesToMenu = data => data
  .sort((a,b) => a.menu_order - b.menu_order)
  .map(e => {
    return {
      title: e.title.rendered,
      url: e.slug
    }
  });