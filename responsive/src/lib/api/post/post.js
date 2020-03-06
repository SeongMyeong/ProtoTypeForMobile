import axios from 'axios';
//import cilentConfig from '../../configuration/clientConfig';

export const getAPI = () => {
  return axios.get('http://localhost:3065/api/post/getAPI');
};
