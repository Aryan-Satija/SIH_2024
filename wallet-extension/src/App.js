import {useState} from 'react'; 
import { Select } from "antd";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateWallet from './components/createWallet';
import RecoverWallet from './components/recoverWallet';
import Wallet from './components/wallet';
import Apophis_logo from './assets/apophis.jpg';
import Kyc from './components/kyc';
import CreatePassword from './components/createPassword';
import Signin from './components/signin';
import { Switch } from 'antd'
function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");
  const [on, setOn] = useState(false);
  return (
    <div className="text-center w-[350px] h-[600px] flex flex-col items-center justify-start">
      <header className='flex flex-row items-center justify-between w-full px-4 my-4'>
            <div className='text-[18px] font-bold text-blue-600 flex flex-row gap-2 justify-center items-center'>
                {wallet && <span className='animate-spin rounded-full '><img src={Apophis_logo} height={40} width={40}/></span>}Apophis
            </div>
            <div className='flex flex-row items-center gap-2'>
              <div>
                  <Switch onChange={(checked)=>{
                    setOn(checked)
                  }}/>
              </div>
              <div>
                <Select
                  value={selectedChain}
                  onChange={(val) => setSelectedChain(val)}
                  options={
                    on ? 
                    [
                      {
                        label: "Ethereum",
                        value: "0x1"
                      },
                      {
                        label: "Polygon",
                        value: "0x89"
                      },
                      {
                        label: "Avalanche",
                        value: "0xa86a"
                      },
                      {
                        label: "Sepolia (Testnet)",
                        value: "0xAA36A7"
                      }
                    ] 
                    : 
                    [
                      {
                        label: "Ethereum",
                        value: "0x1"
                      },
                      {
                        label: "Polygon",
                        value: "0x89"
                      },
                      {
                        label: "Avalanche",
                        value: "0xa86a"
                      }
                    ]
                  }
                >
                </Select>
              </div>
          </div>
      </header>
      {
        wallet && seedPhrase ? <Routes>
            <Route path={"/wallet"} element={<Wallet wallet={wallet} seedPhrase={seedPhrase} setSeedPhrase={setSeedPhrase} setWallet={setWallet} selectedChain={selectedChain}/>}/>
            <Route path={"/password"} element={<CreatePassword seedPhrase={seedPhrase}/>}/>
        </Routes> : <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/recover"} element={<RecoverWallet setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/>
          <Route path={"/kyc"} element={<Kyc/>}/>
          <Route path={"/wallet"} element={<CreateWallet setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/>
          <Route path={"/signin"} element={<Signin setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/>
        </Routes>
      }
    </div>
  );
}

export default App;
