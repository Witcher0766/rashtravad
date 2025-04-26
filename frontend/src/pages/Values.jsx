import React, { useEffect } from "react";
import bgImage from "../assets/background2.jpg";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Values = () => {

    const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
      <div id="values" className="relative w-full overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen min-h-[400px] max-h-[800px] w-full">
          {/* Background Image */}
          <img
            src={bgImage}
            alt="valuePage"
            className="w-full h-full object-cover object-left-bottom"
          />

          {/* Overlay */}
          <div className="absolute inset-0  flex flex-col p-6 sm:p-10 text-black text-center ">
            {/* Logo in top-left */}
            <div className="absolute top-2 left-10">
              <img src={logo} alt="logo" className="w-24 sm:w-32 h-auto" />
            </div>

            <div className="mt-10 sm:mt-10 max-w-4xl mx-auto ">
              {/* Vision */}
              <section>
                <h5 className="text-2xl font-semibold mb-2">VISION</h5>
                <p className="mb-4">
                  Our mission is to build a unified and empowered society by
                  embedding core national values, fostering a deep sense of
                  patriotism, and preserving India's rich cultural heritage. We
                  aim to promote sustainable development, ensuring that growth
                  is balanced with environmental responsibility and inclusivity.
                  By inspiring collective action, we seek to create a prosperous
                  Bharat where every citizen actively contributes to the
                  nation's progress, fostering unity, pride, and shared
                  responsibility for a brighter future.
                </p>
                <p>
                  हमारा मिशन एक सशक्त और एकजुट समाज का निर्माण करना है, जिसमें
                  मुख्य राष्ट्रीय मूल्यों की स्थापना, देशभक्ति की भावना को
                  प्रोत्साहित करना और भारत की समृद्ध सांस्कृतिक धरोहर को
                  संरक्षित करना शामिल है। हम सतत विकास को बढ़ावा देने का लक्ष्य
                  रखते हैं, जिससे विकास पर्यावरणीय जिम्मेदारी और समावेशिता के
                  साथ संतुलित हो। सामूहिक कार्यों को प्रेरित करके, हम एक समृद्ध
                  भारत का निर्माण करना चाहते हैं, जहां हर नागरिक राष्ट्र की
                  प्रगति में सक्रिय रूप से योगदान दे, एकता, गर्व और एक उज्जवल
                  भविष्य के लिए साझा जिम्मेदारी की भावना का पोषण करे।
                </p>
              </section>

              {/* Mission */}
              <section>
                <h5 className="text-2xl font-semibold mb-2">MISSION</h5>
                <p className="mb-4">
                  RASHTRAVAD’s mission is to lead transformative change through
                  strategic advocacy, active community engagement, and
                  innovative programs that advance national development, social
                  equity, and societal unity. We are dedicated to maintaining
                  the highest standards of integrity, transparency, and
                  inclusivity in all our efforts, ensuring that every initiative
                  fosters a cohesive and just society while contributing to the
                  nation's growth and progress.
                </p>
                <p>
                  RASHTRAVAD का मिशन रणनीतिक वकालत, सक्रिय सामुदायिक भागीदारी और
                  नवाचारपूर्ण कार्यक्रमों के माध्यम से परिवर्तनकारी बदलाव का
                  नेतृत्व करना है, जो राष्ट्रीय विकास, सामाजिक समानता और समाजिक
                  एकता को आगे बढ़ाते हैं। हम अपनी सभी पहलों में उच्चतम स्तर की
                  ईमानदारी, पारदर्शिता और समावेशिता बनाए रखने के लिए प्रतिबद्ध
                  हैं, यह सुनिश्चित करते हुए कि हर प्रयास एक सशक्त और न्यायपूर्ण
                  समाज का निर्माण करे और राष्ट्र की प्रगति और विकास में योगदान
                  दे।
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
