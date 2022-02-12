// Household Objects (in kg)
  export var householdObject= {
    pencil: 0.0085, 
    planet: 40823.0, 
    dog: 18.0, 
    toaster: 2.0
  }

// Celestial Bodies (in kg)
  export var planets= { 
    sun: 1.9891E30, 
    mercury: 3.285E23, 
    venus: 4.867E24, 
    earth: 6.0456E24, 
    moon: 7.34767309E22, 
    mars: 6.39E23, 
    jupiter: 1.89813E27, 
    saturn: 5.683E26, 
    uranus: 8.681E25, 
    neptune: 1.024E26
  }

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

export function calculator(planets, household_object) {
    var quotient = expo(planets/household_object,2);
    var values = {
      outQuotient: quotient, 
      coefficient: quotient.substring(0,4), 
      exponent: quotient.substring(6,quotient.length)
    }
    console.log(values);
    return values;
  }
