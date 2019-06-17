// 路由
import Home from '../pages/Home/Home.js';
import News from '../pages/News/News.js';
import Product from '../pages/Product/Product.js';
import ProductOld from '../pages/Product/ProductOld/ProductOld.js';
import ProductNew from '../pages/Product/ProductNew/ProductNew.js';

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
    {
        path:'/product',
        component:Product,        
        routes:[
            {
                path:'/',
                component:ProductOld,
                exact:true
            },
            {
                path:'/productNew',
                component:ProductNew
            }
        ]
    }
];

export default routes;
