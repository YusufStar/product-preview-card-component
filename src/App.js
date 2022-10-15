import desktopimage from "./desktop-image.jpg"
import mobileimage from "./mobile-image.jpg"
import carticon from "./icon-cart.svg"

function App() {
  return (
    <div className="h-screen overflow-hidden bg-cream flex flex-col items-center justify-center">
      <div className="desktop:w-[600px] desktop:h-[450px] rounded-xl bg-white flex desktop:flex-row laptop:flex-row mobile:flex-col mobile:w-[375px] mobile:h-[667px] laptop:w-[600px] laptop:h-[450px]">
        {window.innerWidth < 1024 ? <img src={mobileimage} alt="" className="rounded-t-xl w-[100%]" />:<img src={desktopimage} alt="" className="rounded-l-xl w-[50%]" />}
        <div className="w-[90%] h-full flex flex-row items-center justify-center">
          <div className="w-[90%] h-[90%] flex flex-col">
            <h1 className="font-normal items-start text-darkgrayishblue text-lg tracking-[5px]">Perfume</h1>
            {window.innerWidth < 1024 ? <h1 className="font-bold m-2 text-3xl text-verydarkblue items-center">Gabrielle Essence Eau De Parfum</h1>:<h1 className="font-bold m-2 text-2xl text-verydarkblue items-center">Gabrielle<br/>Essence Eau<br/>De Parfum</h1>}
            <p className="m-2 text-darkgrayishblue font-normal">A fioral, solar and voluptuous interperation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className="w-[90%] m-2 h-[10%] gap-6 flex flex-row items-center">
              <h1 className="text-darkcyan font-bold text-4xl">$149.99</h1>
              <h1 className="font-medium text-s text-darkgrayishblue"><del>$169.99</del></h1>
            </div>
            <button className="m-2 w-[90%] h-[12%] rounded-lg flex flex-row gap-3 items-center justify-center text-white bg-darkcyan"><img src={carticon} className="w-[16px] fill-white"/>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
