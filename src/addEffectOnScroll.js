export default function addEffectOnScroll(effectClass, targetClass) {
  let targetElement = document.querySelector("." + targetClass)
  let targetPosition = targetElement.getBoundingClientRect().top
  let screenPosition = window.innerHeight

  if (targetPosition < screenPosition / 1.5) {
    targetElement.classList.add(effectClass)
  } else if (targetPosition < screenPosition) (
    targetElement.classList.remove(effectClass)
  )

}