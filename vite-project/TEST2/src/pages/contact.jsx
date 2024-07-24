import React from "react";
import './_contact.scss';

export const Contact = () => {
    return (
        <section className="contact">
            <form>
                <h2>Kontakt</h2>
                <div className='input-box'>
                    <label>Imie</label>
                    <input type='text' className='field' placeholder='Podaj swoje Imie' required/>
                </div>

                <div className='input-box'>
                    <label>Adress email</label>
                    <input type='text' className='field' placeholder='Podaj swoj email' required/>
                </div>

                <div className='input-box'>
                    <label>Twoja waidomosc</label>
                    <input name='' id='' className='field' placeholder='Napisz swoja wiadomość' required/>
                </div>
                <button type='submit'>Wyslij wiadomość</button>
            </form>
        </section>
    );
};