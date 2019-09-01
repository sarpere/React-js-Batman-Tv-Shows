import Header from './Header'
import '../style.sass'


export default function Layout(props) {
  return (
    <div className="Layout">
      <Header />
      <div className="App">
        {props.children}
      </div>
    </div>
  )
}
