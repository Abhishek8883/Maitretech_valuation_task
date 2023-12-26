import { Outlet } from 'react-router-dom';
import Header from './header/Header';
const layout = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default layout