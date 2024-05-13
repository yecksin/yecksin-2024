export interface GetAllChats {
  title: string;
  checked: boolean;
  icon: string;
  id: number;
  messages: Message[];
}

export interface Message {
  text: string;
  date: Date;
  sender: string;
}
