import React from 'react';

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Key Features</h2>
      <div className="flex justify-between">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">🔍</span>
          <h3 className="text-xl font-bold mt-4">Instant Legal Advice</h3>
          <p>Get accurate and reliable answers to your legal questions in seconds.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">📄</span>
          <h3 className="text-xl font-bold mt-4">Document Summarization</h3>
          <p>Upload legal documents and receive concise summaries that highlight key points.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">🌐</span>
          <h3 className="text-xl font-bold mt-4">Wide Range of Topics</h3>
          <p>Our chatbot covers vast legal areas including civil, criminal, corporate, and family law.</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">⭐</span>
          <h3 className="text-xl font-bold mt-4">User-Friendly Interface</h3>
          <p>Interact with an intuitive and easy-to-use interface designed for seamless legal assistance.</p>
        </div>
      </div>
      <div className=" p-8">
      <h2 className="text-3xl font-bold text-center mb-8">How it Works</h2>
      <p className="text-center mb-8">
        Our AI chatbot will quickly analyze your query and provide precise, relevant advice tailored to your needs. If you have legal documents that require summarization, upload them directly through our platform. Within moments, you'll receive a clear and concise summary highlighting the key points of the document.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            <img src="path-to-chat-icon.png" alt="Chat Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Ask Your Question</h3>
          <p>Type your legal query into the chat interface.</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            <img src="path-to-document-icon.png" alt="Document Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
          <p>Submit your legal documents for summarization.</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            <img src="path-to-scales-icon.png" alt="Scales Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant Legal Advice</h3>
          <p>Receive accurate legal advice tailored to your needs.</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            <img src="path-to-checklist-icon.png" alt="Checklist Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Review Summaries</h3>
          <p>Read detailed and concise summaries of your documents.</p>
        </div>
      </div>
    </div>
    <div className=" py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic mb-4">"The AI legal assistant provided me with precise and timely advice. It has been a game-changer for our HR department."</p>
          <p className="text-right font-semibold">- KAP Shirva, HR Manager</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic mb-4">"As a software developer, I found the legal summaries extremely helpful and easy to understand. Highly recommend!"</p>
          <p className="text-right font-semibold">- Shenali Gamage, Software Developer</p>
        </div>
      </div>
    </div>
    <div className="py-12">
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Your Company</h1>
        <div>
          <a href="#" className="text-gray-300 hover:text-white px-3">Solutions</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Resources</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Company</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Support</a>
        </div>
      </nav>

      <header className="text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">
          Have questions or need further assistance? Reach out to us at <a href="mailto:email@example.com" className="text-green-500">email@example.com</a> or follow us on our social media channels. Your privacy is important to us. Read our <a href="#" className="text-green-500">Privacy Policy</a> and <a href="#" className="text-green-500">Terms of Service</a>.
        </p>
        <div>
          <button className="bg-green-500 py-2 px-4 mr-4 rounded">Try for Free</button>
          <button className="bg-transparent border border-white py-2 px-4 rounded">Request a Demo</button>
        </div>
      </header>

      <footer className="flex justify-center space-x-4 mt-8">
        <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
        <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
        <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
        <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
      </footer>
    </div>
    
    </div>
  );
};

export default KeyFeatures;


  