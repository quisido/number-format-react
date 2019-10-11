import React from 'react';

interface BaseProps {
  children: number | string;
  locale?: string;
  localeMatcher?: 'best fit' | 'lookup';
  maximumFractionDigits?: ZeroToTwenty;
  maximumSignificantDigits?: OneToTwentyOne;
  minimumFractionDigits?: ZeroToTwenty;
  minimumIntegerDigits?: OneToTwentyOne;
  minimumSignificantDigits?: OneToTwentyOne;
  style?: 'currency' | 'decimal' | 'percent';
  useGrouping?: boolean;
}

interface CurrencyProps {
  currency: string;
  currencyDisplay?: 'code' | 'name' | 'symbol';
  style: 'currency';
}

interface NoCurrencyProps {
  currency?: undefined;
  currencyDisplay?: undefined;
  style?: 'decimal' | 'percent';
}

type OneToTwenty =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

type OneToTwentyOne = OneToTwenty | 21;

type Props = BaseProps & (CurrencyProps | NoCurrencyProps);

type ZeroToTwenty = 0 | OneToTwenty;

export default function NumberFormat({
  children,
  currency,
  currencyDisplay,
  locale,
  localeMatcher,
  maximumFractionDigits,
  maximumSignificantDigits,
  minimumFractionDigits,
  minimumIntegerDigits,
  minimumSignificantDigits,
  style,
  useGrouping,
}: Props): JSX.Element {
  const numberFormat: Intl.NumberFormat = new Intl.NumberFormat(locale, {
    currency,
    currencyDisplay,
    localeMatcher,
    maximumFractionDigits,
    maximumSignificantDigits,
    minimumFractionDigits,
    minimumIntegerDigits,
    minimumSignificantDigits,
    style,
    useGrouping,
  });

  const n: number =
    typeof children === 'string' ? parseFloat(children) : children;

  return <>{numberFormat.format(n)}</>;
}
