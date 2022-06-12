const { NAME, ADDRESS, prices, setPrice, ...available } = {
    NAME: "DALIDA'S SHOP",
    ADDRESS: "AKTAU SCHOOL 7",
    PROFIT: 900,
    prices: [],
    clothes: [
        "jeans",
        "shirt",
        "trousers",
        "kazakh trousers",
    ],
    setPrice: function () {
    for (let i = 0; i < available.clothes.length; i++) {
        prices[i] = Math.floor(Math.random() * 10000) + 1;
    }
},
    userInfo: function (user) { 
        return available.clothes.findIndex(cloth => cloth == user);
    }
}
export{NAME, ADDRESS, prices, setPrice, available};