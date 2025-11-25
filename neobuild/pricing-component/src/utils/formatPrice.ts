export const formatPrice = (price: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const formatPeriod = (period: string): string => {
  const periods: { [key: string]: string } = {
    'month': 'month',
    'monthly': 'month',
    'year': 'year',
    'yearly': 'year',
    'annual': 'year'
  }
  
  return periods[period.toLowerCase()] || period
}