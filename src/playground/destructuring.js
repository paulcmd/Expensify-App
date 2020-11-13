//___________Object Destructuring__________________________________

// const person = {
    
//     age: 33,
//     location: {
//         city: 'Tucson',
//         temp: 75
//     }
// }

// const { name : firstName = 'Anonymous', age} = person
// console.log(`${firstName} is ${age}`)

// //if no name, it uses default 'Anonymous'
// //rename var to firstName AND give default

// const { city, temp : temperature } = person.location
// //use : to rename variable
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//       //  name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)



//_____________Array Destructuring_____________________________________________________________________________

// const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147']

// const [street, city, state, zip] = address

//to destructure state only.... const[, , state] = address
//to default to a state....const[, , state = 'New York'] = address

// console.log(`You are in the state of ${state}, ${city} city`)


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
const [beverage, small, medium, large] = item

console.log(`A medium ${beverage} costs ${medium} `)

