import styled from "styled-components";
import CategoryItem from "../subcomponents/CategoryItem";
import { categories } from "../data";


const Container = styled.div`
    position: relative;
    display: flex;
    padding: 20px;
    justify-content: space-between;
`


const Categories = () => {
    return ( 
        <Container>
          {categories.map((category) => <CategoryItem key={category.id} item={category} />)}
        </Container>
     );
}
 
export default Categories;