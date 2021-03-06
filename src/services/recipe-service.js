import axios from 'axios';

const id = 'ddc63e00';
const key = '93c13284eb0f99b2b3488aa03b9428e9';
const url = `https://api.edamam.com/search?app_id=${id}&app_key=${key}`;

// Deuxième clé au cas où la première serait bloquée
// const id = 'e88b78ec';
// const key = 'bbd4c507bcb32d0d60b260777ab13223';
// const url = `https://api.edamam.com/search?app_id=${id}&app_key=${key}`;

class RecipeService {
    getRecipes(recipe = '9b5945e03f05acbf9d69625138385408') {
        let result = axios.get(`${url}&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipe}`);
        return result;
    }

    getRecipesById(id) {
        let sous_url = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`;
        return axios.get(`${url}&r=${sous_url}`);
    }

    getRecipesHome() {
        return axios.get(`https://api.edamam.com/search?q=e&app_id=ddc63e00&app_key=93c13284eb0f99b2b3488aa03b9428e9&from=0&to=10`);
    }
}

export default RecipeService;