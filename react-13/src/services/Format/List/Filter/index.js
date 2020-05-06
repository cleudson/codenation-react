const filterList = ({list, filter, key ='name'}) => (
    list.filter((el) => el[key].toLowerCase().indexOf(filter.toLowerCase()) >= 0)
);
export default filterList;