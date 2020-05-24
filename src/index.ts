import './scss/index.scss'
import Kanban from './components/Kanban/Kanban'
import Header from './components/Header/Header'
import Surface from './components/Surface/Surface'
import Footer from './components/Footer/Footer'

const kanban : Kanban = new Kanban(
  document.getElementById('app'), [Header, Surface, Footer]
)
kanban.render()

