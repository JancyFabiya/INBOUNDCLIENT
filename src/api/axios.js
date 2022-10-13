import axios from "axios"

const API =axios.create({baseURL: "https://inbound-backend-api.herokuapp.com/"})
export default API