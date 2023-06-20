import Resume from './resume'
import img from './Images/ALI .jpg'
function Profile() {
    return (
        <section className="content content--section content--section-fw content--main no-margin-r" id="top">
                <div className="content--main-center_align">
                    <img src = {img} className="main-hero"/>
                    <h1 className="main-h1">Ali Abdi</h1>
                    <span className="main-subtitle">Software Engineering at WSU</span>
                    <span className="padding-v">
                        <a className="text_primary force_underline" href="https://drive.google.com/file/d/1z3ecMDlYeGc3ceNqq-QYMem6ICJVwYqv/view?usp=sharing" target = "_blank">resume</a>
                        <a className="text_primary force_underline" href="mailto:hj2182@wayne.edu">HJ2182@wayne.edu</a>
                    </span>
                </div>
                    <Resume></Resume>
            </section>
    );
}
export default Profile;