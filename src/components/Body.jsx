import persons from '../assets/img/bodyPeoples.png'
import {useState} from 'react'
const Body = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [classeHide, setClasseHide] = useState('classeInicial');
    const [classSucess, setClasseSucess] = useState('classeInicialHide');

    const [classBtnEmail, setClassBtnEmail] = useState('classeInicialBtn');
    const [classBtnPassword, setClassBtnPassword] = useState('classeInicialBtn');


    const clicou = (e) =>{
        e.preventDefault()

        

        if(!email || !email.includes('@') || !email.includes('.com')){
            setClassBtnEmail('btnError')
        }else if(email.includes('@') || email.includes('.com')){
            setClassBtnEmail('classeInicialBtn')
        }

        if(!password){
            setClassBtnPassword('btnError')
        }else{
            setClasseHide('hidde')
            setClasseSucess('classeSucess')
            setClassBtnPassword('classeInicialBtn')
        }
    }

    const retornou = (e) =>{
        e.preventDefault()

        setEmail('')
        setPassword('')
        setClasseHide('classeInicial')
        setClasseSucess('hidde')
    }


    return(
        <>
            <div id="containerMaster">
                <div id="container1">
                    <img src={persons} alt="Persons" className={classeHide} />
                </div>

                <div id="container2" className={classeHide}>
                    <p>Bem vindo de volta</p>
                    <h1>Faça login na sua conta</h1>

                    <form >
                        <label>
                            <p>E-mail</p>
                            <input type="email" placeholder='exemple@gmail.com' onChange={(e)=>setEmail(e.target.value)} className={classBtnEmail} />
                        </label>
                        <label>
                            <p>Senha</p>
                            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className={classBtnPassword} />
                        </label>
                        <div id="esqueceu">
                            <label>
                                <input type="checkbox"/>
                                <span id='box'></span>
                            </label>

                            <p id='lembrar'>Lembre de mim</p>  
                            <a href="/">Esqueceu sua senha?</a>
                        </div>
                        <div id="buttons">
                            <input type="submit" id='entrar' value='Entrar' onClick={clicou} />
                            <input type="submit" value='Ou faça login com o Google ' id='google'/>
                        </div>
                    </form>
                </div>
            </div>
        
            <div id="sucess" className={classSucess}>
                    <h2>Obrigado por se cadastrar com o email {email}! </h2>
                    <input type="submit" value='Retornar' onClick={retornou} />
                </div>
        </>
    )
}

export default Body
