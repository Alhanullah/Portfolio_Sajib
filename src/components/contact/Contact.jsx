import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const contactBgImage = ["projectsBG.jpg"];

const contactInfoList = [
    {
        icon: faEnvelopeOpenText,
        label: "alhanullah72423@gmail.com",
        href: "mailto:alhanullah72423@gmail.com",
    },
    {
        icon: faPhoneAlt,
        label: "+88 014 0168 0824",
        href: "tel:+8801401680824",
    },
];

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    };

    return (
        <form noValidate onSubmit={handleSubmit} className="needs-validation">
            <div className="mb-4">
                <input
                    type="text"
                    className="min-h-[48px] leading-[48px] bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Name"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    className="min-h-[48px] leading-[48px] bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Email"
                    required
                />
            </div>
            <div className="mb-4">
                <textarea
                    name="message"
                    className="min-h-[48px] leading-[48px] bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Message"
                    rows="4"
                    required
                ></textarea>
            </div>
            <div className="text-start">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-opacity-70 text-white px-8 py-3 rounded mb-4"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

const ContactFormCard = () => (
    <div className="bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
        <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
            Contact Us
        </h2>
        <p className="text-lg mb-12">
            We list your menu online, help you process orders.
        </p>
        <ContactForm />
    </div>
);

const ContactInfo = ({ contactInfoList }) => (
    <div className="mt-5 pt-md-4">
        {contactInfoList.map((info, i) => (
            <div
                className="bg-gray-800 max-w-[350px] mt-6 flex items-center rounded-xl p-5 md:text-xs"
                key={i}
            >
                <FontAwesomeIcon icon={info.icon} className="text-3xl px-2" />
                <a className="text-lg font-medium ml-4" href={info.href || "#!"}>
                    {info.label}
                </a>
            </div>
        ))}
    </div>
);

ContactInfo.propTypes = {
    contactInfoList: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.object.isRequired,
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
        })
    ).isRequired,
};

export default function Contact() {
    return (
        <section
            className="relative py-14 md:py-24 text-white min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/${contactBgImage[0]})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="container relative px-4">
                <div className="grid grid-cols-12 py-6 lg:gap-8">
                    <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
                        <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-6">
                            How can we help you?
                        </h2>
                        <p className="text-lg">
                            It’s easier to reach your savings goals when you have the right
                            savings account. Take a look and find the right one for you!
                        </p>
                        <ContactInfo contactInfoList={contactInfoList} />
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                        <ContactFormCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
