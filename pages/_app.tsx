// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Chatbase Script */}
      <Script id="chatbase-script" strategy="afterInteractive">
        {`
          (function(){
            if(!window.chatbase || window.chatbase("getState")!=="initialized"){
              window.chatbase=(...arguments)=>{
                if(!window.chatbase.q){window.chatbase.q=[]}
                window.chatbase.q.push(arguments)
              };
              window.chatbase=new Proxy(window.chatbase,{
                get(target,prop){
                  if(prop==="q"){return target.q}
                  return(...args)=>target(prop,...args)
                }
              })
            }
            const onLoad=function(){
              const script=document.createElement("script");
              script.src="https://www.chatbase.co/embed.min.js";
              script.id="Q2k2luRogUtdukDNfLs76"; // keep your bot ID here
              script.domain="www.chatbase.co";
              document.body.appendChild(script);
            };
            if(document.readyState==="complete"){onLoad()}
            else{window.addEventListener("load",onLoad)}
          })();
        `}
      </Script>

      {/* Your actual app */}
      <Component {...pageProps} />
    </>
  );
}
