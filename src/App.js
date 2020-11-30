import { React } from "react";
import { Admin, Resource, fetchUtils } from "react-admin";

import ProductIcon from '@material-ui/icons/ShoppingCart';
import CategoryIcon from '@material-ui/icons/Category';
import DriverIcon from '@material-ui/icons/DriveEta';
import OrderIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import PharmacyIcon from '@material-ui/icons/LocalPharmacy';
import UserIcon from '@material-ui/icons/Group';
import {
  FirebaseAuthProvider
} from 'react-admin-firebase';

import simpleRestProvider from 'ra-data-simple-rest';
//import * as dataProv from 'ra-data-springboot-rest';

import CatalogueProductList from "./components/Catalogue/CatalogueProductList";
import ProductCreate from "./components/Catalogue/ProductCreate"
import ProductEdit from "./components/Catalogue/ProductEdit"
import Dashboard from './components/Dashboard';

import CategoryList from "./components/Category/CategoryList";
import CategoryCreate from "./components/Category/CategoryCreate"
import CategoryEdit from "./components/Category/CategoryEdit"

import DriverList from "./components/Driver/DriverList";
import DriverCreate from "./components/Driver/DriverCreate"
import DriverEdit from "./components/Driver/DriverEdit"

import OrderList from "./components/Order/OrderList";
import OrderCreate from "./components/Order/OrderCreate"
import OrderEdit from "./components/Order/OrderEdit"

import PaymentList from "./components/Payment/PaymentList";
import PaymentEdit from "./components/Payment/PaymentEdit"

import PharmacyList from "./components/Pharmacy/PharmacyList";
import PharmacyCreate from "./components/Pharmacy/PharmacyCreate"
import PharmacyEdit from "./components/Pharmacy/PharmacyEdit"

import UserList from "./components/User/UserList";
import UserCreate from "./components/User/UserCreate"
import UserEdit from "./components/User/UserEdit"

const config = {
  apiKey: "AIzaSyAO4FqbMWKrjiPJJn4JHoZ-sddaPamrZO8",
    authDomain: "epharmacy-293518.firebaseapp.com",
    databaseURL: "https://epharmacy-293518.firebaseio.com",
    projectId: "epharmacy-293518",
    storageBucket: "epharmacy-293518.appspot.com",
    messagingSenderId: "98884823882",
    appId: "1:98884823882:web:b7888b4bf23a79e454afb3",
    measurementId: "G-Z4N1PJEY0D"
};

const authProvider = FirebaseAuthProvider(config);

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Content-Type', 'application/json');
    return fetchUtils.fetchJson(url, options);
}


function App() {
  return (
    <Admin authProvider={authProvider} dashboard={Dashboard} title="ePharmacy Delivery System - Admin Panel" dataProvider={simpleRestProvider("https://epharmacy-sa.herokuapp.com/", fetchJson)}>
    <Resource name="products" icon={ProductIcon} list={CatalogueProductList} create={ProductCreate} edit={ProductEdit}/>
    <Resource name="categories" icon={CategoryIcon} options={{ label: 'Categories' }}  list={CategoryList} create={CategoryCreate} edit={CategoryEdit}/>
    <Resource name="drivers" icon={DriverIcon} list={DriverList} create={DriverCreate} edit={DriverEdit}/>
    <Resource name="orders" icon={OrderIcon} list={OrderList} create={OrderCreate} edit={OrderEdit}/>
    <Resource name="payments" icon={PaymentIcon} list={PaymentList} edit={PaymentEdit}/>
    <Resource name="pharmacies" icon={PharmacyIcon} list={PharmacyList} create={PharmacyCreate} edit={PharmacyEdit}/>
    <Resource name="users" icon={UserIcon} list={UserList} create={UserCreate} edit={UserEdit}/>
    
    </Admin>

  );
}

export default App;
