import { JSX } from 'react';
import { NumericFormat } from 'react-number-format';

export function formatAmount(amount: number | string): JSX.Element {
    return <NumericFormat value={amount} displayType="text" thousandSeparator="," />
}