export type TButton = {
  htmlType: 'button' | 'submit' | 'reset';
  children: string;
  type?: 'secondary' | 'primary';
  onClick: () => void;
};

export type TTextBlock = {
  text: { title: string; paragraph: string };
  page: 'home' | 'gift';
};

export type TWrapper = {
  children: React.ReactNode;
  style: { transform: string };
};

export type TGift = {
  onClick: () => void;
};

export type THome = {
  onClick: () => void;
};
