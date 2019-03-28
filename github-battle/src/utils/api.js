import axios from 'axios';

module.exports  = {
    fetchPopularRepos: function (language) {
        var  encodedURI = window.encodedURI('https://api.github.com/search/repositories?q=stars:%3E1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
        
        return axios.get(encodeURI)
        .then(function (response) {
            return response.data.items;
        });
    }
}

