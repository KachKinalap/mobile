import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://project-zero-0.herokuapp.com/api/v1.0/survey')
        return response
    }
}
