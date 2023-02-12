import styled from "styled-components";

export const StyleSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    li {
        list-style: none;
    }
    
    a {
        border: 1px solid ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.text};
        margin-right: 10px;
        display: inline-flex;
        align-items: center;
        border-radius: 50%;
        padding: 10px;
    }
`