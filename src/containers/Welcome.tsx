import ButtonWelcome from '../components/buttonwelcome/ButtonWelcome'; 

interface WelcomeProps{
    welcomeTitle: string; 
}

const Welcome = ({welcomeTitle}: WelcomeProps) => {    
    return (
        <>
            <div className="container alert alert-dark text-start display-5">
            <img src="../../logo.png" alt="logo" width="20%"/>
            <i className="fas fa-apple-alt m-1 text-danger"></i>
            <i className="fas fa-carrot m-1 text-warning"></i>
            <i className="fas fa-lemon m-1 text-success"></i>           
                {welcomeTitle}
            </div>
            <ButtonWelcome/>
            
        </>
    )
}

export default Welcome;
