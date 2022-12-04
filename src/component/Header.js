import {useContext} from 'react';
import AppContext from '../AppContext';

const navigation = [
    // { name: 'Pricing', href: '#' },
    // { name: 'Company', href: '#' },
  ]
  
  export default function Header() {
    const {
        walletAddress,
        setWalletAddress
      } = useContext(AppContext);
    const connectWallet = () => {
        if(window.ethereum){
            console.log(window.ethereum);
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(res=>{
                    console.log(res);
                    setWalletAddress(res[0]) 
            })
          }else{
            alert("install metamask extension!!")
          }
    }
    return (
      <header className="bg-indigo-600">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
                {
                    walletAddress ? (<span className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  {`**** **** ${walletAddress?.substring(walletAddress?.length - 5)}`}
                      </span>): 
                
              (<button
               onClick = {() => {connectWallet()}}
                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Connect wallet
              </button>)
  }
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  