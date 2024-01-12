import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import { AppProps } from "next/app";


const SignIn = ({ providers }: {providers: AppProps }) => {
    const handleSignIn = async(providerID: string) => {
        const callbackURL = encodeURIComponent(window.location.origin);
        console.log(window.location.origin);
        await signIn(providerID, { callbackURL });
    }


  return (
    <>
        <h1>Sign in</h1>
        <div>
            {Object.values(providers).map((provider) => (
                <button key={provider.id} onClick={()=> handleSignIn(provider.id)}>Sign in with Discord</button>
            ))}
        </div>
    </>
  );

}

export default SignIn;


export const getServerSideProps: GetServerSideProps = async() => {
    const providers = await getProviders();
    return {
        props: { providers }
    }
}
