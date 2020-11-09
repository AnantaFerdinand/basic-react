import React from 'react';
import {cekTahun, cekHari} from '../utils/Waktu';
const Hello = () => {
    return (
      <>
      <p>Hello, Selamat Datang di Web Programming Class</p>
      <p>Tahun Sekarang = {cekTahun()}</p>
      <p>Tanggal Sekarang = {cekHari()}</p>
      </>
  
    );
  };
  export default Hello;