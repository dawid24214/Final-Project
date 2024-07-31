import React from "react";
import './_OrderNow.scss'

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


                <button className='submit' type='submit'>Zatwierdz</button>
            </form>
        </section>
    );
};


export default OrderApp;


/*
const OrderApp = () => {
    /!* const nameRef = useRef();
     const countryRef = useRef();
     const addressRef = useRef();
     const cityRef = useRef();
     const phoneRef = useRef();
     const emailRef = useRef();
     const notesRef = useRef();
     const invoiceRef = useRef();


     const handleSubmit = async (e) => {
         e.preventDefault();

         const order = {
             name: nameRef.current.value,
             country: countryRef.current.value,
             address: addressRef.current.value,
             city: cityRef.current.value,
             phone: phoneRef.current.value,
             email: emailRef.current.value,
             notes: notesRef.current.value,
             invoice: invoiceRef.current.checked
         };

         const {data:order , error} = await createClient(order);

         if (error) {
             console.error(error);
         }

     };
 *!/
    return (
        <section className="contact">
            <form onSubmit={handleSubmit}>
                <h2>Szczegóły płatności</h2>
                <div className='input-box'>
                    <label htmlFor="name">Imię i Nazwisko*</label>
                    <input ref={nameRef} id="name" type='text' className='field' placeholder='Podaj swoje Imie'
                           required/>
                </div>

                <div className='input-box'>
                    <label htmlFor="country">Kraj*</label>
                    <input ref={countryRef} id="country" type='text' className='field' placeholder='Podaj swój kraj'
                           required/>
                </div>

                <div className='input-box'>
                    <label htmlFor="address">Adres*</label>
                    <input ref={addressRef} id="address" type='text' className='field' placeholder='Podaj swój adres'
                           required/>
                </div>

                <div className='input-box'>
                    <label htmlFor="city">Miasto*</label>
                    <input ref={cityRef} id="city" type='text' className='field' placeholder='Podaj swoje miasto'
                           required/>
                </div>

                <div className='input-box'>
                    <label htmlFor="phone">Telefon*</label>
                    <input ref={phoneRef} id="phone" type='text' className='field' placeholder='Podaj swój telefon'
                           required/>
                </div>

                <div className='input-box'>
                    <label htmlFor="email">Email*</label>
                    <input ref={emailRef} id="email" type='email' className='field' placeholder='Podaj swój email'
                           required/>
                </div>

                <div className='input-box'>
                    <label htmlFor="notes">Uwagi do zamówienia (np. dodatkowe informacje o adresie)</label>
                    <input ref={notesRef} id="notes" type='text' className='field' placeholder='Podaj swoje uwagi'/>
                </div>
                <div className='input-box'>
                    <label htmlFor="invoice">Chcę fakturę i wyrażam zgodę na jej wysyłkę drogą elektroniczną</label>
                    <input ref={invoiceRef} id="invoice" type='checkbox'/>
                </div>

                <button className='submit' type='submit'>Zatwierdź</button>
            </form>
        </section>
    );
};

export default OrderApp;
*/


/*const OrderApp = () => {
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                let {data: orders, error} = await createClient
                    .from('orders')
                    .select('*')
                if (error) {
                    setError(error);
                } else {
                    setOrders(orders);
                    console.log(orders)
                }
            } catch (error) {
                setError(error)
                console.log(error)
            }
        };
        fetchOrders();
    }, []);
    if (error) {
        return <div>Error:{error.message}</div>
    }
    return (
        <div>
            <h1>Orders</h1>
            {orders.length > 0 ? (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>{order.name}</li> // dostosuj do struktury swoich danych
                    ))}
                </ul>
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
};

export default OrderApp;*/

/*

import React from "react";

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


                <button className='submit' type='submit'>Zatwierdz</button>
            </form>
        </section>
    );
};


export default OrderApp;
*/





