import Image from "next/image";

export default function header() {
  return (
    <div className="header">
      <div className="logo">
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}
