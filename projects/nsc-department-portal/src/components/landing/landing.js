import './landing.css';
import Background from '../../port.jpg'

const Landing = () => {
    return(
        <div className = 'Landing'>
            <img src = { Background} alt = 'A background jpeg' id = 'background' />
            <div id = 'form'>
                <form>
                    <h3>NSC PORTAL</h3>
                    <input type = 'text' placeholder = 'Username' />
                    <input type = 'password' placeholder = 'Password' />
                    <button id = 'login-button'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Landing;