import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam dolores perspiciatis ipsum deleniti, quibusdam, dicta recusandae fugit molestiae magni architecto, repellat quasi earum! Eveniet repellendus debitis impedit porro. Blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam fuga, nulla tempore veritatis eligendi atque non. Deleniti, possimus cum harum vitae dolore, ab delectus labore ipsa, voluptates tempora nulla?
            </p>

          <Section title="links Úteis">
            <Links>
              <li> <a href="#">http://www.rocketseat.com.br</a> </li>
              <li> <a href="#">http://www.rocketseat.com.br</a> </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title={"express"}/>
            <Tag title={"nodejs"}/>
          </Section>
          
          <Button title="Voltar" />
          
        </Content>
      </main>
    </Container>
  )
}