import Image from 'next/image'

export default function footer() {
  return (
    <div className="header">
      <div className="logo">
        <Image src="/images/footer_logo.png" alt="logo" width={100} height={100} />
      </div>
    </div>
  )
}
