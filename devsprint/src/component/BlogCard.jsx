export default function BlogCard({ image, category, author, date, title }) {
    return (
      <div className="flex rounded-3xl bg-white flex-col">
  
        {/* Image Section */}
        <div className="w-full rounded-3xl relative h-[430px] rounded-6xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-6xl" />
  
          {/* Circular Button with Hover Animation */}
          <button className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 overflow-hidden flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-6">
            <img
              src="/assets/simple.svg"
              alt="Action Icon"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
  
        {/* Content Section */}
        <div className="bg-white bg-opacity-90 p-4">
          {/* Category Tag */}
          <div className="inline-block px-3 py-1 bg-slate-400 text-white text-sm font-semibold rounded-lg">
            {category}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {author} • {date}
          </p>
          <h3 className="text-lg text-2xl mt-2">{title}</h3>
        </div>
      </div>
    );
  }
  