// 路由
import Home from '../pages/Home/Home.js';
import News from '../pages/News/News.js';
// import Product from '../pages/Product/Product.js';
// import ProductList from '../pages/Product/ProductList/ProductList.js';
// import ProductAdd from '../pages/Product/ProductAdd/ProductAdd.js';

const routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/news',
        component:News
    },
    // {
    //     path:'/product',
    //     component:Product,
    //     routes:[
    //         {
    //             path:'/product',
    //             component:ProductList,
    //             exact:true
    //         },
    //         {
    //             path:'/product/add',
    //             component:ProductAdd
    //         }
    //     ]
    // }
];

export default routes;
