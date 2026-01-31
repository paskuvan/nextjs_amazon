const Header = () => {
  return (
   <header className="fixed top-0 left-5 z-50 w-full py-10"> {/* left-0 */}
    <div className="container flex h-14 items-center max-lg:px-5">
        <a className="flex-1 cursor-pointer z-2">
            <img src="images/xora.svg" width={115} height={55} alt='logo' />
        </a>
    </div>
   </header>
  )
}

export default Header