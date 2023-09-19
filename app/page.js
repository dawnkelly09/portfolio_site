import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>Hello! I'm Dawn Kelly</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About Me</Link></li>
        <li><Link href='/resume'>Resume</Link></li>
        <li><Link href='/Projects'>Projects</Link></li>
      </ul>
    </div>
  )
}

export default HomePage