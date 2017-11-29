export const transformToFlag = country => {
  switch (country) {
    case 'BRL':
      return 'br';
    case 'USD':
      return 'us';
    case 'GBP':
      return 'gb';
    case 'EUR':
      return 'eu';
    default:
      return '';
  }
};

export const transformToCoin = country => {
  switch (country) {
    case 'BRL':
      return 'Real';
    case 'USD':
      return 'Dollar';
    case 'GBP':
      return 'Libra';
    case 'EUR':
      return 'Euro';
    default:
      return '';
  }
};

export const transformToMoneySimbol = country => {
  switch (country) {
    case 'BRL':
      return 'R$';
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    case 'EUR':
      return '€';
    default:
      return '';
  }
};
