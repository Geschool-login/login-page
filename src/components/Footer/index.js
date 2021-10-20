import React from 'react';

import './style.css'


function Index( props ) {
    return (
        <footer className="col-12 footer">
            <div className="justify-content-center">
                <div className="col-12 text-light">
                    <ul className="list-inline d-flex footer-list">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://s.id/geschool" className="footer-link bold">Road Map to Geschool</a>
                        </li>
                    </ul>
                    <ul className="list-inline d-flex footer-list link-list">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://jogjakota.go.id/" className="footer-link">Dinas Kota Yogyakarta</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="http://yogyakarta.siap.web.id/" className="footer-link">Dinas Pendidikan Yogyakarta</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://dikpora.jogjaprov.go.id/" className="footer-link">Dikpora Yogyakarta</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 copyright mt-2">
                    &copy; {props.copyright}
                </div>
            </div>
        </footer>
    );
}

export default Index;