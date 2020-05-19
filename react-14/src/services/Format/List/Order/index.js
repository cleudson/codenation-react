const orderList = ({list, order}) => {
    const orderParser = (order === 'id') ? Number : String;
    return list.sort((a, b) => {
        const orderA = orderParser(a[order]);
        const orderB = orderParser(b[order]);
        if(orderA  < orderB) return -1;
        if(orderA  > orderB) return 1;
        return 0;
    });
}

export default orderList;