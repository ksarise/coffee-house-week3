import products from "../products.json" assert {type:"json"};
    
    const menu = document.querySelector(".menu-grid");
    const coffeeTab = document.getElementById("tab-coffee");
    const teaTab = document.getElementById("tab-tea");
    const dessertTab = document.getElementById("tab-dessert");
    const cups = Array.from(menu.children);

    console.log(cups);
    coffeeTab.addEventListener("click", () =>chooseTab("coffee"));
    teaTab.addEventListener("click", () => chooseTab("tea"));
    dessertTab.addEventListener("click", () => chooseTab("dessert"));
    window.addEventListener("resize", display());

    function chooseTab (category){
        /*for (let i=0;i<=activeTab.length;i++){
            console.log(activeTab[i].classList.contains("active"));
            activeTab[i].classList.remove("active");
            
        } */
        menu.innerHTML ="";
        coffeeTab.classList.remove("active");
        teaTab.classList.remove("active");
        dessertTab.classList.remove("active");
        switch (category) {
            case "coffee":
                coffeeTab.classList.add("active");
                break;
            case "tea":
                teaTab.classList.add("active");
                break;
            case "dessert":
                dessertTab.classList.add("active");
                break;
        }
        menu.innerHTML=createMenu(getProducts(category));
        display();
    }
    function getProducts(category) {
        return products.filter((product) => 
        product.category === category);
    }
    function createMenu (products) {
        return products.map(
            ( {category, name, description, price}, index) =>
            `<div class="cup">
                <div class="cup-img">
                        <img src="../../assets/images/menu/${category}-${index+1}.png" alt="${name}">
                </div>
                <div class="cup-desc">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <h3>$${price}</h3>
                </div>
            </div>`
        ).join("");
    }
    function display() {
        if (window.innerWidth>768) {
            cups.map((item,index) => {
            if (index>=4) {
                item.classList.remove("hidden");
                console.log(item);
            }
        });} else {
            cups.map((item,index) => {
                if (index>=4) {
                    item.classList.add("hidden");
                    console.log("none", item);
                }
            });}
    }
    

    /*console.log(createMenu(getProducts("tea")));*/
