import { Outlet, useNavigation } from 'react-router'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import Loader from './Loader'
function AppLayout() {
  const navigation =useNavigation()
  const isLoading=navigation.state === "loading" 
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]  gap-y-4'>
      {isLoading && <Loader/>}
      <Header/>
      
      <div className='my-10 overflow-scroll'>

        <main className='max-w-3xl mx-auto'>
          <Outlet/>
        </main>
      
      </div>

      <CartOverview/>
    </div>
  )
}

export default AppLayout