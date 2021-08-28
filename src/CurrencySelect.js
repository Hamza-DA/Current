import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function CurrencySelect({ props }) {
  const [SelectedCurrency, setSelectedCurrency] = useState('');
  useEffect(() => {
    Getfunc();
  }, []);

  const Getfunc = () => {
    return <></>;
  };
  return Getfunc();
}
