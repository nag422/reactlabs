import React from 'react'
import './styles.css'
import { useState } from 'react';
import { useQuery } from 'react-query';
import {Wrapperdiv,StyledButton} from './App.styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Item from './components/Item/Item';

import Buttonbootstrap from './components/Button/Buttonbootstrap'
import { Grid } from '@material-ui/core';
export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  };

const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch('https://fakestoreapi.com/products')).json();
}


const App: React.FC = () => {
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    
    const data: any[] = []
    
    const handleSubmit = () =>{
       

    }
    // const { data, isLoading, error } = useQuery<CartItemType[]>(
    //     'products',
    //     getProducts
    //   );
      
    const handleAddToCart = () => null;
    
    return (
        <Wrapperdiv>
            {/* <h1>Hello -- serving from {process.env.NODE_ENV}</h1> */}
            {/* <img src={logo} alt="logo" width="200" height="100" /> */}
            {/* <Buttonbootstrap text = "Button" iscontained={false} /> */}
            <StyledButton onClick={handleSubmit}>
                <Badge badgeContent={6} color='error'>
                <AddShoppingCartIcon />
                </Badge>
            </StyledButton>
            <Grid container spacing={3}>
                {data?.map(item => (
                <Grid item key={item.id} xs={12} sm={4}>
                    <Item item={item} handleAddToCart={handleAddToCart} />
                </Grid>
                ))}
            </Grid>
        </Wrapperdiv>
    )
}

export default App
