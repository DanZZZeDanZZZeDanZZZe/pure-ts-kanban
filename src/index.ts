import './scss/index.scss'
import Kanban from './components/Kanban/Kanban'
import Header from './components/Header/Header'


const kanban : Kanban = new Kanban(
  document.getElementById('app'), [Header]
)
kanban.render()
console.log(kanban)