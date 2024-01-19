import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Dashboard.css';
import Especialidad from '../../Especialidad/Especialidad';
export default function Dashboard() {
  return (
    <div>
    <NavigationBar />
    {/* Aquí va el contenido principal de tu pantalla */}
    <div className="dashboard-content">
      <Especialidad/>
    </div>
  </div>
  )
}
