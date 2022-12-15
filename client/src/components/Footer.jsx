import styled from 'styled-components';
import { MdFacebook, MdRoom, MdPhone, MdMail } from 'react-icons/md';
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';



const Container = styled.div`
    display: flex;
    margin: auto;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`

`
const List =styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;    
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const Footer = () => {
    return ( 
        <Container>
            <Left>
              <Logo>OD Shop</Logo>
              <Desc>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veritatis, deleniti. Tempora harum temporibus, provident
                  officia inventore quisquam veritatis dolorem tenetur molestiae
                  consequatur et culpa autem suscipit ipsa tempore quibusdam blanditiis!
              </Desc>
              <SocialContainer>
                  <SocialIcon color="#3B5999">
                      <MdFacebook/>
                  </SocialIcon>
                  <SocialIcon color="#55ACEE">
                      <FaTwitter/>
                  </SocialIcon>
                  <SocialIcon color="#E4405F">
                      <FaInstagram/>
                  </SocialIcon>
                  <SocialIcon color="#E60023">
                      <FaPinterest/>
                  </SocialIcon>
              </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Electronics</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MdRoom style={{marginRight:"10px"}}/>401 Goergy road, North Caroliner 2356
                </ContactItem>
                <ContactItem>
                    <MdPhone style={{marginRight:"10px"}}/>+ 1 456 278 67
                </ContactItem>
                <ContactItem>
                    <MdMail style={{marginRight:"10px"}}/>tolafandpro@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
     );
}
 
export default Footer;