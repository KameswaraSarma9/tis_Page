import useTheme from './hooks/useTheme'
import ScrollProgress from './components/ScrollProgress'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Sports from './components/Sports'
import Rankings from './components/Rankings'
import Parents from './components/Parents'
import Contact from './components/Contact'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <Sports />
        <Rankings />
        <Parents />
      </main>
      <Contact />
    </>
  )
}
