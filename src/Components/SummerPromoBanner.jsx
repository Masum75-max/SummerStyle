import Image from "next/image";

export default function SummerPromoBanner() {
  return (
    <div className="relative  overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 shadow-xl w-11/12 mx-auto my-8">

     
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/30 blur-2xl" />
     
      <div className="pointer-events-none absolute -bottom-8 right-1/3 h-32 w-32 rounded-full bg-orange-300/25 blur-2xl" />

      <div className="flex flex-col-reverse items-center justify-between gap-6 px-8 py-10 sm:flex-row sm:gap-0 sm:px-12 sm:py-12 lg:px-16">

     
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:max-w-sm lg:max-w-md">

          
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md">
            ☀️ Summer Sale
          </span>

         
          <h2
            className="mb-2 text-3xl font-extrabold leading-tight tracking-tight text-amber-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Grab Upto{" "}
            <span className="relative inline-block text-orange-500">
              50% Off
             
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-amber-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            On Summer Styles
          </h2>

      
          <p className="mb-6 text-sm font-medium leading-relaxed text-amber-700 sm:text-base">
            Beat the heat in style — shop our hottest summer collection while deals last. 🌊
          </p>

        
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-300/60 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            Shop Now
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

         
          <p className="mt-4 text-xs text-amber-600/70">
            🔥 Limited time offer &nbsp;·&nbsp; Free shipping on orders $50+
          </p>
        </div>

       
        <div className="relative flex-shrink-0">
         
          <div className="absolute -left-4 top-4 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-orange-500 text-white shadow-lg sm:-left-6 sm:h-20 sm:w-20">
            <span className="text-lg font-black leading-none sm:text-xl">50%</span>
            <span className="text-[10px] font-semibold uppercase tracking-tight">OFF</span>
          </div>

     
          <div className="relative h-52 w-52 overflow-hidden rounded-2xl sm:h-64 sm:w-64 lg:h-72 lg:w-72">
           
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUqRcQ6R6OImXzf2wZ1ABkV8IGcdP01Oy1g&s"
              alt="Summer product"
              fill
              className="object-cover object-center"
              priority
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-100/60 text-orange-300">
              
             
            </div>
          </div>
        </div>

      </div>

      
      <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400" />
    </div>
  );
}
