import Layout from "@/components/Layout";
import React from "react";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Showcase from "@/components/App-showcase";
import Grocery from "@/components/Grocery";
import RegisterCard from "@/components/Register-card";
import seller from '../assets/seller.png';

const HomePage = () => {
  return (
        <Container>
            <Banner />
            <Grocery />
            <Features />
            <RegisterCard 
              title="Become a Seller" 
              description="Register as a seller and open shop for start your business" 
              link="/store-registration" 
              image={seller.src}
            />
            <Showcase />
            {/* <RegisterCard 
               title="Join as Deliveryman"
               description="Register as a seller and open shop for start your business"  
               link="/"
               image={seller.src}
            /> */}
        </Container>
  );
};

export default HomePage;