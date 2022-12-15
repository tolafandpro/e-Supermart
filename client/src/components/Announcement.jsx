import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 18px;
    font-weight: 500;
`

function Announcement () {
    return ( 
        <Container>
            This is the Annoucement Section
        </Container>
     );
}

export default Announcement ;