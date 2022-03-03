export const tableSorter = (toSort = [], sortType = '') => {
  const tempArray = [...toSort];

  const sortLength = (par1, par2) => {
    return par1.length - par2.length;
  };

  const sortCase = (par1, par2) => {
    return par1.localeCompare(par2);
  };

  if (sortType === 'old') {
    return tempArray.reverse();
  }
  if (sortType === 'a') {
    return tempArray.sort(sortCase);
  }
  if (sortType === 'z') {
    return tempArray.sort(sortCase).reverse();
  }
  if (sortType === 'short') {
    return tempArray.sort(sortLength);
  }
  if (sortType === 'long') {
    return tempArray.sort(sortLength).reverse();
  }
  return tempArray;
};
