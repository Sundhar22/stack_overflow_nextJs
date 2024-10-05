
import Navbar from '@/components/shared/navbar/navbar'

const Layout = () => {
  return (

    <main className='b  -background-light850_dark100 relative '>

      <Navbar />
      <div className="flex ">

        LeftSideBar

        <section className="flex min-h-screen flex-1 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">

          <div className="mx-auto w-full max-w-5xl"></div>

        </section>

        RightSideBar

      </div>

    </main>
  )
}

export default Layout