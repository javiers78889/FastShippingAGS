

export const Direcciones = () => {
    return (
        <>
            <div className='my-5'>
                <h2 className='text-center'>Mis Direcciones</h2>
                <div className='d-flex gap-4'>

                    <div className="card" style={{ width: '18rem' }}>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-airplane" viewBox="0 0 16 16">
                                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column ">
                            <h5 className="card-title text-center ">Aerea</h5>
                            <p className="card-text ">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-secondary">Copiar</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-life-preserver" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column ">
                            <h5 className="card-title text-center ">Maritima</h5>
                            <p className="card-text ">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-secondary">Copiar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
