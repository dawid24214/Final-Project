import React from "react";
import ReactDOM from "react-dom/client";
 const OrderApp = () => {
    return (
        <section className="contact">
            <form>
                <h2>Szczegóły płatności </h2>
                <div className='input-box'>
                    <label>Imię i Nazwisko*</label>
                    <input type='text' className='field' placeholder='Podaj swoje Imie' required/>
                </div>

                <div className='input-box'>
                    <label>Kraj*</label>
                    <input type='text' className='field' placeholder='Podaj swoj email' required/>
                </div>

                <div className='input-box'>
                    <label>Adres*</label>
                    <input name='' id='' className='field' placeholder='Napisz swoja wiadomość' required/>
                </div>

                <div className='input-box'>
                    <label>Miasto*</label>
                    <input name='' id='' className='field' placeholder='' required/>
                </div>

                <div className='input-box'>
                    <label>Telefon*</label>
                    <input name='' id='' className='field' placeholder='' required/>
                </div>

                <div className='input-box'>
                    <label>Email*</label>
                    <input name='' id='' className='field' placeholder='' required/>
                </div>

                <div className='input-box'>
                    <label>Uwagi do zamówienia (np. dodatkowe informacje o adresie)</label>
                    <input name='' id='' className='field' placeholder='' required/>
                </div>
                <div className='input-box'>
                    <label>Chcę fakturę i wyrażam zgodę na jej wysyłkę drogą elektroniczną</label>
                    <input type='checkbox'/>
                </div>


                <button type='submit'>Zatwierdz</button>
            </form>
        </section>
    );
 };
export default OrderApp;