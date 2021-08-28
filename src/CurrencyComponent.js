// import { useState } from 'react';
// import { useEffect } from 'react';
// import CurrencySelect from './CurrencySelect';
// import json from './json/codes.json';
// function CurrencyComponent(props) {
//   const [Currencies, setCurrencies] = useState([]);
//   useEffect(() => {
//     setCurrencies(json.supported_codes);
//   }, []);

//   return (
//     <>
//       <section>
//         <div class='convert-plate'>
//           <div class='you-have'>
//             <div class='wrapper'>
//               <div class='user-input'>
//                 <p class='sans'>You have</p>
//                 <input type='text' placeholder='1000' class='serif' />
//               </div>
//               <CurrencySelect props={Currencies} />
//               <div className='currency-select'>
//                 <p className='sans currency-name'>{SelectedCurrency}</p>
//                 <div className='input serif'>
//                   <select
//                     onChange={(e) => setSelectedCurrency(e.target.value)}
//                     name='currencies'
//                     className='serif select-currencies'
//                   >
//                     <option selected disabled hidden>
//                       Choose
//                     </option>
//                     {Currencies.map((e, index) => (
//                       <option key={index} value={e[1]}>
//                         {e[0]}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <p>1USD = 0.8EUR</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default CurrencyComponent;
