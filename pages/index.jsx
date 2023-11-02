import Layout from "@/components/Layout";
import React from "react";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import RegiterStore from "@/components/Register-store";
import DeliveryMan from "@/components/Delivery-man";
import Showcase from "@/components/App-showcase";
import Grocery from "@/components/Grocery";

const HomePage = () => {
  return (
        <Container>
            <Banner />
            <Grocery />
            <Features />
            <RegiterStore />
            <Showcase />
            <DeliveryMan />
        </Container>
  );
};

export default HomePage;