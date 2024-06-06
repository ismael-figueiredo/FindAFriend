import { HomeContainer } from './styles'
import LogoFindAFriend from '../../assets/logo.png'
import Bunner from '../../assets/bunner.png'
import { SelectState } from '../../components/selectState'
export function Home() {
  return (
    <HomeContainer>
      <header>
        <img src={LogoFindAFriend} alt="Logotipo find a frind" />
      </header>
      <main>
        <h1>
          Leve <br /> a felicidade para o seu lar
        </h1>
        <img src={Bunner} alt="" />
      </main>
      <footer>
        <section>
          <p>
            Encontre o animal de estimação ideal <br />
            para o seu estilo de vida!
          </p>
        </section>
        <section>
          <span>Busque um amigo:</span>
          <SelectState/>
        </section>
      </footer>
    </HomeContainer>
  )
}
