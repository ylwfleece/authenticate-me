import './LandingPage.css';
import buddha from './buddhap.jpg';
function LandingPage() {

    return (
        <div className="landing">
            <div>Welcome to Robinkarma</div>
            <img src={buddha} alt="buddha"/>
        </div>
    )
}

export default LandingPage;