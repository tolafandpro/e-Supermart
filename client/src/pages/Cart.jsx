import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "./../components/Footer";
import { MdAdd, MdRemove } from "react-icons/md";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 30px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
// const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CartPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR ITEM(S)</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Sneakers Shoe(2)</TopText>
            <TopText>Your Whislist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Button>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/970039/1.jpg?1709" />
                <Details>
                  <ProductName>
                    <b>Product</b> PlayStaion 5
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9832163
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <MdAdd />
                  <ProductAmount>2</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>$ 50</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image
                  src={
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/223659/1.jpg?2292"
                  }
                />
                <Details>
                  <ProductName>
                    <b>Product</b> Nike Sneakers
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 1252163
                  </ProductId>
                  <ProductColor color="grey" />
                  <ProductSize>
                    <b>Size</b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <MdAdd />
                  <ProductAmount>2</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>$ 450</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image
                  src={
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/050858/1.jpg?8231"
                  }
                />
                <Details>
                  <ProductName>
                    <b>Product</b> iPhone 13 ProMax
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 1252163
                  </ProductId>
                  <ProductColor color="gold" />
                  <ProductSize>
                    <b>Size</b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <MdAdd />
                  <ProductAmount>2</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>$ 450</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>$ 5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>$ -5.60</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Button>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
