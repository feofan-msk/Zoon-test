import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const COMPANIES = [
  {
    title: "Google",
    statuses: ["все 30 заведений настроены"],
    tags: [
      {
        text: "Синхронизировано",
        isLoading: false
      },
      {
        text: "Инфа",
        isLoading: false
      },
      {
        text: "Прайс",
        isLoading: false
      },
      {
        text: "Фото",
        isLoading: false
      },
      {
        text: "Акции",
        isLoading: false
      }
    ],
    rating: 4.5,
    comments: [198, 15]
  },
  {
    title: "Shmoogle",
    statuses: ["все 30 заведений настроены", "4 настроено", "20 в поиске"],
    tags: [
      {
        text: "Создаём 3 страницы",
        isLoading: true
      },
      {
        text: "Инфа",
        isLoading: false
      },
      {
        text: "Прайс",
        isLoading: false
      },
      {
        text: "Фото",
        isLoading: false
      },
      {
        text: "Акции",
        isLoading: false
      }
    ],
    rating: 4.5,
    comments: [198, 15]
  }
];

ReactDOM.render(<App companies={COMPANIES} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
