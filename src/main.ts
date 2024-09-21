// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// enum PizzaSize{
//   small,
//   medium,
//   large
// }
// interface IPizza {
// size : PizzaSize,
// topping : string[],
// logSize :() => void,
// getSize :() => string,
// addTopping: (topping : string) => void
// }

// const pizza: IPizza = {
//   size: PizzaSize.large ,
//   toppings: ['souse', 'mushrooms','cheese '],
//   logSize() {
//       console.log(this.size);
//   },
//   getSize() {
//       return this.size
//   },
//   addtopping(topping) {
//       this.toppings.push(topping)
//   }
// }  
enum Filters{
all = 'all',
active = 'active',
completed = 'completed'
}

 interface StatusFilters {
  all:Filters,
  active:Filters,
  completed:Filters
 }
 const statusFilters :StatusFilters = {
  all: Filters.all,
  active: Filters.active,
  completed: Filters.completed,
 };
