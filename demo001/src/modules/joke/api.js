const URL = "https://api.chucknorris.io/jokes";

// Se obtiene la informacion de la api
export default {
    random: {
        fetch: () =>
            fetch(`${URL}/random`)
                .then(res => res.json())
                .then(joke => joke.value)
    }
};