import React from "react";
import s from "./index.module.css";

export default function Index() {
  return (
      <div className={s.body}>
        <div className={s.header}>
          Стилизируй с помощью псевдоклассов
        </div>
        <div className={s.list}>
          <ul>
            <li>Put on this page information about your product</li>
            <li>A detailed description of your product</li>
            <li>Tell us about the advantages and merits</li>
            <li>Associate the page with the payment</li>
          </ul>
        </div>
        <div className={s.list}>
          <ul>
            <li>Put on this page information about your product</li>
            <li>A detailed description of your product</li>
            <li>Tell us about the advantages and merits</li>
            <li>Associate the page with the payment</li>
          </ul>
        </div>
        <div className={s.buttons}>
          <button>FULL STORY</button>
          <button>FULL STORY</button>
          <button>FULL STORY</button>
        </div>
        <div className={s.inputs}>
          <input type="text"/>
          <input type="text"/>
        </div>
      </div>
  )
}