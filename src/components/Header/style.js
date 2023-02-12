import styled from "styled-components";

export const StyleHeader = styled.header`
    background: ${({ theme }) => theme.colors.header};
    padding: 1rem 2rem;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 2.5rem;
    }
    `

export const Image = styled.img`
    width: 30%;
    margin-left: 2rem;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 2.5rem 0 2rem;
    }
`