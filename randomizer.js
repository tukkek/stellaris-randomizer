const RANDOMIZE=document.querySelector('#randomize')
const GALAXY=document.querySelector('#galaxy')
const SHAPES=['Elliptical','Spiral (2 arms)','Ring']//not 4 arms due to minimum size restriction
const TECH=document.querySelector('#tech')
const SLIDER=['0.5x','1x','2x']
const WORLDS=document.querySelector('#worlds')
const PRIMITIVES=document.querySelector('#primitives')
const START=2200
const MID=document.querySelector('#mid')
const LATE=document.querySelector('#late')
const VICTORY=document.querySelector('#victory')
const HYPERLANES=document.querySelector('#hyperlanes')
const GATEWAYS=document.querySelector('#gateways')
const WORMHOLES=document.querySelector('#wormholes')

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function roll(min,max){
  min=Math.ceil(min)
  max=Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)+min)
}

function pick(array){return array[roll(0,array.length-1)]}

function measure(length){
  length=Number(length)
  TECH.innerHTML=length+'x'
  let step=100*length
  let mid=START+step
  let late=mid+step
  let victory=late+step
  MID.innerHTML=Math.round(mid)
  LATE.innerHTML=Math.round(late)
  VICTORY.innerHTML=Math.max(Math.round(victory),2300)
}

function randomize(){
  GALAXY.innerHTML=pick(SHAPES)
  WORLDS.innerHTML=pick(SLIDER)
  PRIMITIVES.innerHTML=pick(SLIDER)
  HYPERLANES.innerHTML=pick(SLIDER)
  GATEWAYS.innerHTML=pick(SLIDER)
  WORMHOLES.innerHTML=pick(SLIDER)
}

export function setup(){
  for(let r of document.querySelectorAll('#length input')){
    r.onchange=(e)=>measure(e.target.value)
    if(r.checked) measure(r.value)
  }
  RANDOMIZE.onclick=randomize
  randomize()
}
