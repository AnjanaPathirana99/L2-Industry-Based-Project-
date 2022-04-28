export const messageType = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "All messages"},
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Received messages" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Sent messages" }
  ];
  
  export function getMessageType() {
    return messageType.filter(type => type);
  }
  