
import { formatMenu } from './data';
import { $ } from './dom';

export const renderMenu = response =>
  Promise.resolve(response)
    .then(data => formatMenu(data))
    .then(json => JSON.stringify(json))
    .then(str => $('bitrock-header').setAttribute('menu', str));