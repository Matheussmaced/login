import persons from '../assets/img/bodyPeoples.png'
const Body = () => {
    return(
        <>
            <div id="containerMaster">
                <div id="container1">
                    <img src={persons} alt="Persons" />
                </div>

                <div id="container2">
                    <p>Bem vindo de volta</p>
                    <h1>Faça login na sua conta</h1>

                    <form >
                        <label>
                            <p>E-mail</p>
                            <input type="email" placeholder='exemple@gmail.com' />
                        </label>
                        <label>
                            <p>Senha</p>
                            <input type="password" placeholder='Password' />
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
                            <input type="submit" id='entrar' value='Entrar' />
                            <input type="submit" value='Ou faça login com o Google ' id='google'/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Body
