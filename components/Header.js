import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div className="Header">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="https://github.com/sarpere/React-js-Batman-Tv-Shows">
        <a style={linkStyle}>Github</a>
      </Link>
    </div>
  )
}
