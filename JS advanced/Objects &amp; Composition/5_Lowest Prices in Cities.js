function foo(arr) {
    const data = arr
        .map(x => x.split(" | "))
        .reduce((a, v) => {
            const [town, product, price] = v.map(x => (isNaN(x) ? x : Number(x)))
            a[product] = a[product] || { price, town }
            if (a[product].price > price || a[product].town === town) {
                a[product] = { price, town }
            }
            return a
        }, {})

    return `${Object.entries(data)
        .map(([name, product]) => `${name} -> ${product.price} (${product.town})`)
        .join("\n")}`
}

solve(['Sofia City | Audi | 100000',
   ' Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
   ' Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
);