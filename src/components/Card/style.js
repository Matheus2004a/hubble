import styled from "styled-components";

export const StyleCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ layout }) => layout || "row"};
    background: ${({ theme }) => theme.colors.text};
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 2.5rem 0;
    padding: 3.5rem;

    img {
        width: calc(100% - 20%);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`