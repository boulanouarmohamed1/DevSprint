import Image from "next/image";
const ImageWithCutout = ({titre,image,description}) => {
  return (
    <div className="flex flex-col gap-[30px]">
        <p className="font-medium text-3xl text-[#344054] px-8">{titre}</p>
        <div className="border-2 border-[#344054]"></div>
        <div className="relative  max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden w-full">
        <div className="relative">
            <Image
                src={image}
                alt="Main Image"
                layout="responsive"
                width={800}
                height={600}
                className="rounded-lg"
            />
        </div>
        <div
            className="absolute bottom-[-20px] right-[-20px] bg-white rounded-full shadow-md flex items-center justify-center"
            style={{ width: "120px", height: "120px" }}
        >
            <Image
                src="/assets/up right.png" 
                alt="Arrow Icon"
                width={50}
                height={50}
            />
        </div>
        </div>
    </div>
  );
};

export default ImageWithCutout;
