// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (wrapper = "*") => (adjective) => `You are ${wrapper}${adjective}${wrapper}!`