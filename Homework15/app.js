let nums = [1,2,3,4,5,6,7,8,2,9,6,5,5,6,3,7,9,2] 
let cars = ["Honda", "Toyota", "Seat", "Opel", "BMW", "Audi", "Hyundai"]

// Суммирование всех значений: reduce
let nums1 = [1,2,3,4,5,6,7,8,2,9,2,3,1,2,3,2,5,6,7,4,2,3,3,3,4,5,6,5,5,6,3,7,9,2] 
let sum = nums1.reduce((x,y) => x + y)
console.log(sum)

// Удалить ложное значение из массива:
let arr = [false, "red", 0, 2, "", null, true, NaN, undefined]
let newArr = arr.filter(Boolean)
console.log(newArr)

// Конвертировать массив в объект:
let cars1 = ["Honda", "Toyota", "Seat", "Opel", "BMW", "Audi", "Hyundai"]
let obj = {...cars1}
console.log(obj)

// Удаление повторяющихся элементов:
let nums2 = [1,2,3,4,5,6,7,8,2,9,2,3,1,2,3,2,5,6,7,4,2,3,3,3,4,5,6,5,5,6,3,7,9,2] 
let uniNums = [...new Set(nums2)]
console.log(uniNums)

let uniNums2 = Array.from(new Set(nums2))
console.log(uniNums2)

// Заменить определенное значение в массиве:
let cars2 = ["Honda", "Toyota", "Seat", "Opel", "BMW", "Audi", "Hyundai"]
cars2.splice(0,2,"Nissan", "Tesla")
console.log(cars2)
console.log(cars)

// Перебор массива:
let newCars = [
    {car: "Honda", color: "Red"},
    {car: "Toyota", color: "Green"},
    {car: "BMW", color: "Blue"},
    {car: "Seat", color: "Black"}
]
console.log(newCars)
let carName = Array.from(newCars, ({car}) => car)
console.log(carName)

// Очищение массива:
let nums4 = [1,2,3,4,5,6,7,8,2,9,6,5,5,6,3,7,9,2] 
nums4.splice(0, nums4.length)
console.log(nums4)

// Найти пересечения массивов:
let nums6 = [1,2,3,4,5,6,7,8,2,9,6,5,5,6,3,7,9,2] 
let nums5 = [1,32,4,5,6,1,3,4,6,7,9,6,43,3,56,7,8,3,4,3,0]
let newNums1 = [...new Set(nums6)].filter(item => nums5.includes(item))
console.log(newNums1)

// Сделать реверс массива:
let nums7 = [1,2,3,4,5,6,7,8,2,9,6,5,5,6,3,7,9,2] 
let newNams7 = nums7.reverse()
console.log(newNams7)

// Найти последний элемент
let nums8 = [1,2,3,4,5,6,7,8,2,1,1,9,6,5,5,1,3,1,1,1,6,3,7,9,2] 
let lastIndex = nums8.lastIndexOf(1)
console.log(lastIndex)


// Создать массив:
let nemArray1 = new Array(10).fill(1)
console.log(nemArray1)

// Вывести случайное число из массива:
let nums9 = [1,2,3,4,5,6,7,8,2,1,1,9,6,5,5,1,3,1,1,1,6,3,7,9,2] 

let randomNams = nums9[(Math.floor(Math.random() * (nums9.length)))]
console.log(randomNams)
