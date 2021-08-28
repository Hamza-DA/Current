import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import CurrencyComponent from './CurrencyComponent';
import json from './json/codes.json';

export default function Home() {
  const [SelectedCurrency, setSelectedCurrency] = useState([]);
  const [SelectedToCurrency, setSelectedToCurrency] = useState([]);
  const [Currencies, setCurrencies] = useState([]);
  const [Rates, setRates] = useState([]);

  const displayTarget = useRef(null);
  const displayInput = useRef(null);

  useEffect(() => {
    setCurrencies(json.supported_codes);
  }, []);
  const testRate = {
    result: 'success',
    documentation: 'https://www.exchangerate-api.com/docs',
    terms_of_use: 'https://www.exchangerate-api.com/terms',
    time_last_update_unix: 1630108801,
    time_last_update_utc: 'Sat, 28 Aug 2021 00:00:01 +0000',
    time_next_update_unix: 1630195201,
    time_next_update_utc: 'Sun, 29 Aug 2021 00:00:01 +0000',
    base_code: 'ALL',
    conversion_rates: {
      ALL: 1,
      AED: 0.03545,
      AFN: 0.7857,
      AMD: 4.7348,
      ANG: 0.01728,
      AOA: 6.1521,
      ARS: 0.9408,
      AUD: 0.0133,
      AWG: 0.01728,
      AZN: 0.01641,
      BAM: 0.01606,
      BBD: 0.01931,
      BDT: 0.8234,
      BGN: 0.01606,
      BHD: 0.00363,
      BIF: 19.1274,
      BMD: 0.009654,
      BND: 0.01307,
      BOB: 0.06665,
      BRL: 0.0505,
      BSD: 0.009654,
      BTN: 0.7161,
      BWP: 0.1087,
      BYN: 0.02426,
      BZD: 0.01931,
      CAD: 0.01218,
      CDF: 19.1567,
      CHF: 0.008858,
      CLP: 7.5765,
      CNY: 0.06261,
      COP: 37.3322,
      CRC: 5.9951,
      CUC: 0.009654,
      CUP: 0.2486,
      CVE: 0.9052,
      CZK: 0.2097,
      DJF: 1.7157,
      DKK: 0.06125,
      DOP: 0.5497,
      DZD: 1.3082,
      EGP: 0.152,
      ERN: 0.1448,
      ETB: 0.4394,
      EUR: 0.008209,
      FJD: 0.02031,
      FKP: 0.007037,
      FOK: 0.06125,
      GBP: 0.007037,
      GEL: 0.03004,
      GGP: 0.007037,
      GHS: 0.05825,
      GIP: 0.007037,
      GMD: 0.5017,
      GNF: 94.529,
      GTQ: 0.07469,
      GYD: 2.0167,
      HKD: 0.07523,
      HNL: 0.2295,
      HRK: 0.06185,
      HTG: 0.9598,
      HUF: 2.8665,
      IDR: 139.5349,
      ILS: 0.03114,
      IMP: 0.007037,
      INR: 0.7161,
      IQD: 14.0712,
      IRR: 403.5269,
      ISK: 1.2233,
      JMD: 1.4802,
      JOD: 0.006845,
      JPY: 1.064,
      KES: 1.0599,
      KGS: 0.8158,
      KHR: 39.3375,
      KID: 0.0133,
      KMF: 4.0388,
      KRW: 11.2745,
      KWD: 0.002893,
      KYD: 0.008045,
      KZT: 4.1204,
      LAK: 92.3707,
      LBP: 14.5533,
      LKR: 1.9343,
      LRD: 1.6583,
      LSL: 0.144,
      LYD: 0.04366,
      MAD: 0.08669,
      MDL: 0.1707,
      MGA: 37.7925,
      MKD: 0.5062,
      MMK: 15.8871,
      MNT: 27.5132,
      MOP: 0.07749,
      MRU: 0.3484,
      MUR: 0.4125,
      MVR: 0.1481,
      MWK: 7.8396,
      MXN: 0.1962,
      MYR: 0.04052,
      MZN: 0.6172,
      NAD: 0.144,
      NGN: 3.9749,
      NIO: 0.3388,
      NOK: 0.08504,
      NPR: 1.1457,
      NZD: 0.01386,
      OMR: 0.003712,
      PAB: 0.009654,
      PEN: 0.03947,
      PGK: 0.03401,
      PHP: 0.4828,
      PKR: 1.6053,
      PLN: 0.03757,
      PYG: 66.9326,
      QAR: 0.03514,
      RON: 0.04049,
      RSD: 0.965,
      RUB: 0.715,
      RWF: 9.7248,
      SAR: 0.0362,
      SBD: 0.07785,
      SCR: 0.1371,
      SDG: 4.2645,
      SEK: 0.08407,
      SGD: 0.01307,
      SHP: 0.007037,
      SLL: 99.5438,
      SOS: 5.5787,
      SRD: 0.2067,
      SSP: 1.7152,
      STN: 0.2011,
      SYP: 15.1223,
      SZL: 0.144,
      THB: 0.3163,
      TJS: 0.1101,
      TMT: 0.03372,
      TND: 0.02685,
      TOP: 0.02181,
      TRY: 0.08084,
      TTD: 0.06554,
      TVD: 0.0133,
      TWD: 0.2699,
      TZS: 22.3647,
      UAH: 0.2587,
      UGX: 34.1164,
      USD: 0.009654,
      UYU: 0.4146,
      UZS: 102.5355,
      VES: 39503.1579,
      VND: 220.8404,
      VUV: 1.0832,
      WST: 0.02481,
      XAF: 5.385,
      XCD: 0.02607,
      XDR: 0.006809,
      XOF: 5.385,
      XPF: 0.9796,
      YER: 2.4205,
      ZAR: 0.144,
      ZMW: 0.1615,
    },
  };
  const getRates = (props) => {
    fetch(
      `https://v6.exchangerate-api.com/v6/8ee5adb55009a81059016baf/latest/${props[0]}`
    )
      .then((res) => res.json())
      .then((data) => setRates(data));
  };
  const convertTo = () => {
    // console.log(1 * testRate.conversion_rates.AED);
    // console.log(SelectedCurrency[0] + ' to ' + SelectedToCurrency[0]);
    // console.log((SelectedToCurrency[0] = testRate.conversion_rates));
    displayTarget.current.value =
      displayInput.current.value *
      Object.entries(Rates.conversion_rates).find(
        (e) => e[0] == SelectedToCurrency[0]
      )[1];
  };
  return (
    <>
      <nav>
        <svg
          width='119'
          height='27'
          viewBox='0 0 119 27'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M29.4121 7.28956H37.9902V20.6294H40.1785L39.5784 24.7149L38.2572 25.4261H36.3359H32.4932V23.8856C31.8747 24.4458 31.1511 24.8776 30.3224 25.181C29.4938 25.4845 28.5368 25.6362 27.4514 25.6362C26.4477 25.6362 25.5024 25.4786 24.6154 25.1635C23.7284 24.8484 22.9523 24.3757 22.287 23.7455C21.6335 23.1036 21.1141 22.3041 20.729 21.3471C20.3555 20.3901 20.1688 19.2639 20.1688 17.9684V12.0863H19.6638H17.8054V7.28956H25.8233V17.9684C25.8233 19.1822 26.1326 20.0925 26.7512 20.6994C27.3697 21.2946 28.175 21.5922 29.167 21.5922C29.8673 21.5922 30.5033 21.3763 31.0752 20.9445C31.6471 20.5127 32.0614 19.9291 32.3182 19.1939V12.0863H29.4121V7.28956Z'
            fill='#1C1D1F'
          />
          <path
            d='M73.1045 17.4957L73.157 18.0384C73.2854 18.5636 73.5013 19.0246 73.8048 19.4214C74.1199 19.8182 74.4875 20.1509 74.9077 20.4193C75.3278 20.6877 75.7947 20.892 76.3082 21.032C76.8217 21.1604 77.3411 21.2246 77.8662 21.2246C78.3914 21.2246 78.8874 21.1954 79.3543 21.1371C79.8328 21.067 80.2938 20.9795 80.7373 20.8745C81.1808 20.7578 81.6126 20.6294 82.0327 20.4893C82.4529 20.3376 82.8789 20.18 83.3107 20.0167L85.2364 23.6055C84.5712 24.0139 83.9584 24.3641 83.3982 24.6558C82.8497 24.9359 82.2953 25.1693 81.7351 25.3561C81.1749 25.5428 80.5797 25.677 79.9495 25.7587C79.3193 25.8521 78.584 25.8988 77.7437 25.8988C76.1681 25.8988 74.7676 25.642 73.5422 25.1285C72.3167 24.6033 71.2839 23.8972 70.4436 23.0102C69.6149 22.1232 68.9789 21.0845 68.5354 19.8941C68.1036 18.7037 67.8876 17.4432 67.8876 16.1127C67.8876 14.7823 68.1152 13.5335 68.5704 12.3664C69.0372 11.1993 69.6908 10.1839 70.5311 9.32029C71.3714 8.44498 72.3751 7.75639 73.5422 7.25455C74.7093 6.7527 76.0047 6.50177 77.4286 6.50177C78.8524 6.50177 80.1129 6.74103 81.2099 7.21953C82.3187 7.68637 83.2524 8.33994 84.011 9.18024C84.7696 10.0089 85.3531 10.9892 85.7616 12.1213C86.1701 13.2417 86.3918 14.4496 86.4268 15.7451C86.4618 16.0369 86.4794 16.3287 86.4794 16.6204C86.491 16.9005 86.4852 17.1923 86.4618 17.4957H73.1045ZM77.2885 10.8784C76.635 10.8784 76.0748 10.9601 75.6079 11.1234C75.1528 11.2752 74.7676 11.4911 74.4525 11.7712C74.1374 12.0396 73.8865 12.3489 73.6997 12.699C73.513 13.0491 73.3671 13.4168 73.2621 13.8019H80.8423C80.7606 13.4051 80.6439 13.0316 80.4922 12.6815C80.3405 12.3314 80.1304 12.0221 79.862 11.7537C79.5935 11.4852 79.2492 11.2752 78.8291 11.1234C78.4206 10.9601 77.9071 10.8784 77.2885 10.8784Z'
            fill='#1C1D1F'
          />
          <path
            d='M100.488 14.9923C100.488 13.977 100.219 13.1834 99.6826 12.6115C99.1458 12.0279 98.4338 11.7362 97.5469 11.7362C96.94 11.7362 96.3272 11.8704 95.7087 12.1388C95.0901 12.4072 94.4891 12.9091 93.9055 13.6444V20.6294H96.8466V25.4261H85.5725V20.6294H88.2335V12.0863H85.6075V7.28956H93.8705V8.88263C94.6291 8.28742 95.4753 7.82058 96.4089 7.48213C97.3543 7.132 98.3463 6.95694 99.385 6.95694C101.567 6.95694 103.248 7.56966 104.427 8.7951C105.606 10.0089 106.195 11.7887 106.195 14.1345V20.6294H108.768V25.4261H100.488V14.9923Z'
            fill='#1C1D1F'
          />
          <path
            d='M114.391 7.28956H118.015V11.8762H114.356L114.321 19.544C114.321 19.9875 114.356 20.3493 114.426 20.6294C114.496 20.8978 114.596 21.1137 114.724 21.2771C114.864 21.4405 115.028 21.5514 115.214 21.6097C115.401 21.6681 115.617 21.6973 115.862 21.6973C116.305 21.6973 116.696 21.6564 117.035 21.5747C117.373 21.4813 117.712 21.3763 118.05 21.2596L118.803 24.6383C118.208 25.0118 117.543 25.3094 116.807 25.5311C116.084 25.7529 115.22 25.8638 114.216 25.8638C113.504 25.8638 112.822 25.7412 112.168 25.4961C111.526 25.251 110.96 24.8834 110.47 24.3932C109.98 23.8914 109.589 23.267 109.297 22.5201C109.005 21.7731 108.865 20.9036 108.877 19.9116L108.929 11.8762H106.321V7.28956H108.947L108.982 2.94799L114.426 0.357056L114.391 7.28956Z'
            fill='#1C1D1F'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M19.6638 12.0863V7.26491H15.9722C15.0941 6.69602 14.1666 6.26936 13.1896 5.98491C12.2126 5.70047 11.2047 5.58298 10.1658 5.63245C8.70649 5.58298 7.35228 5.81177 6.1032 6.31883C4.86648 6.82588 3.79672 7.53699 2.89392 8.45216C1.99111 9.35497 1.28 10.4185 0.760581 11.6429C0.253527 12.8549 0 14.172 0 15.5942C0 17.0288 0.247343 18.3706 0.74203 19.6197C1.24908 20.8688 1.94783 21.9571 2.83827 22.8847C3.7287 23.8122 4.79228 24.548 6.029 25.0922C7.26571 25.624 8.61992 25.8899 10.0916 25.8899C11.5386 25.8899 12.8248 25.6734 13.9502 25.2406C15.088 24.8077 16.065 24.2636 16.8812 23.6081C17.7098 22.9403 18.3776 22.2045 18.8847 21.4006C19.4041 20.5967 19.7689 19.8238 19.9792 19.0817L14.8777 17.6719C14.7293 18.0058 14.5191 18.3645 14.247 18.7478C13.9873 19.1188 13.6719 19.4589 13.3009 19.7681C12.9299 20.0649 12.5032 20.3123 12.0209 20.5102C11.5509 20.6957 11.0253 20.8132 10.4441 20.8626C9.75152 20.8132 9.10842 20.6647 8.5148 20.4174C7.93354 20.1701 7.42649 19.83 6.99364 19.3971C6.57315 18.9519 6.23924 18.4263 5.9919 17.8203C5.74455 17.2143 5.62088 16.5712 5.62088 15.891C5.62088 15.1243 5.73837 14.4379 5.97334 13.8319C6.20832 13.2135 6.53605 12.6817 6.95653 12.2365C7.38939 11.7913 7.89644 11.445 8.4777 11.1977C9.07132 10.9503 9.72678 10.8514 10.4441 10.9009C11.3345 10.8514 12.1075 10.9998 12.7629 11.3461C13.1392 11.5378 13.4952 11.7845 13.8307 12.0863H17.8054H19.6638Z'
            fill='#1C1D1F'
          />
          <path
            d='M76.0878 5.63623H55.0811V26.643L76.0878 5.63623Z'
            fill='#71E349'
          />
          <path
            d='M58.9189 5.63623H37.9122V26.643L58.9189 5.63623Z'
            fill='#71E349'
          />
        </svg>

        <ul className='serif'>
          <li>August, 5th 2021</li>
        </ul>
      </nav>
      <section>
        <div className='hero-welcome'>
          <h1 className='serif'>
            Your best solution for <br /> currency convertion !
          </h1>
          <p className='sans'>
            What ever the currency you want to change, <br /> you can find it
            here.
          </p>
          <button className='cta serif'>Try it now !</button>
        </div>
        <div className='hero-image'>
          <img src='./Images/rr.png' alt='Logo' />
        </div>
      </section>
      <section>
        <div class='convert-plate'>
          <div class='you-have'>
            <div class='wrapper'>
              <div class='user-input'>
                <p class='sans'>You have</p>
                <input
                  ref={displayInput}
                  type='text'
                  placeholder='1000'
                  class='serif'
                />
              </div>
              <div className='currency-select'>
                <p className='sans currency-name'>{SelectedCurrency[1]}</p>
                <div className='input serif'>
                  <select
                    onInput={(e) => {
                      getRates(
                        Currencies.map((a) => a).find(
                          (r) => r[1] === e.target.value
                        )
                      );
                      setSelectedCurrency(
                        Currencies.map((a) => a).find(
                          (r) => r[1] === e.target.value
                        )
                      );
                    }}
                    // onChange={(e) => console.log(e.target.value)}
                    name='currencies'
                    className='serif select-currencies'
                  >
                    <option selected disabled hidden>
                      Choose
                    </option>
                    {Currencies.map((e, index) => (
                      <option key={index} value={e[1]}>
                        {e[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* <p className='bottom-p'>
              {`1${SelectedCurrency[0]} = ${
                Object.entries(Rates.conversion_rates).find(
                  (e) => e[0] == SelectedToCurrency[0]
                )[1]
              }${SelectedToCurrency[0]}`}
            </p> */}
          </div>
          <button
            onClick={() => {
              convertTo();
            }}
            className='serif cta'
          >
            Convert
          </button>
          <div class='you-have'>
            <div class='wrapper'>
              <div class='user-input'>
                <p class='sans'>You get</p>
                <input
                  ref={displayTarget}
                  type='text'
                  placeholder='1000'
                  class='serif'
                  readOnly='true'
                />
              </div>
              <div className='currency-select'>
                <p className='sans currency-name'>{SelectedToCurrency[1]}</p>
                <div className='input serif'>
                  <select
                    onInput={(e) => {
                      // getRates(
                      //   Currencies.map((a) => a).find(
                      //     (r) => r[1] === e.target.value
                      //   )
                      // );

                      setSelectedToCurrency(
                        Currencies.map((a) => a).find(
                          (r) => r[1] === e.target.value
                        )
                      );
                    }}
                    // onChange={(e) => console.log(e.target.value)}
                    name='currencies'
                    className='serif select-currencies'
                  >
                    <option selected disabled hidden>
                      Choose
                    </option>
                    {Currencies.map((e, index) => (
                      <option key={index} value={e[1]}>
                        {e[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
