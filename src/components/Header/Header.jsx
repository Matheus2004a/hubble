import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { StyleHeader, Logo, Nav, Image } from "./style";
import { Button } from "../Button/style";
import { Flex } from "../styles/Flex"
import Brand from "../../assets/images/logo.svg"
import Illustration from "../../assets/images/illustration-mockups.svg"

function Header() {
    const { colors } = useContext(ThemeContext)

    return (
        <StyleHeader>
            <Nav>
                <Logo src={Brand} alt="logo" />
                <Button>Try it free</Button>
            </Nav>

            <Flex>
                <div>
                    <h1>Build the company your fans will love</h1>
                    <p>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>

                    <Button bgColor={colors.pink} color={colors.text}>
                        Get start for free
                    </Button>
                </div>

                <Image src={Illustration} alt="Illustration-mockups" />
            </Flex>
        </StyleHeader>
    )
}

export default Header