import { HomeContainer } from './styles'
import LogoFindAFriend from '../../assets/logo.png'
import Bunner from '../../assets/bunner.png'
import { SelectState } from '../../components/selectState'
import { SelectCity } from '../../components/selectCity'
import { SearchButton } from '../../components/searchButton'
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
        <section className="FirstSection">
          <p>
            Encontre o animal de estimação ideal <br />
            para o seu estilo de vida!
          </p>
        </section>
        <section className="SecondSection">
          <span>Busque um amigo:</span>
          <SelectState>
            <option value="">Sc</option>
            <option value="">Sc</option>
            <option value="">Sc</option>
          </SelectState>
          <SelectCity>
            <option value="">Florianópolis</option>
            <option value="">Joinville</option>
          </SelectCity>
          <SearchButton/>
        </section>
      </footer>
    </HomeContainer>
  )
}
