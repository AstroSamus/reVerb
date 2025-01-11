
import React, { Component,useState,useEffect } from 'react';
import { withProviders } from './app/hocs';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import Uniswap from './components/Uniswap'; // Asegúrate de que la ruta sea correcta

// Definir el tipo para los datos de la gráfica
interface DataItem {
  date: string;
  stockA: number;
  stockB: number;
}

interface PoolData {
  gVarasInPool: number;
  priceGVaraInReVara: number;
  reVaraInPool: number;
}





function Components (){
  const [poolData, setPoolData] = useState<PoolData>({
    gVarasInPool: 0,
    priceGVaraInReVara: 0,
    reVaraInPool: 0
  });
  
  // Simulación de carga de datos (puedes reemplazar esto con una llamada a tu API)
  useEffect(() => {
    // Aquí pondrías el código para obtener los datos del pool, por ejemplo, de un contrato en la blockchain
    setPoolData({
      gVarasInPool: 1500,  // Cantidad de gVaras en el pool
      priceGVaraInReVara: 2.5,  // Precio de 1 gVara en términos de reVara
      reVaraInPool: 3000  // Cantidad de reVara en el pool
    });
  }, []);
  
  return (
    <>
 <h1 style={{ textAlign: 'center', marginTop:'30px' }}> Información del Pool</h1>
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', padding: '20px' }}>
      
      
      <div style={{ margin: '10px', width: '80%', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>1. Cantidad de gVaras en el Pool</h2>
        <p><strong>{poolData.gVarasInPool} gVaras</strong></p>
      </div>
  
      <div style={{ margin: '10px', width: '80%', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>2. Precio de gVara respecto a reVara</h2>
        <p><strong>{poolData.priceGVaraInReVara} reVara por gVara</strong></p>
      </div>
  
      <div style={{ margin: '10px', width: '80%', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>3. Cantidad de reVara en el Pool</h2>
        <p><strong>{poolData.reVaraInPool} reVara</strong></p>
      </div>
    </div>
    </>
   
  );
  
};

export const App = withProviders(Components);
