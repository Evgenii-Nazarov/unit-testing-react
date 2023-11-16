import axios from "axios";

const sendRequest = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        console.log(response.data);
        return response.data
      })
      .catch(function (error) {
        console.log(error);
        return error
      });

    return result
}

export {
    sendRequest
}