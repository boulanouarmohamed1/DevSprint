import Service from "../components/Service.jsx"
const Services = () => {
    const services = [
        {
          title: "UI/UX Design",
          image: "/assets/Frame 61.png",
        },
        {
          title: "UI/UX Design",
          image: "/assets/Frame 61.png",
        },
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
    <div className="bg-white pt-6">
      <div className="flex overflow-x-auto space-x-4 pb-4 sm:space-x-6 lg:space-x-8">
        {services.map((service, index) => (
          <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3">
            <Service titre={service.title} image={service.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services