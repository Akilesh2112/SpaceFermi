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

// initialize key-value pairs
  export var values = {
    outQuotient: 0, 
    coefficient: 0, 
    firstnumb: 0,
    decimals: 0,
    exponent: 0
    }

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

export function calculator(planets, household_object) {
    var quotient = expo(planets/household_object,4);
    values = {
      outQuotient: quotient, 
      coefficient: parseInt(quotient.substring(0,6)), 
      firstnumb: parseInt(quotient.substring(0,1)),
      decimals: parseInt(quotient.substring(2,6)),
      exponent: parseInt(quotient.substring(7,quotient.length))
    }
    console.log(values);
    return values;
  }

