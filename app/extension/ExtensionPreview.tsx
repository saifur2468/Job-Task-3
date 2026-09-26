// import ChatUI from "./ChatUI";
// import ConversationHistory from "./ConversationHistory";
// import ExtensionSidebar from "./ExtensionSidebar";

// export default function ExtensionPreview() {
//   return (
//     <div className="rounded-3xl  p-6">

//       <div className="grid grid-cols-[180px_1fr_220px] gap-5">

       
//         <ExtensionSidebar />

        
//         <ChatUI />

      
//         <ConversationHistory />

//       </div>

//     </div>
//   );
// }

















import ChatUI from "./ChatUI";
import ConversationHistory from "./ConversationHistory";
import ExtensionSidebar from "./ExtensionSidebar";

export default function ExtensionPreview() {
  return (
    <div className="w-full rounded-3xl bg-stone-50 p-3 sm:p-4 md:p-5 lg:p-6">
      <div
        className="
          grid w-full
          grid-cols-1
          gap-4
          md:grid-cols-[170px_minmax(0,1fr)]
          lg:grid-cols-[190px_minmax(0,1fr)_220px]
          xl:grid-cols-[210px_minmax(0,1fr)_240px]
        "
      >
        {/* Sidebar */}
        <div className="min-w-0">
          <ExtensionSidebar />
        </div>

        {/* Main Chat */}
        <div className="min-w-0">
          <ChatUI />
        </div>

        {/* Conversation History */}
        <div
          className="
            min-w-0
            md:col-span-2
            lg:col-span-1
          "
        >
          <ConversationHistory />
        </div>
      </div>
    </div>
  );
}

