// 路由
import Home from 'pages/Home/Home.js';
import News from 'pages/News/News.js';
import Product from 'pages/Product/Product.js';
import ProductOld from 'pages/Product/ProductOld/ProductOld.js';
import ProductNew from 'pages/Product/ProductNew/ProductNew.js';
import ParentSonTransmit from 'pages/ParentSonTransmit/ParentSonTransmit.js';
import ReduxExperience from 'pages/ReduxExperience/ReduxExperience.js';
import HocPra from 'pages/HocPra/HocPra.js';


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
    },
    {
        path:'/parentSonTransmit',
        component:ParentSonTransmit
    },
    {
        path:'/ReduxExperience',
        component:ReduxExperience
    },
    {
        path:'/HocPra',
        component:HocPra
    }
];

export default routes;
