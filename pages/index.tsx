import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/Button'
import { theme } from '../styles/theme'
import {AiOutlineHome} from "react-icons/ai"

const Home: NextPage = () => {
  return (
    <div>
      
      <Head>
        <title>Dashboard - Comuniverse</title>
        <meta name="description" content="Test PJ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      
      <Button bg={theme.colors.primary} color={theme.colors.light_gray} text="Aqui botao" icon={<AiOutlineHome/>} />


      
    </div>
  )
}

export default Home
