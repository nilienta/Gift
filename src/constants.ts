import { v4 as uuidv4 } from 'uuid';

import indicator1 from './assets/img/indicator-1.svg';
import indicator2 from './assets/img/indicator-2.svg';
import indicator3 from './assets/img/indicator-3.svg';

export const LEVELS = [
  { id: 1, image: indicator1, label: 'Level 1' },
  { id: 2, image: indicator2, label: 'Level 2' },
  { id: 3, image: indicator3, label: 'Level 3' },
];

export const MENU = [
  { id: uuidv4() as string, label: 'Menu 1', to: '/' },
  { id: uuidv4() as string, label: 'Menu 2', to: '/' },
  { id: uuidv4() as string, label: 'Menu 3', to: '/' },
  { id: uuidv4() as string, label: 'Menu 4', to: '/' },
];

export const TEXT_CONTENT = {
  home: {
    title: 'Bibendum neque egestas congue',
    paragraph:
      'lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat',
  },
  gift: {
    title: 'PageMaker including versions of Lorem Ipsum.',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`,
  },
};
