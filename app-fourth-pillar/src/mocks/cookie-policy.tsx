import { HeroProps } from '../components/Hero/Hero';
import { ITextContentProps } from '../components/TextContent/TextContent';

export const heroData = {
  title: 'Cookie Policy',
} as HeroProps;

export const contentData = {
  content: `
    <p>This website uses cookies. We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
    <p>Cookies are small text files that can be used by websites to make a user's experience more efficient.</p>
    <p>The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.</p>
    <p>This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.</p>
    <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>
    <p>Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.</p>
    <p>Please state your consent ID and date when you contact us regarding your consent.</p>
    <p>Your consent applies to the following domains: fourthpillarpr.com</p>
  `,
} as ITextContentProps;
