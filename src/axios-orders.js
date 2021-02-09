import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-builder-app-e2429-default-rtdb.firebaseio.com/"
})

export default instance;