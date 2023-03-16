const username: string = 'Oswaldo';
const sum = (a: number, b: number) => {
  return a + b
}

class Persona {
  constructor(public age: number, public lastName: string){}
}


const oswaldo = new Persona(15, "Garcia");

oswaldo.age;
