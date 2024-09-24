import React, {useEffect, useState} from 'react'
import { FaRegCopy } from "react-icons/fa";
import { TbCopyCheck } from "react-icons/tb";
import { Button, List, message } from 'antd';
import { Tabs, Avatar } from "antd";
import {useNavigate} from 'react-router-dom';
const Wallet = ({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
  selectedChain
}) => {
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState(null);

  const navigate = useNavigate();
  
  useEffect(()=>{
    (async()=>{
      const response = await fetch(`http://localhost:5000/getFunds?userAddress=${wallet}&chain=${selectedChain}`);
      const data = await response.json();
      setBalance(data);
    })();
  }, []);


  const logout = async()=>{
    setWallet(null);
    setSeedPhrase(null);
    navigate("/");
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet).then(() => {
        setCopied(true);
        message.success('Seed phrase copied to clipboard!');
    }).catch((err) => {
        message.error('Failed to copy seed phrase!');
        console.error('Copying failed', err);
    });
  };
  let chain;
  if(selectedChain === '0x1'){
    chain = 'Ethereum';
  }
  else if(selectedChain === '0x89'){
    chain = 'Polygon';
  }
  else if(selectedChain === '0xa86a'){
    chain = 'Avalanche';
  }

  const items = [
    {
      key: '1',
      label: 'Tokens',
      children: <>
        {
          <List
            bordered
            itemLayout='horizontal'
            dataSource={balance ? balance.tokens : []}
            renderItem={(item)=>{
              <List.Item style={{ textAlign: "left" }}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.logo} />}
                      title={item.symbol}
                      description={item.name}
                    />
                    <div>
                      {(
                        Number(item.balance) /
                        10 ** Number(item.decimals)
                      ).toFixed(2)}{" "}
                      Tokens
                    </div>
              </List.Item>
            }}
          />
        }
      </>,
    },
    {
      key: '2',
      label: 'NFTs',
      children: 
        <>
        {
          balance && balance.nfts.length > 0? (<>{
            balance.nfts.map((e, i)=>{
                return (<>
                  <img src={e} key={i} alt={"nftImage"} className='h-[240px] w-[240px] object-cover rounded-[10px]'/>
                </>)
            })
          }</>) : (<>
            No Nfts Were Found
          </>)
        }
        </>
    },
    {
      key: '3',
      label: 'Transfer',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div className='w-full flex items-center flex-col justify-center'>
        <div className='flex flex-row items-center gap-2 text-stone-700 mt-4'>
              <div className='text-xs'>{wallet.substr(0,10)} ... {wallet.substr(32,10)}</div>
              <div className='cursor-pointer' onClick={copyToClipboard}>
                  {
                      copied ? <TbCopyCheck/> : <FaRegCopy/>  
                  }
              </div>
        </div>
        <div>
            <div className='text-xl' >
                {
                  balance?.balance
                } 
                {
                  chain
                }
            </div>
        </div> 
        <div className='mt-8 w-full flex flex-col items-center justify-center'>
          <Tabs defaultActiveKey='1' items={items}/>
        </div>      
        <div className='mt-8 w-full px-20'>
          <Button className='w-full' type='primary' onClick={logout}>
            Log Out
          </Button>
        </div>
    </div>
  )
}

export default Wallet