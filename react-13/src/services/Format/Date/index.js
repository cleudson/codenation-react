const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
const formatDate = (date) => (new Date(date).toLocaleDateString("pt-BR", dateOptions));

export default formatDate;