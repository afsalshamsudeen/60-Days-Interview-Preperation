const gpu = {model: {RTX: 4050}}

const final = JSON.stringify(gpu)

const copy = JSON.parse(final)
copy.model.RTX = 5050;

console.log(final, copy)