import React from "react";
import Button from "../button";
import Logo from "../logo";
import FaceImg from '../../assets/images/icon-facebook.svg';
import YoutubeImg from '../../assets/images/icon-youtube.svg';
import TwitterImg from '../../assets/images/icon-twitter.svg';
import PinterestImg from '../../assets/images/icon-pinterest.svg';
import InstagramImg from '../../assets/images/icon-instagram.svg';
import { 
    TagFooter, LogoFooter, 
    MoreInformations, SocialMedia, SocialMediaImg, 
    Search, Message, ContentFooter, MessageH1, 
    TagLi, InputSearch, Paragraph 
} from "./styles";

const socialMediaIcons = [
    { src: FaceImg, alt: "Facebook" },
    { src: YoutubeImg, alt: "YouTube" },
    { src: TwitterImg, alt: "Twitter" },
    { src: PinterestImg, alt: "Pinterest" },
    { src: InstagramImg, alt: "Instagram" }
];

const footerLinks = [
    { label: "Home", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Products", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Community", href: "#" },
    { label: "Privacy Policy", href: "#" }
];

const Footer = () => {
    return (
        <TagFooter>
            <Message>
                <MessageH1>Simplify how your team works today.</MessageH1>
                <Button bg="#FFF" color="#000" />
            </Message>
            <ContentFooter>
                <LogoFooter>
                    <Logo />
                    <SocialMedia>
                        {socialMediaIcons.map(icon => (
                            <SocialMediaImg key={icon.alt} src={icon.src} alt={icon.alt} />
                        ))}
                    </SocialMedia>
                </LogoFooter>
                <MoreInformations>
                    <ul>
                        {footerLinks.slice(0, 4).map(link => (
                            <TagLi key={link.label}><a href={link.href}>{link.label}</a></TagLi>
                        ))}
                    </ul>
                </MoreInformations>
                <MoreInformations>
                    <ul>
                        {footerLinks.slice(4).map(link => (
                            <TagLi key={link.label}><a href={link.href}>{link.label}</a></TagLi>
                        ))}
                    </ul>
                </MoreInformations>
                <Search>
                    <div>
                        <InputSearch type="text" placeholder="Updates in your inbox" />
                        <Button text='Go' />
                    </div>
                    <Paragraph>Copyright 2020. All Rights Reserved</Paragraph>
                </Search>
            </ContentFooter>
        </TagFooter>
    );
}
export default Footer;