import styled from 'styled-components';
import { MdSend } from 'react-icons/md';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size 24px;
    font-weight: 700;
    margin-bottom: 1rem;
`
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    display: flex;
    border-radius: 5px;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgrey;
`
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`
const Button = styled.button`
 flex: 2;
 border: none;
 background-color: lightblue;
 color: white;
 font-size: 1.5em;
`

const Newsletter = () => {
    return ( 
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely Offers updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder='enter your email for mind blowing offers' />
                <Button>
                    <MdSend/>
                </Button>
            </InputContainer>
        </Container>
     );
}
 
export default Newsletter;