// Add the coffee to local storage with key "coffee"
async function makeRequest(){
    try{
        var res = await fetch('https://masai-mock-api.herokuapp.com/coffee/menu')
        var data = await res.json()
    append(data.menu.data)
    }
    catch(error){
        console.log(error);
    }
}

    makeRequest()

    let menu = document.getElementById('menu');

    function append(items){
        
    items.forEach(el => {
        let card = document.createElement('div');

        let item_image = document.createElement('img');
        item_image.src = el.image;

        var item_type =  document.createElement('p');
        item_type.innerText = el.title;

        var price = document.createElement('p');
        price.innerText = el.price;

        var btn = document.createElement('button');
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener('click', function(event){

            coffee_added.push(el);
            addToBucket()

        })
        card.append(item_image, item_type, price, btn);
        menu.append(card);
    });    
}


var coffee_added = JSON.parse(localStorage.getItem('coffee')) || [];

function addToBucket(){
    localStorage.setItem("coffee", JSON.stringify(coffee_added));
    window.location.reload()
}

var coffee_count = document.getElementById('coffee_count')
coffee_count.innerText = JSON.parse(localStorage.getItem('coffee')).length || null