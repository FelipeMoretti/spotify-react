import axios from "axios";

export async function getArtists(){
    const response = await axios.get("");
    return response.data;
}