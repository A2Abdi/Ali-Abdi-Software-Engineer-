import Resume from './Resume';

import profile from '../Data/profileData';

import '../Styles/Profile.css';

const Profile = () => {

    return (

        <section className="container_profile">
        
                <div className="content_main_profile">
        
                    <img src = {profile[0].img} className="main-hero"/>
        
                    <h1 className="main-hero-name">Ali Abdi</h1>
        
                    <span className="main-subtitle">Software Engineering at WSU</span>
        
                    <span className="main_info">
        
                        <a className="text_primary" href="https://drive.google.com/file/d/1z3ecMDlYeGc3ceNqq-QYMem6ICJVwYqv/view?usp=sharing" target = "_blank" rel="noopener noreferrer">resume</a>
        
                        <a className="text_primary" href="mailto:hj2182@wayne.edu">HJ2182@wayne.edu</a>
        
                    </span>
        
                </div>
        
                <Resume></Resume>
        
            </section>
    );
}
export default Profile;