// On clicking remove button the item should be removed from DOM as well as localstorage.

var bucket_items = JSON.parse(localStorage.getItem('coffee')) || [];

var bucket = document.getElementById('bucket');

function append(items){   
items.forEach((el, index) => {
    let card = document.createElement('div');

    let item_image = document.createElement('img');
    item_image.src = el.image;

    var item_type =  document.createElement('p');
    item_type.innerText = el.title;

    var price = document.createElement('p');
    price.innerText = el.price;

    var btn = document.createElement('button');
    btn.innerText = "Remove"
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener('click', function(event){
        deleteBucketItems(index)
    })
    card.append(item_image, item_type, price, btn);
    bucket.append(card);
});    
}
append(bucket_items);


function deleteBucketItems(index){
    bucket_items.splice(index,1)
    localStorage.setItem('coffee', JSON.stringify(bucket_items));
    window.location.reload();
}

var total_amount = document.getElementById('total_amount')

let sum = 0
bucket_items.forEach(el => {
    sum += Number(el.price) 
})
total_amount.innerText = sum;

function toCheckout(){
    window.location.href = './checkout.html'
}