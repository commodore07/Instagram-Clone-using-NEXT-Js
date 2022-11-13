import React from 'react'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser
const signIn = ({ providers }) => {
  return (
    <>
    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">Powered by Sparrow Network</p>
    <div className="mt-40">
    {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-blue-500 p-3 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

// Middle Server
export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signIn