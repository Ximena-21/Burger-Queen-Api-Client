function filterAtributteList(filterKeys, listElements) {
  const newListElements = listElements.map((element) => {
    return Object.keys(element)
      .filter((key) => {
        if (filterKeys.some((keyFilter) => key.includes(keyFilter))) {
          return key;
        }
      })
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: element[key],
        });
      }, {});
  });
  return newListElements;
}



export {
  filterAtributteList,
}