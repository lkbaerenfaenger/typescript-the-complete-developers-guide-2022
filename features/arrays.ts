const carMakers = ['Ford', 'Toyota', 'Chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(100)

// Help with 'map'
carMakers.map((carMaker: string): string => {
  return carMaker
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10')
