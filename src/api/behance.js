import { Http } from 'vue-resource';

const API_URL = 'http://api.behance.net/v2/users/mr_lucky/projects?client_id=cThQ8I71tjkVrL56Z9MKxTuh0P3yjehV';

export default {
  getProjects(cb) {
    Http.get(API_URL)
      .then((response) => {
        const { projects } = response.body;

        cb && cb(projects); // eslint-disable-line no-unused-expressions
      }, (response) => {
        // error callback
        console.error('Failed with: ', response); // eslint-disable-line no-console
      });
  },
};
