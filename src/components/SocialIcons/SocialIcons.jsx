import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyleSocialIcons } from "./style";

export function SocialIcons() {
    return (
        <StyleSocialIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyleSocialIcons>
    )
}