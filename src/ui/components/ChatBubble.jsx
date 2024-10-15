export const ChatBubble = () => {
  return (
    <section className="justify-center lg:max-w-5xl m-auto mt-10">
      <div className="chat chat-start">
        <div className="chat-image avatar online">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/avatar.jpeg" />
          </div>
        </div>
        <div className="chat-bubble">
          It was said that you would, destroy the Sith, not join them.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar online">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/avatar.jpeg" />
          </div>
        </div>
        <div className="chat-bubble">
          It was you who would bring balance to the Force
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar online">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/avatar.jpeg" />
          </div>
        </div>
        <div className="chat-bubble">Not leave it in Darkness</div>
      </div>
    </section>
  );
};
