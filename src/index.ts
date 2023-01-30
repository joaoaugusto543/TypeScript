let x:number=10
x=12

//erro
//x='lopes'

console.log(x)

//...................................................

let firstName:string ='Lucas'

//error
//firstName=12

console.log(firstName)

//...................................................

let myArrayStrings:string[]=['a','b']

//error
//myArrayStrings=[1,2,3]

myArrayStrings.forEach((element)=>{
    console.log(element)
})

//...................................................

let myArray:[string,number,boolean]

myArray=['a',2,true]

//error
//myArray= [1,'2','nne']

myArray.forEach((element)=>{
    console.log(element)
})

//...................................................

let obj:{name:string,age:number}

obj={
    name:'João',
    age:16
}

console.log(`Meu nome é ${obj.name}, eu tenho ${obj.age}`)

//error

// obj={
//     firstName:'lopes',
//     age:12
// }

// obj={
//     name:12,
//     age:'23'
// }

//...................................................

//any

let random:any

random=true
random='teste'
random=12

console.log(random)

//...................................................

//tuplas

let id: string | number

id=10

id="10"

//error

// id=true
// id=[]

console.log(id)

//...................................................

//type alias

type myTypeId=string | number | string[]

let idUser:myTypeId="1234"

idUser=['dfff','bdhbhf']

idUser=12133

console.log(idUser)

//...................................................

//enum

enum Size{
    P='Pequeno',
    M='Médio',
    G='Grande'
}

const camisa:{name:string,size:string}={
    name:'Camiseta',
    size:Size.G
}

console.log(`Eu quero uma ${camisa.name} ${camisa.size}`)

//...................................................

//literal types

let test:'Alguma coisa'

//error

//test='lopes'

let thisOrNothing: 'É isso' | null

thisOrNothing='É isso'

thisOrNothing=null

//error

//test=true

//...................................................

//funções

function sum(a :number,b :number){
    return a+b
}

console.log(sum(12,3))

//error
//console.log(sum('loes',2))

function sayHelloTo(name: string): string{
    return `Hello ${name}`
}

//erro

// function sayHelloTo(name: string): string{
//     return 3
// }

//console.log(sayHelloTo(2))

console.log(sayHelloTo('João'))

function sendMessage(msg :string): void{
    console.log(msg)
}

console.log('Bom dia!!!')

function Hello(name :string , greet? : string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`)
        return
    }
    console.log(`Olá ${name}`)
}

Hello('João','sr')

Hello('Marcos')


//...................................................

//interfaces

interface mathunctionsParams{
    num1: number,
    num2: number
}

function subtract(nums:mathunctionsParams){
    return nums.num1 - nums.num2
}

console.log(subtract({num1:10,num2:5}))

const numbers:mathunctionsParams={
    num1:2,
    num2:5
}

function multiply(nums:mathunctionsParams){
    return nums.num1 * nums.num2
}

console.log(multiply(numbers))

//...................................................

//narroWing
//checagem tipos

function showNumberof(info : number | boolean ) : string {
    if(typeof info=== 'number'){
        return `o número é ${info}`
    }
    return `não foi enviado um número, foi enviado o valor ${info}`
}

console.log(showNumberof(1))
console.log(showNumberof(true))

//generics

function showArrayItens<T>(arr : T[]){
    arr.forEach(element=>{
        console.log(element)
    })

    console.log('...................')
}

const arr1=['a','b','c']

const arr2=[1,2,3,4]

const arr3=[true,false]

showArrayItens(arr1)
showArrayItens(arr2)
showArrayItens(arr3)

//classes

class user{
    name
    age
    approved

    constructor(name :string, age :number, approved :boolean){
        this.name=name
        this.age=age
        this.approved=approved

    }
    
    showName() : String {
        return `O nome do usuário é ${this.name}`
    }

    permissionToShow(permission : boolean) : string{
        if(permission){
            return `O nome do usuário é ${this.name}, ele tem ${this.age}, sua provação é ${this.approved}`
        }
        
        return `Não tem permissão`
    }
}

const felipe=new user("Felipe",17,true)

console.log(felipe)

console.log(felipe.showName())

console.log(felipe.permissionToShow(false))

console.log(felipe.permissionToShow(true))

//interfaces em classes

interface Vehicles{
    brand : string,
    kilometersTraveled : number,
    showBrand() : void
}

class car implements Vehicles{ 
    brand: string
    kilometersTraveled: number

    constructor(brand: string , kilometersTraveled : number){
        this.brand=brand
        this.kilometersTraveled=kilometersTraveled
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }

}

const fusca=new car('VW',100)

fusca.showBrand()

class superCar extends car{
    engine

    constructor(brand: string , kilometersTraveled : number, engine: number){
        super(brand,kilometersTraveled)
        this.engine=engine
    }
}

const ferrari=new superCar('Renault',1000,1.0)

ferrari.showBrand()

//decorators

function BaseParameters(){
    return function<T extends {new (...args : any[]) : {}} >(constructor : T){
        return class extends constructor{
            id=Math.random()
            date=new Date()
        }
    }
}

@BaseParameters()

class Person{
    name

    constructor(name :string){
        this.name=name
    }
}

const marcos=new Person('Marcos')

console.log(marcos)

 
