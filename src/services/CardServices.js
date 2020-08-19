import axios from "axios";

const base_url = 'https://final-cintanegra-b43.herokuapp.com/api/v1';

export async function getCards() {
    try {
      const { data } = await axios.get(`${base_url}/cards`);

      return data;
      
    } catch (error) {
      return error;
    }
  }

  export async function uploadCard(card, props) {
    try {
      await axios.post(`${base_url}/cards`, card);
      props.history.push("/home");
    } catch (error) {
      return error;
    }
  }

  