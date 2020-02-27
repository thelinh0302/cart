
var initialState =[
    {
    id:1,
    name: 'Iphone x',
    image:'https://mirkarisocialmedia.com/wp-content/uploads/2018/05/Apple-iPhone-X.png',
    Decrepsion:'Sản phẩm do apple sản xuất',
    price:500,
    inventory:10,
    rating :5
},
{
    id:2,
    name: 'Iphone xs max',
    image:'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/327211603.png',
    Decrepsion:'Sản phẩm do apple sản xuất',
    price:1500,
    inventory:50,
    rating :4

},
{
    id:3,
    name: 'Iphone 11 promax',
    image:'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/116240486.png',
    Decrepsion:'Sản phẩm do apple sản xuất',
    price:2000,
    inventory:15,
    rating :4

},
]
const products = (state=initialState,action)=>{
    switch(action.type){
        default:return [...state]
    }
}
export default products