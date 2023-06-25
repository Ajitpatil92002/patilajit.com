import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex-center w-full">
      <Image
        src="/images/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
      <p>Please Wait ....</p>
    </div>
  );
};

export default Loading;
