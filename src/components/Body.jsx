import persons from '../assets/img/bodyPeoples.png'
import {useState} from 'react'
const Body = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [classeHide, setClasseHide] = useState('classeInicial');
    const [classSucess, setClasseSucess] = useState('classeInicialHide');


    const clicou = (e) =>{
        e.preventDefault()

        if(!email.includes('@') || !email.includes('.com')){
            alert('insira um email válida')
        }else if(!password){
            alert('insira uma senha válida')
        }else{
            setClasseHide('hidde')
            setClasseSucess('classeSucess')
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
                            <input type="email" placeholder='exemple@gmail.com' onChange={(e)=>setEmail(e.target.value)} />
                        </label>
                        <label>
                            <p>Senha</p>
                            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
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
