import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    && > div, 
    && > ul {
        flex: 1;
    }

    p {
        color: ${({ theme }) => theme.colors.grayishBlue};
        font-weight: 600;
    }
    
    button {
        margin: 1rem 0;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`