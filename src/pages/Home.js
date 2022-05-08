import useAuth from "../hooks/useAuth";

export default function Home() {
  const { token, logout } = useAuth()
  return (
    <div>
      this is home
      <div>
        {token}
      </div>
      <button onClick={logout}>logout</button>
    </div>
  )
}
