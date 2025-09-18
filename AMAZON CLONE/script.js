const products = [
  {id:1,title:'Wireless Headphones',cat:'electronics',price:59.99,img:'https://picsum.photos/seed/1/400/300'},
  {id:2,title:'Smart Watch',cat:'electronics',price:89.99,img:'https://picsum.photos/seed/2/400/300'},
  {id:3,title:'JavaScript Book',cat:'books',price:19.5,img:'https://picsum.photos/seed/3/400/300'},
  {id:4,title:'Cooking Pan',cat:'home',price:24.0,img:'https://picsum.photos/seed/4/400/300'},
  {id:5,title:'LED Lamp',cat:'home',price:14.99,img:'https://picsum.photos/seed/5/400/300'},
  {id:6,title:'Novel: The Wanderer',cat:'books',price:9.99,img:'https://picsum.photos/seed/6/400/300'}
];

const productGrid = document.getElementById('productGrid');
const resultCount = document.getElementById('resultCount');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = {};

function renderProducts(list){
  productGrid.innerHTML='';
  list.forEach(p=>{
    const div=document.createElement('div');div.className='card';
    div.innerHTML=`<img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <div class="price">$${p.price.toFixed(2)}</div>
      <div class="meta"><div>${p.cat}</div><button data-id="${p.id}">Add</button></div>`;
    productGrid.appendChild(div);
  });
  resultCount.textContent=list.length;
}

function updateCartUI(){
  const ids = Object.keys(cart);
  let count=0,total=0;
  cartList.innerHTML='';
  ids.forEach(id=>{
    const item=cart[id];
    count+=item.qty; total+=item.qty*item.price;
    const row=document.createElement('div');row.className='cart-item';
    row.innerHTML=`<div>${item.title}</div><div class="qty">Qty: ${item.qty}</div><div>$${(item.qty*item.price).toFixed(2)}</div>`;
    cartList.appendChild(row);
  });
  cartCount.textContent=count; cartTotal.textContent=total.toFixed(2);
}

productGrid.addEventListener('click', e=>{
  if(e.target.tagName==='BUTTON'){
    const id=+e.target.dataset.id; const p=products.find(x=>x.id===id);
    if(!cart[id]) cart[id]={...p, qty:0};
    cart[id].qty++;
    updateCartUI();
  }
});

// search & filter
document.getElementById('searchBtn').addEventListener('click', ()=>{
  const q=document.getElementById('searchInput').value.toLowerCase();
  const filtered=products.filter(p=>p.title.toLowerCase().includes(q));
  renderProducts(filtered);
});

// category click
document.getElementById('categories').addEventListener('click', e=>{
  if(e.target.tagName==='LI'){
    [...e.target.parentElement.children].forEach(li=>li.classList.remove('active'));
    e.target.classList.add('active');
    const cat=e.target.dataset.cat;
    renderProducts(cat==='all'?products:products.filter(p=>p.cat===cat));
  }
});

cartBtn.addEventListener('click', ()=>{cartModal.classList.remove('hidden')});
closeCart.addEventListener('click', ()=>{cartModal.classList.add('hidden')});
checkoutBtn.addEventListener('click', ()=>{alert('Checkout - demo'); cartModal.classList.add('hidden')});

// initial render
renderProducts(products);
updateCartUI();
