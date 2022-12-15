import styled from "styled-components";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div`
    height: max-contenet;
    // background: red;
    ${mobile({height: "max-contenet"})}
`
const Wrapper = styled.div`
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0px",
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;   
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex:1.5})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    &:hover {
        color: green;
    }
    ${mobile({fontSize: "12px", marginLeft:"10px"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"18px"})}
`

function Navbar() {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language >EN</Language>
                    <SearchContainer>
                        <Input placeholder="search" />
                        <MdSearch style={{ fontSize:"16px", color:"grey" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>OD Shop</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <MdOutlineShoppingCart style={{fontSize:"28px"}} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
       
     );
}

export default Navbar;