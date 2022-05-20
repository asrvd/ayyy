import Avatar from "../components/Avatar"
import IconBar from "../components/IconBar"
import { config } from "../config"
import Head from "next/head"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6" style={{backgroundColor: `${config.bgColor}`}}>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href={(process.env.NEXT_PUBLIC_CLOUDIMG_TOKEN) ? `https://${process.env.NEXT_PUBLIC_CLOUDIMG_TOKEN}.cloudimg.io/${config.avatar}?radius=500` : `${config.avatar}`} />
      </Head>
      <div className="flex flex-col justify-center align-center w-full lg:w-1/2 md:w-1/3 h-1/2">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Avatar />
          <h1 className="text-center text-xl font-[600] mt-3" style={{color: `${config.textColor}`}}>{config.name}</h1>
          <h1 className="text-[${config.textColor}] text-center text-md font-normal mt-5" style={{color: `${config.textColor}`}}>{config.description}</h1>
          <div className="w-full h-1/4 mt-5 lg:mt-3 md:mt-3">
            <IconBar />
          </div>
        </div>
      </div>
    </div>
  )
}
