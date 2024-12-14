import Service from "../components/Service.jsx"
const Portfolio = () => {
    const services = [
        {
          title: "UI/UX Design",
          image: "/assets/Frame 61.png",
        },
        {
          title: "UI/UX Design",
          image: "/assets/Frame 61.png",
        },
        
      ];
  return (
    <div className="bg-white m-14  flex flex-col text-left justify-center items-center gap-28 p-10">
      <div className="flex justify-between items-center gap-10 w-full">
        <div className="text-left ">
          <h1 className="text-5xl font-bold mb-5">Let's have a look at</h1>
          <h1 className="text-5xl font-bold">my <span className="text-blue-500">Portfolio</span></h1>
        </div>
        <button className="px-6 text-white py-3 text-xl rounded-3xl font-bold bg-blue-500">See All</button>
      </div>
      <div className="flex justify-between w-full  ">
        {services.map((service, index) => (
          <div key={index} className="">
            <Service titre={service.title} image={service.image} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center gap-5 ">
        <button className="px-5 py-2 rounded-3xl bg-slate-300">Landing Page</button>
        <button className="px-5 py-2 rounded-3xl bg-slate-300">Landing Page</button>
        <button className="px-5 py-2 rounded-3xl bg-slate-300">Landing Page</button>
        <button className="px-5 py-2 rounded-3xl bg-slate-300">Landing Page</button>
        <button className="px-5 py-2 rounded-3xl bg-slate-300">Landing Page</button>
      </div>
      <div className="flex justify-between items-center gap-5 flex-col ">
      <h1 className="text-5xl font-bold mb-5">Lirante - Food Dilvery Solution</h1>
      <h1 className="text-xl  mb-5 w-1/2">LLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</h1>
      </div>
    </div>
  )
}

export default Portfolio