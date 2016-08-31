import React from 'react';
import Read from './Read';

export default {

  path: '/read/:book/:chapter',

  action(context) {
    return <Read book={context.params.book} chapter={context.params.chapter} />;
  },

};