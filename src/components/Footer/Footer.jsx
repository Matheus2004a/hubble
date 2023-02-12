import { Container } from "../../style"
import { Flex } from "../styles/Flex"
import { StyleFooter } from "./style"
import { SocialIcons } from "../SocialIcons/SocialIcons";

import Brand from "../../assets/images/logo.svg"

function Footer() {
    return (
        <StyleFooter>
            <Container>
                <img src={Brand} alt="logo" />

                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>

                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; Copyright 2023 Huddle. All rights reserved.</p>
            </Container>
        </StyleFooter>
    )
}

export default Footer