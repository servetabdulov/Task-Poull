import { useEffect , useState} from "react"
import { useLocation} from "react-router-dom"
import HeaderMobile from './HeaderMobile'
import HeaderWeb from './Header/HeaderWeb'
import './Head.css'

const Header = () => {

  let {innerWidth} = window

  let [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(innerWidth < 991)
  } , [innerWidth])

    let location = useLocation()
    let {pathname} = location

      return (
        <div className={`w-100 head ${pathname === "/" ? 'bg-white' : 'bg-success'}`}>
          {
            !mobile ? <HeaderWeb/> : <HeaderMobile/>
          }
        </div>
      )
    }
  
  
  export default Header