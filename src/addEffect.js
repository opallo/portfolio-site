export default function addEffect(event, effect, target){
  window.addEventListener(event,() =>{
    document.querySelector('.' + target).classList.add(effect) 
  })
}