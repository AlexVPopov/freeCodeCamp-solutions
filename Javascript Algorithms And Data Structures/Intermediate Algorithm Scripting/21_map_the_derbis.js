function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  return arr.map((element) => {
    let a = earthRadius + element.avgAlt
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM))

    delete element.avgAlt

    element.orbitalPeriod = orbitalPeriod

    return element
  })
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
