import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_QqBcRlDRNk3WJZwL1osjYe3tPGg2SRPQAOvE5CrB"
);
currecncyConverter("INR", "USD", 4);
export async function currecncyConverter(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  return multiplier * units;
}
