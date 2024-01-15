let result = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
console.log(result);

result.then((data) => {
    console.log(data);
});