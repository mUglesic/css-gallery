import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/mUglesic/css-gallery.git', // Update to point to your repository
  user: {
   name: 'Martin Uglesic', // update to use your name
   email: 'martin.uglesic@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);