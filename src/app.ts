import '@/components/price'

const priceComponent = document.createElement('price-component')
priceComponent.setAttribute('price', '100')
priceComponent.setAttribute('badge', 'now only')
document.querySelector('.pdp-tablet__column ')?.appendChild(priceComponent)