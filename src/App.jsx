import { ThemeProvider } from "styled-components"

import { Container } from "./style"
import GlobalStyle from "./globalStyle"
import { theme } from "./theme/style"
import { contents } from "./content"

import Header from "./components/Header/Header"
import { Card } from "./components/Card/Card"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <Header />

        <Container>
          {contents.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </Container>

        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
