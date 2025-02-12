import '../Styles/Contact.css';

const Contact = () => {

    return(

        <section className="container_contact" id="contact">

                <p className="content__text email__text"><a href="mailto:HJ2182@wayne.edu">HJ2182@wayne.edu</a></p>

                <span className='contact_main'>
                    
                    <a className="content__text" target="_blank" href="https://www.linkedin.com/in/ali-abdi-47127321b/" rel="noopener noreferrer">LinkedIn</a>—

                    <a className="content__text" target="_blank" href="https://github.com/A2Abdi" rel="noopener noreferrer">Github</a>—

                    <a className="content__text" target="_blank" href="https://devpost.com/alifeki45"  rel="noopener noreferrer">Devpost</a>

                </span>

            </section>
    )
}
export default Contact;