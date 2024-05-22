import React from "react";
import Header from '../../components/header'
import LandingPageMain from '../../components/landingPageMain'
import Footer from '../../components/footer'
import { ContentPage } from './styles';


export default function LandingPage(props) {
    return (
        <ContentPage>
            <Header/>
            <LandingPageMain/>
            <Footer/>
        </ContentPage>
    )
}
