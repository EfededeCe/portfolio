import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="avatar">
      <div className="mask mask-hexagon w-24">
        <Image src="/avatar.jpeg" width={100} height={100} alt="FDC" />
      </div>
    </div>
  );
};
