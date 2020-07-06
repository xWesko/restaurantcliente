import React from 'react';
import { Routes, Route } from 'react-router';


//Paginas
import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';

//Componentes UI
import Sidebar from './components/ui/Sidebar';

function App() {
    return ( 
        <div className="md:flex min-h-screen ">
            <Sidebar />

            <div className="md:w-3/5 xl:w-4/5">
                <Routes>
                    <Route path="/" element={ <Ordenes/>  } /> 
                    <Route path="/menu" element={ <Menu/>  } />
                    <Route path="/nuevo-platillo" element={ <NuevoPlatillo/>  } />
                </Routes>
            </div>

       
        </div>
    );
}



export default App;


