import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AtroposComponent from '../components/atropos';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('[data-dialog-target]').forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-dialog-target');
        const dialog = document.querySelector(`[data-dialog="${target}"]`);
        const backdrop = document.querySelector(`[data-dialog-backdrop="${target}"]`);

        if (dialog && backdrop) {
          dialog.classList.add('opacity-100');
          backdrop.classList.remove('pointer-events-none', 'opacity-0');
          backdrop.classList.add('opacity-100');
        }
      });
    });

    document.querySelectorAll('[data-dialog-close]').forEach(button => {
      button.addEventListener('click', () => {
        const dialog = button.closest('[data-dialog]');
        const backdrop = document.querySelector(`[data-dialog-backdrop="${dialog.getAttribute('data-dialog')}"]`);

        if (dialog && backdrop) {
          dialog.classList.remove('opacity-100');
          backdrop.classList.add('pointer-events-none', 'opacity-0');
          backdrop.classList.remove('opacity-100');
        }
      });
    });
  }, []);

 return (
  <div className='bg-purple-950'>
    <nav className="w-22 bg-black h-20 p-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-5xl text-white font-bold">Tuttle</div>
      <div className="flex space-x-4">
        <Link to='/login' className="text-2xl text-white hover:text-gray-300 transition-colors duration-200 font-bold">
          Iniciar  
        </Link>
      </div>
    </nav>

    <section className="w-full bg-black h-full text-white flex justify-center">
      <AtroposComponent/>
    </section>

    <div className="flex flex-col items-center mt-60">
      <div className="w-4/5 p-4 text-6xl italic text-center">
        <p className="text-white">Empieza a trabajar con nosotros</p>
        <button
          data-ripple-light="true"
          data-dialog-target="dialog"
          className="select-none text-6xl rounded-lg bg-blue-500 from-gray-200 to-gray-800 py-3 px-6 mt-5 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          solicita
        </button>
        <div
          data-dialog-backdrop="dialog"
          data-dialog-backdrop-close="true"
          className="pointer-events-none inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="dialog"
            className="relative m-4 w-3/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              solicitud empleo
            </div>
            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              En TUTTLE, estamos especialmente sensibilizados con la protección de datos de los usuarios de los servicios a los que pueden acceder a través de nuestra página web. Según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD) y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD), mediante la presente Política de Privacidad, POLAR informa a los usuarios del sitio web sobre el tratamiento y usos a los que se someten los datos de carácter personal que se recaban en la web, con la finalidad solicitud de empleo y que al aceptar la presente Política, el usuario acepta el tratamiento de sus datos en los términos definidos
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-green-600 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"  
              >
                <Link className='py-6 px-6' to='/register'>Confirm</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
