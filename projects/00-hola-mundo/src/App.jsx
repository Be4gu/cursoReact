import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'ccrsitea34',
    name: 'Cristi',
    isFollowing: true,
  },
  {
    userName: 'Ragnarok',
    name: 'Ragnar Lobruck',
    isFollowing: true,
  },
  {
    userName: 'beaportomates',
    name: 'Beatriz P.',
    isFollowing: false,
  },
  {
    userName: 'Rokitomate',
    name: 'Andrei C.',
    isFollowing: false,
  },
]

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            initialIsFollowing={isFollowing}
            userName={userName}
            name={name}
            key={userName}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}

//CON COSAS QUE TENGO QUE APUNTARME PARA QUE NO SE ME OLVIDEN
// export function App() {
//   // const format = (userName) => `@${userName}` //Pasar funciones como parámetro
//   return (
//     <section className="App">
//       {/* Ejemplo de como pasar una funcion como prop */}
//       {/* <TwitterFollowCard formatUserName={format} isFollowing userName="ccrsitea34" name="entrellaves" /> */}

//       {/* Ejemplo de como pillar el elemento children del componente y utilizarlo dentro del mismo*/}
//       <TwitterFollowCard isFollowing userName="ccrsitea34" initialIsFollowing={true}>
//         entrellaves {/*<==Elemento children */}
//       </TwitterFollowCard>
//       <TwitterFollowCard isFollowing={false} userName="Ragnarok">
//         Ragnar Lodbrok
//       </TwitterFollowCard>
//       <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran" />
//     </section>
//   )
// }
