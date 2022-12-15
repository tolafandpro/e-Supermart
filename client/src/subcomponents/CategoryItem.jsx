import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    flex: 1;
    margin: 3px;
    height: 70vh;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    color: #555;
    margin-bottom: 2rem;    
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600px;
    color: #555;
`

const CategoryItem = ({ item }) => {
    return ( 
        <Container>
            <Link to={`/products/${item.cat}`} >
            <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Shop Now</Button>
                </Info>
            </Link>
        </Container>
     );
}
 
export default CategoryItem;