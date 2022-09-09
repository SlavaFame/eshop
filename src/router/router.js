import CatalogPage from '@/pages/CatalogPage';
import {createRouter, createWebHistory} from "vue-router";
import AboutPage from '@/pages/AboutPage';
import ContactsPage from '@/pages/ContactPage';
import DeliveryPage from '@/pages/DeliveryPage';
import PaymentPage from '@/pages/PaymentPage';

const routes = [
    {
        path: '/',
        component: CatalogPage,
        name: 'Главная'
    },
    {
        path: '/catalog',
        component: CatalogPage,
        name: 'Каталог'
    },
    {
        path: '/catalog/:id',
        //component: CatalogIdPage
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'О нас'
    },
    {
        path: '/contacts',
        component: ContactsPage,
        name: 'Контакты'
    },
    {
        path: '/delivery',
        component: DeliveryPage,
        name: 'Доставка'
    },
    {
        path: '/payment',
        component: PaymentPage,
        name: 'Оплата'
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;