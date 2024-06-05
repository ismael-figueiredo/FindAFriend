import { HomeContainer } from './styles'
import LogoFindAFriend from '../../assets/logo.png'
import Bunner from '../../assets/bunner.png'
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
      <footer></footer>
    </HomeContainer>
  )
}
