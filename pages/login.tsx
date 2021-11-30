import React from "react";
import { getProviders, signIn } from "next-auth/react";

interface Props {
  providers: object;
}

const Login = ({ providers }: Props) => {
  return (
    <div className="bg-black flex flex-col items-center min-h-screen w-full justify-center">
      <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5" />

      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-white p-5 rounded-full"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
