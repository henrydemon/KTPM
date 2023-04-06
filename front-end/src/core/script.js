export default function formatMoney(num, currency) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + currency;
}
