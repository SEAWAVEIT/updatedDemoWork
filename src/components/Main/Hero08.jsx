import React from "react";
import "../../index.css"

function Hero08() {
  return (
    <div className="Hero07 h-auto bg-white py-4">
      <section className="container mx-auto px-4 py-8 md:p-8">
        <h1 className="text-4xl md:text-6xl mb-8 text-center">FAQS</h1>

        <div className="space-y-4">
          <details className="w-full border rounded-lg faq-details">
            <summary className="question px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Ex orci laoreet egestas sapien magna egestas
              scelerisque?
            </summary>
            <p className="answer px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per
              nullam taciti at adipiscing est.
            </p>
          </details>
          <details className="w-full border rounded-lg faq-details">
            <summary className="question px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Lorem at arcu rutrum viverra metus sapien venenatis
              lobortis odio?
            </summary>
            <p className="answer px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
              porttitor egestas tincidunt neque vehicula potenti.
            </p>
          </details>
          <details className="w-full border rounded-lg faq-details">
            <summary className="question px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Eleifend feugiat sollicitudin laoreet adipiscing bibendum
              suscipit erat?
            </summary>
            <p className="answer px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Justo libero tellus integer tincidunt justo semper consequat
              venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
              pretium sodales vel magna et massa euismod vulputate sed.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Hero08;
