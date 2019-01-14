module.exports = () => {
  let data;
  const dataFn = (obj) => { data = obj; };
  dataFn.getData = () => data;
  return dataFn;
};
