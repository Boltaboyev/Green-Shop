export interface FieldType {
  email?: string;
  password?: string;
  remember?: string;
}

export interface RegisterType {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

export interface HeroSliderType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  big_img_url: string;
  small_img_url: string;
  buttonText: string;
}

