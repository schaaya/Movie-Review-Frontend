import axios from 'axios';


export default axios.create({
    baseURL:'https://1df4-2600-1700-d200-1e80-68f5-677b-fcde-92e9.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});