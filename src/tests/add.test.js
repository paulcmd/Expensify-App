const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should return sum of two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('should return greeting', () => {
    const result = generateGreeting(`Mike`)
    expect(result).toBe(`Hello Mike!`)
})

// test('should return greeting', () => {
//     const result = generateGreeting()
//     expect(result).toBe(`Hello Anonymous!`)
// })


//yarn test -- --watch    (so that watch arg is used with jest and not yarn)