import React, { useState } from 'react';
import './style.css';
import { Pocitadlo } from '../Pocitadlo';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <Pocitadlo typ="up" hlasy={likes} />
          <Pocitadlo typ="down" hlasy={dislikes} />
        </div>
      </div>
    </>
  );
};
