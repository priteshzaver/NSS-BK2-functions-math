const add = (num1, num2) => {
    const sum = num1 + num2

    return sum
}

const multiply = (num1) => {
    const product = num1 * 2

    return product
}

const sum = add(1, 2)
const product = multiply(sum)

console.log(product)