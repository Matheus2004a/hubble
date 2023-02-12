import styled from "styled-components";

export const StyleFooter = styled.footer`
    background: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.text};
    padding: 6.25rem 0 3.75rem;
    
    img,
    ul li {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
    }

    p {
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }
    }
`