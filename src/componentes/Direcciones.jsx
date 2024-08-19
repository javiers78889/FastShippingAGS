import React, { useState } from 'react';
import '../estilos/app.css'; // Asegúrate de tener este archivo para los estilos

export const Direcciones = () => {
    const [flipped, setFlipped] = useState({ aerea: false, maritima: false,alternativa:false });

    const handleFlip = (card) => {
        setFlipped(prevState => ({
            ...prevState,
            [card]: !prevState[card]
        }));
    };

    return (
        < >
            <h2 className='text-center '>Mis Direcciones</h2>
            <div className='d-flex gap-4'>
                <div className={`carta-container ${flipped.aerea ? 'flipped' : ''}`} style={{ width: '18rem' }}>
                    <div className="card carta front ">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-airplane" viewBox="0 0 16 16">
                                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="card-title text-center">Aerea</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <button className="btn btn-secondary" onClick={() => handleFlip('aerea')}>Ver</button>
                        </div>
                    </div>
                    <div className="card carta back">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.854-5.146a.5.5 0 0 1-.708 0L8 9.207l-1.646-1.646a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.646a.5.5 0 0 1 .708.708L8.854 10.854z" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="card-title text-center">Contenido Copiado</h5>
                            <p className="card-text">
                                El contenido ha sido copiado exitosamente.
                            </p>
                            <button className="btn btn-secondary" onClick={() => handleFlip('aerea')}>Volver</button>
                        </div>
                    </div>
                </div>

                <div className={`carta-container ${flipped.maritima ? 'flipped' : ''}`} style={{ width: '18rem' }}>
                    <div className="card carta front">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-life-preserver" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="card-title text-center">Maritima</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <button className="btn btn-secondary" onClick={() => handleFlip('maritima')}>Ver</button>
                        </div>
                    </div>
                    <div className="card carta back">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.854-5.146a.5.5 0 0 1-.708 0L8 9.207l-1.646-1.646a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.646a.5.5 0 0 1 .708.708L8.854 10.854z" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="card-title text-center">Contenido Copiado</h5>
                            <p className="card-text">
                                El contenido ha sido copiado exitosamente.
                            </p>
                            <button className="btn btn-secondary" onClick={() => handleFlip('maritima')}>Volver</button>
                        </div>
                    </div>
                </div>
                <div className={`carta-container ${flipped.alternativa ? 'flipped' : ''}`} style={{ width: '18rem' }}>
                    <div className="card carta front">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="card-title text-center">Alternativa</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <button className="btn btn-secondary" onClick={() => handleFlip('alternativa')}>Ver</button>
                        </div>
                    </div>
                    <div className="card carta back">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.854-5.146a.5.5 0 0 1-.708 0L8 9.207l-1.646-1.646a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.646a.5.5 0 0 1 .708.708L8.854 10.854z" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="card-title text-center">Contenido Copiado</h5>
                            <p className="card-text">
                                El contenido ha sido copiado exitosamente.
                            </p>
                            <button className="btn btn-secondary" onClick={() => handleFlip('alternativa')}>Volver</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
