import {useState, useEffect, useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ethers} from 'ethers';
import web3 from 'web3';
import axios from 'axios';
import Header from "./Header";
import AppContext from '../AppContext';


    export default function Detail() {

    const [event, setEvent] = useState([]);
    const [nft, setNft] = useState({});
    const [error, setError] = useState();
    const loc = useLocation();
    const ids = loc?.pathname?.split('/');
    const id = ids[ids.length-1];
    const {
        walletAddress,
      } = useContext(AppContext);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            (async () => {
            const eve = await getEvents();
            if(walletAddress){
                const nftDetails =  await getNFTDetails();
                console.log(nftDetails);
                setNft(nftDetails);
            }
            setEvent(eve?.data);
        })();
        }
        return () => mounted = false;
      },[]);

      useEffect(() => {
            (async () => {
                if(walletAddress){
                    const nftDetails =  await getNFTDetails();
                    setNft(nftDetails);
                }
        })();

      },[walletAddress]);

      
      const getEvents = async () => {
        const ev =  await axios({
            method: 'get',
            url: `https://rails-admin-api.herokuapp.com/events/${id}`
          });
          return ev;
      }

      const getNFTDetails = async () => {
        const nftDetails =  await axios({
            method: 'get',
            url: `https://node-api-eth.herokuapp.com/v1/event/nft-detail?address=${walletAddress}&eventId=${id}`
          });
          console.log(nftDetails);
          return nftDetails?.data;
      }
      
      const signMessage = async ({ setError, message }) => {
        try {
         const accounts = await window.ethereum.send("eth_requestAccounts");
          // const provider = new ethers.providers.Web3Provider(window.ethereum);
          // const signer = provider.getSigner();
          
          const signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [message, walletAddress, 'Example password'],
          });
          
          // const signature = await signer.signMessage(message);
          // const signature = await web3.eth.personal.sign(hash, accounts[0])
          return {
            signature,
          };
        } catch (err) {
          setError(err.message);
        }
      };

      const mintNFT = async () => {
        try{
            const ev =  await axios({
                method: 'get',
                url: `https://node-api-eth.herokuapp.com/v1/event/register?address=${walletAddress}&eventId=${id}`
              });
            
              const message = web3.utils.hexToBytes(ev?.data?.dataToSign);
              const sig = await signMessage({
                setError,
                message,
              });
              if (sig) {
                try {
                    const response = await axios({
                        method: 'post',
                        url: 'https://node-api-eth.herokuapp.com/v1/event/register',
                        data: {
                            sign_data: sig?.signature,
                            request: ev?.data?.request
                        }
                      });
                      console.log(response);
                } catch(err) {
                    console.log(err);
                }
              }
        } catch (err) {
            console.log(err);
        }
      }
    return (
      <>
      <Header/>
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{event?.name}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          {event?.date}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 flex items-center">
            {
                Object.keys(nft).length === 0 ? (<button onClick = {mintNFT} className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                Mint NFT
    </button>) : (
        <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <img className="rounded-lg object-cover shadow-lg" src={nft?.logo_url} alt="" />
        </div>

        <div className="space-y-2">
          <div className="space-y-1 text-lg font-medium leading-6">
            <p className="text-indigo-600">{`Token No: ${nft?.token_id}`}</p>
          </div>
        </div>
      </div>
    )
            }
          </p>
        </div>
      </div>
    </div>
      </>
    )
  }
  