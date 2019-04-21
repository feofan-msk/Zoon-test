/* eslint-disable react/jsx-filename-extension */

import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const COMPANIES = [
  {
    isLoading: false,
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
    comments: [198, 15],
    needActions: false,
    updates: 2
  },
  {
    isLoading: false,
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
    rating: null,
    comments: null,
    needActions: true,
    updates: 0
  },
  {
    isLoading: true,
    title: "2Gis",
    statuses: null,
    tags: [
      {
        text: "Создаём 3 страницы",
        isLoading: true
      }
    ],
    rating: null,
    comments: null,
    needActions: true,
    updates: 0
  }
];

ReactDOM.render(<App companies={COMPANIES} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
