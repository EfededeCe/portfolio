import Image from "next/image";

export const ChatBubble = ({ who, msg }) => {
  return (
    <>
      {who === "f" ? (
        <div className="chat chat-start">
          <div className="chat-image avatar online">
            <div className="w-10 rounded-full">
              <Image
                width={150}
                height={150}
                alt="Tailwind CSS chat bubble component"
                src="/avatar.jpeg"
              />
            </div>
          </div>
          <div className="chat-bubble max-w-md">{msg}</div>
        </div>
      ) : (
        <div className="chat chat-end">
          <div className="chat-image avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span className="text-2xl">i</span>
            </div>
          </div>
          <div className="chat-bubble chat-bubble-success font-medium max-w-md">
            {msg}
          </div>
        </div>
      )}
    </>
  );
};
