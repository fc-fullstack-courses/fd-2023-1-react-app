import { createContext } from 'react';

export const UserContext = createContext();

export const ThemeContext = createContext();
/*
  Создать контекст юзера

  В компоненте App создать 2 компонента Header, Sidebar
  юзер хранится в стейте App

  Header и Sidebar должны получать данные юзера и частично их отрисовывать
  Нельзя передавать Header и Sidebar просы юзера
*/