import axios from 'axios';
const instance = axios.create({
	baseURL: 'http://gotmoversbackend-env.eba-4f2b36ry.ap-south-1.elasticbeanstalk.com',
});

export default instance;