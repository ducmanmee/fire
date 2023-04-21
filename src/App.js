import { getDatabase, ref, set, get, child, onValue } from 'firebase/database';
import { database } from './firebase';
import { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import {CiTempHigh} from 'react-icons/ci';
import {IoIosWater} from 'react-icons/io';
import {GiGasStove} from 'react-icons/gi';
import {HiFire} from 'react-icons/hi';


const dt = (data, dbR) => {
  var index = 0
  onValue(dbR, (snapshot) => {
    data[index] = snapshot.val();
    index++ ;
  }); 
}

//Độ ẩm
var dataHumi = [];
const dbRef = ref(database, 'firebase-react/update/Do am');
dt(dataHumi, dbRef);

//Nhiệt độ
var dataTemp = [];
const dbRef1 = ref(database, 'firebase-react/update/Nhiet do');
dt(dataTemp, dbRef1);

//Khí gas
var dataGas = [];
const dbRef2 = ref(database, 'firebase-react/update/Khi Gas');
dt(dataGas, dbRef2);


const App = () => {
  const [gas, setGas] = useState();
  const [humi, setHumi] = useState();
  const [temp, setTemp] = useState();
  const updateGas = () => {
    setGas(dataGas[dataGas.length - 1]);
  }
  const updateHumi = () => {
    setHumi(dataHumi[dataHumi.length - 1]);
  }
  const updateTemp = () => {
    setTemp(dataTemp[dataTemp.length - 1]);
  }
  setInterval(updateGas,1000);
  setInterval(updateHumi,1000);
  setInterval(updateTemp,1000);
  var a = 'white';
  var bgrc1, bgrc2, bgrc3 = '#04aa6d'
  if(temp > 50) { 
    bgrc1 = 'red';
  }
  else if(humi < 20) { 
    bgrc2 = 'red';
  }
  else if(gas > 500) { 
    bgrc3 = 'red';
  }

  return (
        <div className="App">
          <div className="header">
            <HiFire/>
            <p>HỆ THỐNG CẢNH BÁO CHÁY VÀ DẬP LỬA THÔNG MINH</p>
            <HiFire/>
          </div>

          <div className="container">
              <div className="my-team">
                <div><p style={{fontWeight: 'bold'}}>MEMBER</p></div>
                <div><p>Lê Đức Mạnh</p></div>
                <div><p>Đào Duy Quân</p></div>
                <div><p>Trần Như Hùng</p></div>
                <div><p>Bùi Văn Phương</p></div>

              </div>
              <div className="my-data">
                <div className="temp" style={{backgroundColor: bgrc1}}>
                  <p>Temperature</p>
                  <CiTempHigh className='icon' />
                  <div className='data'>{temp} &deg;C</div>
                </div>
                <div className="humi" style={{backgroundColor: bgrc2}}>
                  <p>Humidity</p>
                  <IoIosWater className='icon'/>
                  <div className='data'>{humi} %</div>
                  
                </div>
                <div className="gas" style={{backgroundColor: bgrc3}}>
                  <p>Gas</p>
                  <GiGasStove className='icon'/>
                  <div className='data'>{gas}</div>
                </div>
              </div>
          </div>
    </div>
  );
}

export default App

