import wrapPromise from './wrapPromise';
import axios from "axios";

const fetchData = (url) => {
    const promise = axios.get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return wrapPromise(promise)
}

export default fetchData