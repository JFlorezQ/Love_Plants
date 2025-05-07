function Banners() {
  return (
    <div className="m-4 p-8 max-w-full overflow-hidden">
      {/* Banner 1 */}
      <div className="flex justify-center items-center mb-4">
        <img
          src="/banner1.png"
          alt="banner1"
          className="w-full max-h-[30rem] object-cover"
        />
      </div>

      {/* Banners 2 y 3 */}
      <div className="flex justify-center items-stretch gap-4 px-20">
        <div className="w-1/2 h-[30rem] overflow-hidden">
          <img
            src="/banner2.png"
            alt="banner2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-[30rem] overflow-hidden">
          <img
            src="/banner3.png"
            alt="banner3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}



export default Banners;
