//https://jsonplaceholder.typicode.com -> 더미데이터
/*fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))*/


//axios
      axios.get('https://jsonplaceholder.typicode.com/users', {params: {id: 1}})
      .then(function (response) {
        // handle success
        console.log(response, 'seccess');
      })
      .catch(function (error) {
        // handle error
        console.log(error, 'error');
      })
      .finally(function () {
        // always executed
      });